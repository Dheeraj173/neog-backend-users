import { useState } from "react";
import useFetch from "../src/useFetch";
import EventDetails from "../components/EventDetails";

const Events = () => {
  const [selectedEventId, setSelectedEventId] = useState(null);

  const { data, loading, error } = useFetch(
    "https://neog-backend-users-ya26.vercel.app/events", []
    //"https://neog-backend-users.vercel.app/events",[]
  );

  if (loading) return <p>Loading events...</p>;
  if (error) return <p>Error loading events</p>;

  if (selectedEventId) {
    return (
      <EventDetails
        eventId={selectedEventId}
        onBack={() => setSelectedEventId(null)}
      />
    );
  }

  return (
    <div className="container ps-5">
      <div className="row">
        {data.map((event) => (
          <div className="col-md-4 mb-4" key={event._id}>
            <div className="card">
              <img
                src={event.image}
                className="card-img-top"
                alt={event.title}
              />

              <div className="card-body d-flex flex-column">
                <h5 className="card-title">{event.title}</h5>

                <p className="card-text">
                  {event.date} • {event.time}
                </p>

                <button
                  className="btn btn-primary mt-auto"
                  onClick={() => setSelectedEventId(event._id)}
                >
                  View Details
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Events;




