const express = require("express");
const app = express();
app.use(express.json());
const port = process.env.PORT || 3000;
const {initializeDatabase} = require("./BE1.1_CW/db/db.connect");
const Event = require("./BE1.1_CW/models/events.models");
initializeDatabase();

const cors = require("cors");
  const corsOptions = {
    origin: "*",
    credentials: true,
    optionSuccessStatus: 200,
  };
  
  app.use(cors(corsOptions));

  
  const event1 = {
    "title": "Tech Conference",
    "type": "Offline",
    "date": "2023-07-13",
    "time": "07:00 AM IST",
    "price": 0,
    "image": "https://images.stockcake.com/public/6/8/e/68eb5183-ae69-4606-b384-4cfb8ce1fb05_large/tech-conference-speech-stockcake.jpg",
    "tags": ["tech", "design"],
    "description": "A conference about latest tech trends.",
    "venue": "Tech Park, Bangalore",
    "speakers": [
      { "name": "John Doe", "role": "Software Architect" }
    ],
    "dressCode": "Smart Casual",
    "ageRestriction": "18+"
  };

  const event2 = {
    "title": "Marketing Seminar",
    "type": "Offline",
    "date": "2023-08-15",
    "time": "10:00 AM - 12:00 PM",
    "price": 3000,
    "image": "https://media.gettyimages.com/id/1367899893/photo/multi-racial-diverse-group-of-people-working-with-paperwork-on-a-board-room-table-at-a.jpg?s=612x612&w=gi&k=20&c=9oHr7GSUfDVqlyQ2zFrkop_eIiUkf_qB2K4wUitoIfs=",
    "tags": ["marketing", "digital"],
    "description": "Learn latest digital marketing strategies.",
    "venue": "Marketing City, 789 Marketing Avenue",
    "speakers": [
      { "name": "Sarah Johnson", "role": "Marketing Manager" },
      { "name": "Michael Brown", "role": "SEO Specialist" }
    ],
    "dressCode": "Smart Casual",
    "ageRestriction": "18+"
  };

  async function createEvent(event) {
      try {
          const newEvent = new Event(event);
          const createNewEvent = await newEvent.save();
          console.log("New Event created: ", createNewEvent);
          return createNewEvent;
      } catch(error) {
          console.log("Error while creating Event: ", error);
      }
    }
    createEvent(event1);
    createEvent(event2);

    async function readEventsData() {
        try {
            const events = await Event.find();
            console.log(events);
            return events;
        } catch (error) {
            console.log("Error occuered while reading Events data: ", error);
        }
      }
      readEventsData();

        app.get("/events", async (req, res) => {
            try {
                //const events = await Event.find();
                const events = await readEventsData();
                console.log(events);
                if(events) {
                    res.status(200).json(events);
                } else {
                    res.status(404).json({error: "No Events found."})
                }
            } catch (error) {
                res.status(500).json({ error: "Failed to fetch events" });
            }
        });

        app.get("/events/:id", async (req, res) => {
            try {
                const event = await Event.findById(req.params.id);
                if (!event) {
                    return res.status(404).json({ error: "Event not found" });
                }
                res.status(200).json(event);
            } catch (error) {
                res.status(500).json({ error: "Failed to fetch event" });
            }
        });

      app.listen(port, ()=> {console.log("server is running at port: ", port)});