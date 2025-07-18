import React from "react";
import image1 from "../images/renovation.png";
import image2 from "../images/electrical1.png";
import image3 from "../images/homecover3.png";
import image4 from "../images/Screenshot 2025-06-12 165006.png";
import image5 from "../images/Group 534.png";
import image6 from "../images/Group 538 j.png";
import image7 from "../images/Group 608.png";
import image16 from "../images/blue bolt.png";
import image18 from "../images/drag-click.png";
import { Link } from "react-router-dom";



function Electrical() {
  return (
    <div>
      <div className="relative">
        <img src={image1} className="brightness-50" alt="" />
        <div className="absolute top-0 text-white text-center md:px-28 md:py-32 ig:px-28 lg:py-32">
          <h1 className="font-bold">Home ≻। Services</h1>
          <p>Sparking innovation,lluminating Lives</p>
        </div>
      </div>

      <div className="text-center my-8 px-4 md:px-8 lg:px-16">
        <div className="flex items-center justify-center">
          <h1 className="font-bold text-xl md:text-2xl lg:text-3xl">
            OUR SERVI<span className="underline underline-offset-8">CES</span>
          </h1>
          <img src={image16} className="h-8" alt="" />
        </div>
        <h1 className="font-semibold text-[#4B69A9] text-2xl md:text-3xl lg:text-3xl my-8">
          Expert Services for a Safer, Smarter World
        </h1>
        <p className="text-sm font-semibold leading-relaxed max-w-4xl mx-auto">
          At ZAHRIX, we offer a comprehensive range of electrical services
          designed to meet the needs of homes and businesses. Our team of
          experts is dedicated to providing safe, efficient, and reliable
          electrical solutions.
        </p>
        <div className="relative mt-8 max-w-4xl mx-auto">
          <img
            src={image2}
            alt="CCTV Camera"
            className="w-full h-96 lg:h-full md:h-full rounded-lg shadow-lg"
          />
          <div
            className="absolute inset-0 flex flex-col items-center justify-center text-white
                     text-center p-4 bg-opacity-40 rounded-lg"
          >
            <h1 className="font-bold text-2xl md:text-3xl lg:text-4xl py-2">
              Electrical
            </h1>
            <p className="font-semibold text-xl md:text-base leading-relaxed">
              Experts electrical solution for homes and bussiness <br />
              ensuring safety,efficiency, and reliability.
            </p>
          </div>
        </div>
      </div>

      <h1 className="text-3xl font-bold text-center mb-6">Services We Offer</h1>

      <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12 lg:gap-2 px-4 md:px-8 lg:px-16 mb-8 lg:mx-30 ">
        <div className="relative w-full md:w-1/2 lg:w-1/3">
          <img
            src={image3}
            alt="Electrical, CCTV, BMS Solutions"
            className="w-full h-auto rounded-lg brightness-50 shadow-lg"
          />
          <p className="absolute inset-0 flex items-center justify-center text-white text-base md:text-lg lg:text-xl font-semibold text-center bg-opacity-40 rounded-lg p-4">
            "Experience the best in electrical, <br /> CCTV, BMS Solutions"
          </p>
        </div>
        <div className="w-full md:w-1/2 lg:w-2/3 text-center md:text-left ring ring-gray-500/50 p-4 rounded-xl  bg-gray-200">
          <div className="flex items-center">
            <img src={image5} alt="" />
            <h1 className="text-2xl font-semibold text-[#4B69A9] mb-2">
              Electrical Installation
            </h1>
          </div>

          <p className="text-gray-700 text-sm md:text-base leading-relaxed">
            Expert CCTV installation services to enhance security and
            surveillance. Our team designs and installs customized CCTV systems
            for homes and businesses. Secure your property with our reliable
            solutions.
          </p>
        </div>
      </div>

      <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12 lg:gap-2 px-4 md:px-8 lg:px-16 mb-8 lg:mx-30">
        <div className="w-full md:w-1/2 lg:w-1/2 text-center md:text-left order-2 md:order-1 ring ring-gray-500/50 p-4 rounded-xl  bg-gray-200">
          <div className="flex items-center">
            <img src={image6} alt="" />
            <h1 className="text-2xl font-semibold text-[#4B69A9] mb-2">
              Energy Efficiency Solutions
            </h1>
          </div>

          <p className="text-gray-700 text-sm md:text-base leading-relaxed">
            Continuous CCTV monitoring services to ensure constant vigilance
            over your property. Our dedicated team provides real-time
            surveillance, promptly detecting and responding to any unusual
            activity for enhanced safety.
          </p>
        </div>
        <div className="w-full md:w-1/2 lg:w-1/2 text-center md:text-left order-1 md:order-2 ring ring-gray-500/50 p-4 rounded-xl  bg-gray-200">
          <div className="flex items-center">
            <img src={image7} alt="" />
            <h1 className="text-2xl font-semibold text-[#4B69A9] mb-2">
              Electrical Repairs
            </h1>
          </div>

          <p className="text-gray-700 text-sm md:text-base leading-relaxed">
            Comprehensive CCTV maintenance services to keep your surveillance
            systems in optimal condition. We offer regular checks,
            troubleshooting, and repairs to ensure your security infrastructure
            is always reliable.
          </p>
        </div>
      </div>

      <div className="text-center my-8">
        <button className="bg-[#4B69A9] hover:bg-blue-900 text-white font-bold py-3 px-6 rounded-lg shadow-md transition duration-300 ease-in-out">
          Book Now
        </button>
      </div>

      <div className="md:flex lg:flex lg:h-60 bg-blue-50">
        <div className="lg:w-1/2 md:w1/2 p-2 lg:pl-30 ">
          <h1 className="font-semibold text-3xl text-[#4B69A9] p-2">
            Let's Connect
          </h1>
          <h1 className="font-semibold text-3xl text-[#4B69A9] p-2">
            We're here to answer your <br />
            questions and help
          </h1>
           <Link to="/quote">
          <button className=" bg-[#4B69A9] text-white py-2 px-6 flex rounded-sm">
            <img src={image18} alt="" />
            Contact Us
          </button>
           </Link>
        </div>
        <div className="lg:w-1/2 md:w1/2">
          <img src={image4} className=" h-full shadow-lg" alt="" />
        </div>
      </div>
    </div>
  );
}

export default Electrical;
