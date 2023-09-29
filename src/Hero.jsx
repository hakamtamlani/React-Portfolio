import React from "react";
import Typed from "react-typed";
import "./Hero.css";

const Hero = () => {
  return (
    <div className="text-black">
      <div className="mt-1 w-full h-screen mx-auto text-center flex-col  flex  items-center hero-container">
        <h1 className="sm:text-2xl sm:text-[gray]  md:text-4xl md:text-[#d69898] lg:text-5xl lg:text-black text-4xl font-bold">
          I AM WEB DEVELOPER{" "}
        </h1>
        <p className="sm:text-2xl md:text-4xl lg:text-5xl text-5xl font-bold">
          Grow with Tailwind
        </p>
        <div>
          <p className="md:text-3xl sm:text-3xl text-xl font-bold">
            Fast ,Flexible Work With
          </p>
          <div className=" text-bold text-red-400 md:text-3xl sm:text-4xl lg:text-5xl text-xl font-bold ">
            <Typed
              strings={[
                "HTML",
                "CSS",
                "Bootstraps",
                "Tailwind",
                "Javascript",
                "React",
              ]}
              typeSpeed={120}
              backSpeed={140}
              loop
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
