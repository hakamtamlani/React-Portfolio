// import React, { useState } from "react";

import "./App.css";
import Hero from "./Hero";
import Navbar from "./Navbar";
import Analytics from "./Analytics";
import Newsletter from "./Newsleter";
import Footer from "./Footer";
const App = () => {
  // const [name, setname] = useState("");
  // const [lastname, setlastname] = useState("");
  // const [store, setstore] = useState([]);

  // const handleButton = () => {
  //   setstore([...store, { name, lastname }]);
  //   setname("");
  //   setlastname("");
  // };
  return (
    <div>
      <Navbar />
      <Hero />
      <Analytics />
      <Newsletter />
      <Footer />
      {/* <div className="grid grid-cols-4 gap-3">
        {store.map((item, index) => (
          <>
            <div className="border p-3">
              <button>Click me</button>
              <p>
                {index + 1} {item.name}
                {item.lastname}
              </p> */}
    </div>
    // </>
    //   ))}
    // </div>
    // <input
    //   type="text"
    //   value={name}
    //   onChange={(e) => setname(e.target.value)}
    //   placeholder="Add Name"
    //   className="my-12 px-8 py-6"
    // />
    // <input
    //   type="text"
    //   value={lastname}
    //   onChange={(e) => setlastname(e.target.value)}
    //   placeholder="Add Name"
    //   className="my-12 px-8 py-6"
    // />
    // <button
    //   className=" bg-red-600"
    //   disabled={name === "" && true}
    //   onClick={handleButton}
    // >
    //   Add Data
    // </button>
    // </div>
  );
};

export default App;
