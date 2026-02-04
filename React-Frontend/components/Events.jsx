import { useState } from "react";
import useFetch from "../src/useFetch";
import EventDetails from "../components/EventDetails";

const Events = () => {
  const [selectedEventId, setSelectedEventId] = useState(null);

  const { data, loading, error } = useFetch(
    "https://neog-backend-users.vercel.app/events",
    []
  );

  if (loading) return <p>Loading events...</p>;
  if (error) return <p>Error loading events</p>;

  // 👇 IF an event is selected → show details
  if (selectedEventId) {
    return (
      <EventDetails
        eventId={selectedEventId}
        onBack={() => setSelectedEventId(null)}
      />
    );
  }

  return (
    <div className="container">
      <div className="row">
        {data.map((event) => (
          <div className="col-md-4 mb-4" key={event._id}>
            <div className="card h-100 shadow-sm">
              <img
                src={event.image || "https://via.placeholder.com/400"}
                className="card-img-top"
                alt={event.title}
              />

              <div className="card-body d-flex flex-column">
                <h5 className="card-title">{event.title}</h5>

                <p className="card-text text-muted">
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

  // 👇 ELSE show list
//   return (
//     <ul>
//       {data.map((event) => (
//         <li key={event._id}>
//           <h3>{event.title}</h3>
//           <p>{event.date} • {event.time}</p>

//           <button onClick={() => setSelectedEventId(event._id)}>
//             View Details
//           </button>
//         </li>
//       ))}
//     </ul>
//   );
// };

export default Events;


// import useFetch from "../src/useFetch";

// const Events = ({ onSelectEvent }) => {
//   const { data, loading, error } = useFetch(
//     "https://neog-backend-users.vercel.app/events",[]
//   );
// // //https://neog-backend-users.vercel.app/events/${eventId}` for id
//   if (loading) return <p>Loading events...</p>;
//   if (error) return <p>Error loading events</p>;

//   return (
//     <ul>
//       {data?.map((event) => (
//         <li key={event._id}>
//           <h3>{event.title}</h3>
//           <img
//             src={event.image}
//             alt={event.title}
//             width="250"
//           />
//           <p>
//             {event.date} • {event.time} • {event.type}
//           </p>
//           <button onClick={() => onSelectEvent(event._id)}>
//             View Details
//           </button>
//         </li>
//       ))}
//     </ul>
//   );
// };

// export default Events;



