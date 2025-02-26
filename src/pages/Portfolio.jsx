import React from "react";
import { Link } from "react-router-dom";
import port1 from "../assets/port1.jpg";
import port2 from "../assets/port2.jpg";
import port3 from "../assets/port3.jpg";
import share from "../assets/share.png";

const Portfolio = () => {
  return (
    <div className="bg-[#1F242D] w-full pt-16 pb-40">
      <div className="container">
        <h2 className="text-center text-3xl font-semibold text-white mb-16">
          My <span className="text-[#00eeff]">Portfolio</span>
        </h2>
        <div className="flex items-center justify-center flex-wrap gap-5">
          <div className="relative group cursor-pointer">
            <img
              className="w-[360px] h-[250px] rounded-xl"
              src={port1}
              alt="Port Image"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-[#00eeff] to-transparent flex items-center justify-center flex-col rounded-xl opacity-0 transition-opacity duration-500 ease-in-out group-hover:opacity-100">
              <h4 className="text-white text-2xl font-bold mb-5">
                Web Design
              </h4>
              <Link>
                <img className="w-12" src={share} alt="" />
              </Link>
            </div>
          </div>
          <div className="relative group cursor-pointer">
            <img
              className="w-[360px] h-[250px] rounded-xl"
              src={port2}
              alt="Port Image"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-[#00eeff] to-transparent flex items-center justify-center flex-col rounded-xl opacity-0 transition-opacity duration-500 ease-in-out group-hover:opacity-100">
              <h4 className="text-white text-2xl font-bold mb-5">
                Web Design
              </h4>
              <Link>
                <img className="w-12" src={share} alt="" />
              </Link>
            </div>
          </div>
          <div className="relative group cursor-pointer">
            <img
              className="w-[360px] h-[250px] rounded-xl"
              src={port3}
              alt="Port Image"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-[#00eeff] to-transparent flex items-center justify-center flex-col rounded-xl opacity-0 transition-opacity duration-500 ease-in-out group-hover:opacity-100">
              <h4 className="text-white text-2xl font-bold mb-5">
                Web Design
              </h4>
              <Link>
                <img className="w-12" src={share} alt="" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
