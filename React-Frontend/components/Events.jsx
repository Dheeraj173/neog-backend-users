import { useState } from "react";
import useFetch from "../src/useFetch";
import EventDetails from "../components/EventDetails";

const Events = () => {
  const [selectedEventId, setSelectedEventId] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [filterType, setFilterType] = useState("All");

  const { data, loading, error } = useFetch(
    "https://neog-backend-users.vercel.app/events",
    []
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

  // 🔎 Step 1: Apply Search Filter
  let filteredEvents = data.filter((event) =>
    event.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // 🔽 Step 2: Apply Dropdown Filter
  if (filterType !== "All") {
    filteredEvents = filteredEvents.filter(
      (event) => event.type === filterType
    );
  }

  return (
    <div>
      {/* 🔍 Search + Filter Section */}
      <div className="row mb-4">
        <div className="col-md-6">
          <input
            type="text"
            className="form-control"
            placeholder="Search events..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        <div className="col-md-3">
          <select
            className="form-select"
            value={filterType}
            onChange={(e) => setFilterType(e.target.value)}
          >
            <option value="All">All</option>
            <option value="Online">Online</option>
            <option value="Offline">Offline</option>
          </select>
        </div>
      </div>

      {/* 🎫 Event Cards */}
      <div className="row">
        {filteredEvents.length > 0 ? (
          filteredEvents.map((event) => (
            <div className={
    filteredEvents.length === 1
      ? "col-12 mb-4 d-flex"
      : "col-12 col-sm-6 col-md-4 mb-4 d-flex"
  } key={event._id}>
              <div className="card h-100 w-100 shadow-sm">
                <img
                  src={event.image}
                  className="card-img-top"
                  alt={event.title}
                  style={{
                    height: "200px",
                    objectFit: "cover",
                  }}
                />

                <div className="card-body d-flex flex-column">
                  <h5 className="card-title">{event.title}</h5>

                  <p className="card-text">
                    {event.date} • {event.time}
                  </p>

                  <span className="badge bg-secondary mb-2">
                    {event.type}
                  </span>

                  <button
                    className="btn btn-primary mt-auto"
                    onClick={() => setSelectedEventId(event._id)}
                  >
                    View Details
                  </button>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p>No events found.</p>
        )}
      </div>
    </div>
  );
};

export default Events;



// import { useState } from "react";
// import useFetch from "../src/useFetch";
// import EventDetails from "../components/EventDetails";

// const Events = () => {
//   const [selectedEventId, setSelectedEventId] = useState(null);
//   const [searchTerm, setSearchTerm] = useState("");
//   const [filterType, setFilterType] = useState("All");

//   const { data, loading, error } = useFetch(
//     "https://neog-backend-users.vercel.app/events",
//     []
//   );

//   if (loading) return <p>Loading events...</p>;
//   if (error) return <p>Error loading events</p>;

//   if (selectedEventId) {
//     return (
//       <EventDetails
//         eventId={selectedEventId}
//         onBack={() => setSelectedEventId(null)}
//       />
//     );
//   }

//   // 🔎 Filter Logic
//   const filteredEvents = data.filter((event) => {
//     const matchesSearch = event.title
//       .toLowerCase()
//       .includes(searchTerm.toLowerCase());

//     const matchesType =
//       filterType === "All" || event.type === filterType;

//     return matchesSearch && matchesType;
//   });

//   return (
//     <div className="container ps-5">
//       {/* 🔍 Search + Filter Section */}
//       <div className="row mb-4">
//         <div className="col-md-6">
//           <input
//             type="text"
//             className="form-control"
//             placeholder="Search events..."
//             value={searchTerm}
//             onChange={(e) => setSearchTerm(e.target.value)}
//           />
//         </div>

//         <div className="col-md-3">
//           <select
//             className="form-select"
//             value={filterType}
//             onChange={(e) => setFilterType(e.target.value)}
//           >
//             <option value="All">All</option>
//             <option value="Online">Online</option>
//             <option value="Offline">Offline</option>
//           </select>
//         </div>
//       </div>

//       {/* 🎫 Event Cards */}
//       <div className="row">
//         {filteredEvents.length > 0 ? (
//           filteredEvents.map((event) => (
//             <div className="col-md-4 mb-4 d-flex" key={event._id}>
//               <div className="card h-100 w-100 shadow-sm">
//                 <img
//                   src={event.image}
//                   className="card-img-top"
//                   alt={event.title}
//                   style={{
//                     height: "200px",
//                     objectFit: "cover",
//                   }}
//                 />

//                 <div className="card-body d-flex flex-column">
//                   <h5 className="card-title">{event.title}</h5>

//                   <p className="card-text">
//                     {event.date} • {event.time}
//                   </p>

//                   <span className="badge bg-secondary mb-2">
//                     {event.type}
//                   </span>

//                   <button
//                     className="btn btn-primary mt-auto"
//                     onClick={() => setSelectedEventId(event._id)}
//                   >
//                     View Details
//                   </button>
//                 </div>
//               </div>
//             </div>
//           ))
//         ) : (
//           <p>No events found.</p>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Events;


// import { useState } from "react";
// import useFetch from "../src/useFetch";
// import EventDetails from "../components/EventDetails";

// const Events = () => {
//   const [selectedEventId, setSelectedEventId] = useState(null);
//     const [searchTerm, setSearchTerm] = useState("");
//   const [filterType, setFilterType] = useState("All");

//   const { data, loading, error } = useFetch(
//     "https://neog-backend-users-ya26.vercel.app/events", []
//     //"https://neog-backend-users.vercel.app/events",[]
//   );

//   if (loading) return <p>Loading events...</p>;
//   if (error) return <p>Error loading events</p>;

//   if (selectedEventId) {
//     return (
//       <EventDetails
//         eventId={selectedEventId}
//         onBack={() => setSelectedEventId(null)}
//       />
//     );
//   }

//   return (
//     <div className="container ps-5">
//       <div className="row">
//         {data.map((event) => (
//           <div className="col-md-4 mb-4 d-flex" key={event._id}>
//             <div className="card h-100 w-100">
//               <img
//                 src={event.image}
//                 className="card-img-top"
//                 alt={event.title}
//               />

//               <div className="card-body d-flex flex-column">
//                 <h5 className="card-title">{event.title}</h5>

//                 <p className="card-text">
//                   {event.date} • {event.time}
//                 </p>

//                 <button
//                   className="btn btn-primary mt-auto"
//                   onClick={() => setSelectedEventId(event._id)}
//                 >
//                   View Details
//                 </button>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };
// export default Events;




