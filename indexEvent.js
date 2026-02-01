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
    "image": "https://via.placeholder.com/400",
    "tags": ["tech", "conference"],
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
    "image": "https://via.placeholder.com/400",
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
    //createEvent(event1);
    //createEvent(event2);

    async function readEventsData() {
        try {
            const events = await Event.find();
            console.log(events);
            return events;
        } catch (error) {
            console.log("Error occuered while reading Events data: ", error);
        }
      }
      //readEventsData();

      app.listen(port, ()=> {console.log("server is running at port: ", port)});