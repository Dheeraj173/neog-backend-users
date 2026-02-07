import useFetch from "../src/useFetch";

const EventDetails = ({ eventId, onBack }) => {
  const { data, loading, error } = useFetch(
    `https://neog-backend-users.vercel.app/events/${eventId}`
  );

  if (loading) return <p>Loading event...</p>;
  if (error) return <p>Error loading event</p>;
  if (!data) return null;

  return (
    <div className="container ps-5">
      

      <div>
        <img
          src={data.image}
          className="card-img-top"
          alt={data.title}
        />

        <div className="card-body">
          <h3 className="card-title">{data.title}</h3>

          <p>
            {data.date} • {data.time} • {data.type}
          </p>

          <p><b>Venue:</b> {data.venue}</p>
          <p><b>Price:</b> ₹{data.price}</p>

          <h5>Description</h5>
          <p>{data.description}</p>

          <h5>Speakers</h5>
          <ul>
            {data.speakers.map((s, index) => (
              <li key={index}>
                {s.name} – {s.role}
              </li>
            ))}
          </ul>

          <p><b>Dress Code:</b> {data.dressCode}</p>
          <p><b>Age Restriction:</b> {data.ageRestriction}</p>

          <div className="mt-3">
            {data.tags.map((tag) => (
              <button className="btn btn-secondary me-2">
                  {tag}
              </button>
            ))}
          </div>
        </div>
        <button className="btn btn-primary mt-3 mb-3" onClick={onBack}>
        Back
      </button>
      </div>
    </div>
  );
};

//   return (
//     <div>
//       <button onClick={onBack}>⬅ Back to Events</button>

//       <h2>{data.title}</h2>
//       <img src={data.image} alt={data.title} width="400" />

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

//       <h4>Tags</h4>
//       {data.tags.map(tag => (
//         <span key={tag}>#{tag} </span>
//       ))}
//     </div>
//   );
// };

export default EventDetails;
