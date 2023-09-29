import React from "react";

const Analytics = () => {
  return (
    <div className="w-full bg-gray py-16 px-4 bg-slate-300">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-2">
        
          <img
            className="w-[500px] mx-auto my-4"
            src="/Group 1228.png"
            alt="Pictured"
          />
        
        <div className="flex flex-col mt-10">
          <p className="sm:text-2xl md:text-4xl lg:text-5xl text-5xl font-bold">
            Data Anatyclis Dashboard
          </p>
          <h1 className="md:text-2xl sm:text-2xl text-xl py-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat voluptates tenetur eius facilis dignissimos excepturi rem vitae minima dolores dolor iste vel porro vero molestias aut culpa magnam, harum rerum.
          </h1>
          <div className="flex " >
         
          <button className="btn btn-primary mt-2 w-[120px]">Click me</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Analytics;
