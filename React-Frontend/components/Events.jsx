import useFetch from "../src/useFetch";

const Events = ({ onSelectEvent }) => {
  const { data, loading, error } = useFetch(
    "https://neog-backend-users.vercel.app/events"
  );
// //https://neog-backend-users.vercel.app/events/${eventId}` for id
  if (loading) return <p>Loading events...</p>;
  if (error) return <p>Error loading events</p>;

  return (
    <ul>
      {data?.map((event) => (
        <li key={event._id}>
          <h3>{event.title}</h3>
          <p>
            {event.date} • {event.time} • {event.type}
          </p>
          <button onClick={() => onSelectEvent(event._id)}>
            View Details
          </button>
        </li>
      ))}
    </ul>
  );
};

export default Events;

// const Events = () => {
//   const { data, loading, error } = useFetch(
//     "https://neog-backend-users.vercel.app/events"
//   );
// //https://neog-backend-users.vercel.app/events/${eventId}` for id
//   if (loading) return <p>Loading events...</p>;
//   if (error) return <p>Error loading events</p>;

//   return (
//     <div className="container">
//       <div className="row">
//         {data?.map((event) => (
//           <div className="col-md-4 mb-4" key={event._id}>
//             <EventCard event={event} />
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };



