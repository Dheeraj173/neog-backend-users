import useFetch from "../src/useFetch";

const EventDetails = ({ eventId, goBack }) => {
  const { data, loading, error } = useFetch(
    `https://neog-backend-users.vercel.app/events/${eventId}`
  );

  if (loading) return <p>Loading event...</p>;
  if (error) return <p>Error loading event</p>;
  if (!data) return null;

  return (
    <div>
      <button onClick={goBack}>⬅ Back to Events</button>

      <h2>{data.title}</h2>
      <img src={data.image} alt={data.title} width="400" />

      <p><b>Date:</b> {data.date}</p>
      <p><b>Time:</b> {data.time}</p>
      <p><b>Type:</b> {data.type}</p>
      <p><b>Venue:</b> {data.venue}</p>
      <p><b>Price:</b> ₹{data.price}</p>

      <h4>Description</h4>
      <p>{data.description}</p>

      <h4>Speakers</h4>
      <ul>
        {data.speakers.map((s, index) => (
          <li key={index}>
            {s.name} – {s.role}
          </li>
        ))}
      </ul>

      <p><b>Dress Code:</b> {data.dressCode}</p>
      <p><b>Age Restriction:</b> {data.ageRestriction}</p>

      <h4>Tags</h4>
      {data.tags.map(tag => (
        <span key={tag}>#{tag} </span>
      ))}
    </div>
  );
};

export default EventDetails;


// import { useParams } from "react-router-dom";
// import useFetch from "../src/useFetch";

// const EventDetails = () => {
//   const { id } = useParams();
//   const { data, loading, error } = useFetch(
//     `https://YOUR-VERCEL-BACKEND-URL/events/${id}`
//   );

//   if (loading) return <p>Loading...</p>;
//   if (error) return <p>Error loading event</p>;

//   return (
//     <div className="container mt-4">
//       <h2>{data.title}</h2>
//       <img src={data.image} alt={data.title} className="img-fluid mb-3" />

//       <p><b>Date:</b> {data.date}</p>
//       <p><b>Time:</b> {data.time}</p>
//       <p><b>Type:</b> {data.type}</p>
//       <p><b>Venue:</b> {data.venue}</p>
//       <p><b>Price:</b> ₹{data.price}</p>

//       <h4>Description</h4>
//       <p>{data.description}</p>

//       <h4>Speakers</h4>
//       <ul>
//         {data.speakers.map((s, index) => (
//           <li key={index}>
//             {s.name} – {s.role}
//           </li>
//         ))}
//       </ul>

//       <p><b>Dress Code:</b> {data.dressCode}</p>
//       <p><b>Age Restriction:</b> {data.ageRestriction}</p>

//       <div>
//         {data.tags.map(tag => (
//           <span key={tag} className="badge bg-danger me-2">{tag}</span>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default EventDetails;
