import { useState } from "react";
import useFetch from "./useFetch";
import EventDetails from "./EventDetails";

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

  // 👇 ELSE show list
  return (
    <ul>
      {data.map((event) => (
        <li key={event._id}>
          <h3>{event.title}</h3>
          <p>{event.date} • {event.time}</p>

          <button onClick={() => setSelectedEventId(event._id)}>
            View Details
          </button>
        </li>
      ))}
    </ul>
  );
};

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



