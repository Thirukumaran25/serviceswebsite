import React from "react";
import logo from "../images/Logo.png";
import { NavLink } from "react-router-dom";

function Footer() {
  return (
    <div className="bg-[#4B69A9] text-white p-3 md:px-10 lg:px-20">
      <div className="lg:flex md:flex ">
        <div className="lg:w-1/2 md:w-1/2">
          <div className="md:flex lg:flex gap-8 text-center items-center justify-items-center">
            <img src={logo} alt="" />
            <span className="font-bold text-xl text-white">ZAHRIX</span>
          </div>
          <p className="lg:mt-4 lg:mb-8">
            "At ZAHRIX Delivering Electrical Solutions With Precision and Care "
          </p>
          <div className="lg:text-xl py-2">
            <div className="lg:my-4">
              <i className="fa-solid fa-envelope border p-3 rounded-full"></i>
              <span className="px-4">Zahrix@gmail.com</span>
            </div>
            <div className="lg:my-4">
              <i className="fa-solid fa-location-dot border p-3 rounded-full"></i>
              <span className="px-4">23/9,Main Road Chennai.</span>
            </div>
            <div className="lg:my-4">
              <i className="fa-solid fa-phone-volume border p-3 rounded-full"></i>
              <span className="px-4">+91 86456780987</span>
            </div>
          </div>
        </div>
        <div className="lg:pl-30 lg:w-1/2 md:w-1/2 md:pl-2 lg:mt-8">
          <p className="font-bold text-2xl ">Subscribe</p>
          <input type="email" className="bg-white p-1.5 rounded-ss-md text-black lg:px-5 mt-4" placeholder="Enter your email" />
          <button className="bg-black text-white p-1.5 rounded-r-md font-semibold">Sign up</button>
          <div className="lg:flex gap-10 lg:mt-10">
            <div className="text-center">
              <p className="font-bold">Quick Links</p>
              <div className="leading-8">
                <p>About Us</p>
                <p>Our Services</p>
                <p>Testimonials</p>
                <p>Contact Us</p>
              </div>
            </div>
            <div className="text-center">
              <p className="font-bold">Useful Links</p>
              <div className="leading-8">
                <NavLink to="/term"><p>Tearm of use</p></NavLink>
                <NavLink to="/policy"><p>Privacy Policy</p></NavLink>
                <NavLink to="/career"><p>Careers</p></NavLink> 
              </div>
            </div>
            <div className="flex md:flex-row lg:flex-col gap-5 justify-center sm:flex-col leading-10 text-3xl">
                <div> <i className="fa-brands fa-linkedin"></i></div>
                <div> <i className="fa-brands fa-instagram"></i></div>
                <div> <i className="fa-brands fa-facebook"></i></div>
                <div> <i className="fa-brands fa-square-x-twitter"></i></div>
            </div>
          </div>
        </div>
      </div>
      <p className="p-4 justify-center text-center">@ 2025 Developed & Maintained by ZAHRIX- All rights reserved.</p>
    </div>
  );
}

export default Footer;
