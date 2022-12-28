import React from "react";
import logo1 from "../assets/img/blockchain.png"
import logo2 from "../assets/img/fintech.png"
import logo3 from "../assets/img/reqemsal.png"



const Slider = () => {
  const logos = [
    {
      id: 1,
      src: logo1,
    },
    {
      id: 2,
      src: logo2,
    },
    { id: 3, 
      src: logo3 
    }
  ];

  return (
    <>
      <div className="relative overflow-hidden flex items-center justify-center w-[100%] lg:h-[200px] h-[150px] p-8 lg:mt-16 mt-[0px] bg-gradient-to-r from-[#28154d] to-[#6011ff] shadow-2xl">
        <div className="absolute w-[300%] flex justify-center items-center animate-scroll hover:pause overflow-x-hidden group:">
          {logos.map((logo) => {
            return (
              <div className="w-full" key={logo.id}>
                <img
                  className="grayscale-[80%] hover:grayscale-0 transition duration-[.3s]  w-[300px] h-[300px] object-contain"
                  src={logo.src}
                  alt="/"
                />
              </div>
            );
          })}

          {logos.map((logo) => {
            return (
              <div className="w-full" key={logo.id}>
                <img
                  className="grayscale-[80%] hover:grayscale-0 transition duration-[.3s]  w-[300px] h-[300px] object-contain"
                  src={logo.src}
                  alt="/"
                />
              </div>
            );
          })}

          {logos.map((logo) => {
            return (
              <div className="w-full" key={logo.id}>
                <img
                  className="grayscale-[80%] hover:grayscale-0 transition duration-[.3s]  w-[300px] h-[300px] object-contain"
                  src={logo.src}
                  alt="/"
                />
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Slider;
