import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Breadcrumbs from "../../components/pageProps/Breadcrumbs";

const About = () => {
  const location = useLocation();
  const [prevLocation, setPrevLocation] = useState("");
  useEffect(() => {
    setPrevLocation(location.state.data);
  }, [location]);
  return (
    <div className="max-w-container mx-auto px-4">
      <Breadcrumbs title="About" prevLocation={prevLocation} />
      <div className="pb-10">
        <h1 className="max-w-[600px] text-base text-lightText mb-2">
          <span className="text-primeColor font-semibold text-lg">PKShop</span>{" "}
           serves as a showcase for my skills in React, Router, Tailwind, and a touch of Redux, demonstrating responsive design techniques and frontend development. Please note, this is not a fully functional e-commerce platform but a part of my project portfolio. For more projects and insights, visit paulkilian.at.
        </h1>
        <a href="https://www.paulkilian.at/">
          <button className="w-52 h-10 bg-primeColor text-white hover:bg-black duration-300">
            Go to Portfolio
          </button>
        </a>
      </div>
    </div>
  );
};

export default About;
