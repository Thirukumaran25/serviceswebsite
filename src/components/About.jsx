import React from "react";
import image1 from "../images/about.png";
import image3 from "../images/homecover3.png";
import image4 from "../images/homecover4.png";
import image15 from "../images/Rectangle 371.png";
import image16 from "../images/Rectangle 372.png";
import image5 from "../images/Frame 506.png";
import image13 from "../images/blue bolt.png";
import image14 from "../images/Group 536.png";
import image19 from "../images/Rectangle 375.png";

function About() {
  return (
    <div>
      <div className="relative">
        <img src={image1} className="brightness-50" alt="" />
        <div className="absolute top-0 text-white text-center md:px-28 md:py-32 ig:px-28 lg:py-32">
          <h1 className="font-bold">Home ≻। About Us</h1>
          <p>Sparking innovation,lluminating Lives</p>
        </div>
      </div>



      <div className="mt-5 md:flex lg:mt-15  ">
        <div className="md:w-1/2 lg:w-1/2 p-2">
          <div className="relative h-96">
            <img
              className="absolute lg:ml-15 md:ml-5 lg:mt-54 lg:h-60 lg:w-65 h-60 mt-25"
              src={image4}
              alt=""
            />
            <img
              className="absolute lg:ml-30 md:ml-23 lg:w-80 lg:h-96 w-60 h-60 ml-15"
              src={image3}
              alt=""
            />
          </div>
        </div>
        <div className="mt-2 p-2 md:w-1/2 lg:w-1/2 md:mr-8 md:mt-0 lg:mr-18 lg:mt-0">
           <div className="flex">
                <h1 className="font-bold text-xl"><span className="underline underline-offset-8">ABO</span>UT US</h1>
                  <img src={image13} className="h-8" alt="" />
              </div>
          
          <p className="mt-8 font-semibold text-sm">Welcome To ZAHRIX!</p>
          <p className="text-[#4B69A9] my-5 font-bold text-3xl">
            Empowering your Space,Enhanching <br />
            Your Life
          </p>
          <p className=" text-md">
            At AH RIX, we're dedicated to delivering innovative electrical,
            CCTV, and <br />
            Building Management System (BMS) solutions. Our expertise ensures a{" "}
            <br />
            safer, more secure, and efficient environment for homes, businesses,
            and <br />
            communities. With cutting-edge technology and exceptional service,
            we <br />
            empower your space to reach its full potential. Our team of experts
            is <br />
            committed to providing tailored solutions that meet your unique
            needs. <br />
            Trust us to illuminate your world with innovative solutions.
          </p>
          <div className="md:flex justify-between">
            <div></div>
            <div>
              <h1 className="p-2 font-bold">Meet our Expert Team!</h1>
              <img src={image5} alt="" />
            </div>
          </div>
        </div>
      </div>



      <div className="mt-5 md:flex lg:mt-15 ">
        <div className="mt-2 md:w-1/2 lg:w-1/2 md:mt-0 lg:mt-0 lg:pl-30">
          <div className="flex"> 
                  <img src={image13} className="h-8" alt="" />
                <h1 className="font-bold text-xl">WHO WE ARE</h1>
              </div>
          <p className="mt-8 font-semibold text-2xl text-[#4B69A9]">Trusted experts in electrical services</p>
          <p className=" text-sm mt-8 font-semibold">
            At AH RIX, we're dedicated to delivering innovative electrical,
            CCTV, and 
            Building Management System (BMS) solutions. Our expertise ensures a
            safer, more secure, and efficient environment for homes, businesses,
            and
            communities. With cutting-edge technology and exceptional service,
            we 
            empower your space to reach its full potential. Our team of experts
            is
            committed to providing tailored solutions that meet your unique
            needs.
            Trust us to illuminate your world with innovative solutions.
          </p>
        </div>
        <div className="md:w-1/2 lg:w-1/2">
          <div className="relative h-96 ">
            <img
              className="absolute z-10 lg:ml-15 md:ml-5 lg:mt-34 lg:h-50 rounded-4xl lg:w-50 h-60 mt-25"
              src={image15}
              alt=""
            />
            <img
              className="absolute  lg:ml-30 md:ml-23 lg:w-80 lg:h-70 w-60 h-60 ml-15"
              src={image16}
              alt=""
            />
          </div>
        </div>
      </div>



      <div className="lg:flex md:flex lg:mt-20 gap-5 lg:px-30 md:px-30">
        <div className="lg:w-1/2 md:w-1/2">
          <img src={image19} alt="" />
        </div>
        <div className="lg:w-1/2 md:w-1/2">
          <div className="flex"> 
                  <img src={image13} className="h-8" alt="" />
              <p className="font-semibold text-xl">OUR APPROCH</p>
          </div>
          <p className="text-[#4B69A9] font-semibold text-xl mt-8">Powering Communities With safe & <br /> Reliable Solutions</p>
          <div className="ring ring-gray-500/50 mt-8 rounded-lg shadow-[0px_6px_2px_1px_rgba(0,0,0,0.2)] p-3">
            <div className="flex items-center"> 
                  <img src={image14} alt="" />
            <h1 className="font-semibold">Our Mission</h1>
            </div>
            <p className="text-[#4B69A9] font-semibold text-sm ">"To deliver high-quality electrical services that ensure safety,
              efficiency, and customer satisfaction, while building long-term
              relationships and contributing to the well-being of our community."</p>
          </div>
          <div className="ring ring-gray-500/50 mt-8 rounded-lg shadow-[0px_6px_2px_1px_rgba(0,0,0,0.2)] p-3">
            <div className="flex items-center"> 
                  <img src={image14} alt="" />
            <h1 className="font-semibold">Our Vision</h1>
            </div>
            <p className="text-[#4B69A9] font-semibold text-sm ">"To deliver high-quality electrical services that ensure safety,
              efficiency, and customer satisfaction, while building long-term
              relationships and contributing to the well-being of our community."</p>
          </div>
        </div>
      </div>

      <div className="lg:flex md:flex lg:justify-around text-center bg-blue-50 my-10 py-4">
        <div>
          <h1 className="font-semibold text-4xl text-[#4B69A9]">13+</h1>
          <p  className="font-semibold text-lg text-[#4B69A9]">Years Experience</p>
        </div>
        <div>
          <h1  className="font-semibold text-4xl text-[#4B69A9]">100+</h1>
          <p className="font-semibold text-lg text-[#4B69A9]">Emergency Repairs</p>
        </div>
        <div>
          <h1  className="font-semibold text-4xl text-[#4B69A9]">99%</h1>
          <p className="font-semibold text-lg text-[#4B69A9]">Customer Satisfaction</p>
        </div>
        <div>
          <h1  className="font-semibold text-4xl text-[#4B69A9]">500+</h1>
          <p className="font-semibold text-lg text-[#4B69A9]">Skilled Professionals</p>
        </div>
      </div>
    </div>
  );
}

export default About;
