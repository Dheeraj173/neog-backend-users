import Events from "../components/Events";

export default function App() {
  return (
    <main className="container mt-4">
      <h1 className="mb-4">All Events</h1>
      <Events />
    </main>
  );
}


// import { useState } from "react";
// import Events from "../components/Events";
// import EventDetails from "../components/EventDetails";

// export default function App() {
//   const [selectedEventId, setSelectedEventId] = useState(null);

//   return (
//     <main>
//       <h1>All Events</h1>

//       {selectedEventId ? (
//         <EventDetails
//           eventId={selectedEventId}
//           goBack={() => setSelectedEventId(null)}
//         />
//       ) : (
//         <Events onSelectEvent={setSelectedEventId} />
//       )}
//     </main>
//   );
// }

// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
//import './App.css'
// import Restaurants from "../components/Restaurants";
// import Books from "../components/Books";
// import BookTitle from "../components/BookTitle";
// import BookByAuthor from "../components/BookByAuthor";
// import AddBookForm from "../components/AddBookForm";

// import Hotels from "../components/Hotels";
// import HotelsByTitle from "../components/HotelsByTitle";
// import AddHotelForm from "../components/AddHotelForm";

// export default function App() {
// return (
//         <main>
//           <h1>All Hotels</h1>
//           <AddHotelForm />
//           <Hotels />
//         </main>
//         );
// }

// export default function App() {
// return (
//         <main>
//           <h1>All Books</h1>
//           <AddBookForm />
//           <Books />
//         </main>
//         );
// }

  // function App() {
//     return (
//       <h1>Hello React 🚀</h1>
//     )
// }
  
//   export default App;

  // const [count, setCount] = useState(0)

  // return (
  //   <>
  //     <div>
  //       <a href="https://vite.dev" target="_blank">
  //         <img src={viteLogo} className="logo" alt="Vite logo" />
  //       </a>
  //       <a href="https://react.dev" target="_blank">
  //         <img src={reactLogo} className="logo react" alt="React logo" />
  //       </a>
  //     </div>
  //     <h1>Vite + React</h1>
  //     <div className="card">
  //       <button onClick={() => setCount((count) => count + 1)}>
  //         count is {count}
  //       </button>
  //       <p>
  //         Edit <code>src/App.jsx</code> and save to test HMR
  //       </p>
  //     </div>
  //     <p className="read-the-docs">
  //       Click on the Vite and React logos to learn more
  //     </p>
  //   </>
  // )
//}

//export default App
