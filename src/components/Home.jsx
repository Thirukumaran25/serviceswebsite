import React from "react";
import image1 from "../images/Homeimage1.png";
import image2 from "../images/Homeimage2.png";
import image3 from "../images/homecover3.png";
import image4 from "../images/Rectangle 48.png";
import image5 from "../images/Frame 506.png";
import image6 from "../images/Light.png";
import image7 from "../images/renovation.png";
import image8 from "../images/electrician.png";
import image9 from "../images/Ellipse 69.png";
import image10 from "../images/Group 483.png";
import image11 from "../images/Group 556.png";
import image12 from "../images/arrow-up.png";
import image13 from "../images/Group 536.png";
import image14 from "../images/Group 540.png";
import image15 from "../images/Group 534.png";
import image16 from "../images/blue bolt.png";
import image17 from "../images/hjj.png";
import image18 from "../images/drag-click.png";
import image19 from "../images/Group 24.png";
import image20 from "../images/good-one.png";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <div className="md:flex lg:flex">
        <div className="md:w-1/2 mt-8 md:pl-2 lg:w-1/2 lg:pl-28 mx-2">
          <h1 className="font-bold text-xl">
            Transforming Safety and Security with <br />
            Cutting Edge Technology
          </h1>
          <p className="font-semibold text-[#4B69A9] mt-5">
            Empowering your space with innovative Solutions
          </p>
          <p className="mt-5 text-xs font-bold">
            Zahrix Provides cutting-edge electrical, CCTV, and BMS services to
            enhance your buldings effciency,safety,trust us to illuminate your
            world. Our experties ensures a safer, more secure, and effcient. We
            design, install, and maintain systems that protects people,
            property, and assets.
          </p>
          <button className="my-8 p-2 text-xs text-white bg-[#4B69A9] rounded-md">
            Discover Our Services
          </button>
          <div className="md:flex lg:flex gap-6 justify-items-center ">
            <div className="w-42 mt-4 md:w-1/3 text-center p-2 inset-shadow-xs shadow-[0px_6px_2px_1px_rgba(0,0,0,0.2)] rounded-lg">
              <p className="text-[#4B69A9] font-bold text-3xl">500+</p>
              <p className="text-[#4B69A9] font-semibold">
                Locations in the <br />
                Country
              </p>
            </div>
            <div className="w-42 mt-4 md:w-1/3 text-center p-2 inset-shadow-xs shadow-[0px_6px_2px_1px_rgba(0,0,0,0.2)] rounded-lg">
              <p className="text-[#4B69A9] font-bold text-3xl">25+</p>
              <p className="text-[#4B69A9] font-semibold">
                Years of <br />
                Experience
              </p>
            </div>
            <div className="w-42 mt-4 md:w-1/3 text-center p-2 inset-shadow-xs shadow-[0px_6px_2px_1px_rgba(0,0,0,0.2)] rounded-lg">
              <p className="text-[#4B69A9] font-bold text-3xl">200+</p>
              <p className="text-[#4B69A9] font-semibold">
                Specialized <br />
                Workers
              </p>
            </div>
          </div>
        </div>
        <div className="mt-8 md:w-1/2 mx-2">
          <div className="relative">
            <img
              className="absolute md:h-80 lg:h-96 mt-18 md:mt-35 lg:mt-0 top-0"
              src={image1}
              alt=""
            />
            <img className="w-full h-96" src={image2} alt="" />
            <div className="flex absolute text-xs md:mt-20 md:mr-15 font-bold md:right-0 top-0 ring-2 ring-gray-500/50 p-2 rounded-sm">
              <img src={image16} className="bg-blue-100" alt="" />
              <p>
                Unlock a safer tomorrow! <br /> with Zahirx!
              </p>
            </div>
            <img src={image19} className="absolute top-0 lg:mt-40 mt-30 lg:ml-20" alt="" />
            <img src={image20} className="absolute top-0 lg:mt-20 lg:ml-40 ml-20 mt-30"alt="" />
          </div>
        </div>
      </div>

      <div className="mt-5 md:flex lg:mt-15 bg-blue-50 ">
        <div className="md:w-1/2 lg:w-1/2 p-2">
          <div className="relative h-96 lg:">
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
            <h1 className="font-bold text-xl p-2"> <span className="underline underline-offset-8">ABO</span>UT US</h1>
            <img src={image16} className="h-8" alt="" />
          </div>
          <p className="mt-8 font-semibold text-md">Welcome To ZAHRIX!</p>
          <p className="text-[#4B69A9] my-5 font-bold text-3xl">
            Empowering your Space,Enhanching Your Life
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
            <div>
              <button className="my-8 p-2 text-xs text-white bg-[#4B69A9] flex items-center rounded-md">
                <img src={image18} alt="" />
                Learn More
              </button>
            </div>
            <div>
              <h1 className="p-2 font-bold">Meet our Expert Team!</h1>
              <img src={image5} alt="" />
            </div>
          </div>
        </div>
      </div>

      <div className="flex lg:mt-10 justify-center">
        <h1 className="text-xl font-bold text-center">OUR SERVI<span className="underline underline-offset-8">CES</span> </h1>
        <img src={image16} className="h-8" alt="" />
      </div>
      <h1 className="text-[#4B69A9] text-2xl font-semibold text-center">
        Expert Services for a Safer,Smarter World
      </h1>
      <div className="md:flex lg:flex gap-4 lg:mx-48 lg:mt-10 p-2">
        <div className="relative lg:w-2.1/5 ">
          <img className="brightness-50" src={image3} alt="" />
          <p className="absolute top-0 text-white text-center mt-36 md:px-2 md:py-3 ig:px-2 lg:py-3">
            "Experience the best in electrical, <br /> CCTV,BMS Solutions"
          </p>
        </div>
        <div className="lg:w-2.9/5 ring ring-gray-500/50 p-4 mt-2 rounded-xl bg-gray-200 font-semibold">
          <div className="flex items-center">
            <img src={image13} alt="" />
            <h1 className="font-bold text-[#4B69A9] text-2xl">CCTV</h1>
          </div>
          <p className="text-gray-500">
            Expert CCTV installation services to enhance security and
            surveillance and reliable solutions.
          </p>
          <Link to="/cctv">
          <p className="text-end text-[#4B69A9] font-semibold">Read More</p>
          </Link>
        </div>
      </div>
      <div className="md:flex lg:flex gap-4 lg:mx-48 my-4 p-2 ">
        <div className="relative lg:w-2.9/5 ring ring-gray-500/50 p-4 rounded-xl  bg-gray-200 font-semibold">
          <div className="flex items-center">
            <img src={image14} alt="" />
            <h1 className="font-bold text-[#4B69A9] text-2xl">BMS</h1>
          </div>
          <p className="text-gray-500">
            Expert CCTV installation services to enhance security and
            surveillance. Our team designs and installs customized CCTV systems
            for homes and businesses. Secure your property with our reliable
            solutions.
          </p>
          <Link to="/electric">
          <p className="text-end text-[#4B69A9] font-semibold">Read More</p>
          </Link>
        </div>
        <div className="lg:w-2.1/5 ring ring-gray-500/50 p-4 mt-2 rounded-xl  bg-gray-200 font-semibold">
          <div className="flex items-center">
            <img src={image15} alt="" />
            <h1 className="font-bold text-[#4B69A9] text-2xl">Electrical</h1>
          </div>
          <p className="text-gray-500">
            Expert CCTV installation services to enhance security and
            surveillance. Our team designs and installs customized CCTV systems
            for homes and businesses. Secure your property with our reliable
            solutions.
          </p>
          <Link to="/bms">
            <p className="text-end text-[#4B69A9] font-semibold">Read More</p>
          </Link>
        </div>
      </div>

      <div className="flex lg:mt-10 justify-center">
        <h1 className="text-xl font-bold text-center">OUR PROJ<span className="underline underline-offset-8">ECTS</span></h1>
        <img src={image16} className="h-8" alt="" />
      </div>

      <h1 className="text-[#4B69A9] text-2xl font-semibold text-center">
        Electric Solution for a Brighter Tomorrow
      </h1>
      <div>
        <div className="flex flex-col md:flex-row md:mx-auto md:max-w-4xl gap-8 mx-4">
          <div className="w-full md:w-1/3 h-96 mt-4">
            <div>
              <img
                src={image6}
                alt="Project 1"
                className="w-full h-full object-cover rounded-md"
              />
            </div>
          </div>
          <div className="w-full md:w-1/3 h-96 lg:mt-15 ">
            <div className="relative h-full">
              <img
                className="brightness-50 h-full w-full object-cover rounded-2xl"
                src={image7}
                alt="Project 2"
              />
              <div className="absolute inset-0 flex flex-col justify-center items-center text-white p-4">
                <h1 className="text-xl font-bold mb-2">
                  LED Lighting Retrofit
                </h1>
                <p className="text-sm text-center">
                  Illuminating spaces with energy-efficient LED lighting
                  solution, reducing energy consumption and maintenance costs.
                </p>
              </div>
              <img
                className="absolute ml-28 bottom-0 transform translate-y-4 bg-[#4B69A9] rounded-full"
                src={image12}
                alt=""
              />
            </div>
          </div>
          <div className="w-full md:w-1/3 h-96 mt-4">
            <div>
              <img
                src={image8}
                alt="Project 3"
                className="w-full h-full object-cover rounded-md"
              />
            </div>
          </div>
        </div>

        <div className=" mt-8 md:mt-12 text-center lg:mt-8">
          <Link to="/project">
          <button className="my-8 p-2 text-xs text-white bg-[#4B69A9] rounded-md">
            View All Works
          </button>
          </Link>
        </div>
      </div>

      <div className="flex lg:mt-10 p-4 justify-center bg-blue-50">
        <h1 className="text-3xl font-bold text-center">
          OUR TESTIMONI<span className="underline underline-offset-8">ALS</span>
        </h1>
        <img src={image16} className="h-8" alt="" />
      </div>

      <h1 className="text-[#4B69A9] bg-blue-50 text-3xl font-semibold text-center">
        Real People, Real Results
      </h1>
      <div className="py-8  bg-blue-50">
        <div className="flex flex-col md:flex-row gap-10 md:gap-25 mx-4 md:mx-auto md:max-w-5xl lg:mx-25">
          <div className="w-full md:w-1/2 h-60">
            <div className="relative h-60">
              <div
                className="absolute bottom-0 bg-[#4B69A9] h-22
                   w-3/5 md:w-2/3 lg:w-76 lg:ml-25 md:ml-15 ml-16
                   left-1/2 -translate-x-1/2
                   rounded-xl "
              ></div>
              <div
                className="absolute top-0 h-55 rounded-t-4xl ring ring-gray-300 px-4 bg-white
                   w-full md:w-[calc(100%-1.5rem)] lg:w-full
                   left-1/2 -translate-x-1/2
                   "
              >
                <div className="flex justify-center items-center gap-4 ">
                  <div className="flex items-center bg-[#4B69A9] rounded-full pr-2">
                    <img
                      src={image9}
                      alt="Priya Patel"
                      className="w-12 h-12 rounded-full object-cover mr-2"
                    />
                    <p className="text-white text-xs p-2">
                      Priya Patel <br />
                      Homeowner
                    </p>
                  </div>
                  <div>
                    <img
                      src={image10}
                      alt="Rating stars"
                      className="w-30 h-auto"
                    />
                  </div>
                </div>
                <p className="text-sm text-[#4B69A9] font-semibold md:text-base mt-4">
                  "The electrical panel upgrade done by ZAHRIX was seamless.
                  Their electricians were courteous, knowledgeable, and provided
                  excellent customer service. I'm thrilled with the results!"
                </p>
              </div>
            </div>
          </div>

          <div className="w-full md:w-1/2 h-60 mt-8 md:mt-0">
            <div className="relative h-60">
              <div
                className="absolute bottom-0 bg-[#4B69A9] h-22
                   w-3/5 md:w-2/3 lg:w-76 lg:ml-25 md:ml-15 ml-16
                   left-1/2 -translate-x-1/2
                   rounded-xl "
              ></div>
              <div
                className="absolute top-0 h-55 rounded-t-4xl ring ring-gray-300 px-4 bg-white
                   w-full md:w-[calc(100%-1.5rem)] lg:w-full
                   left-1/2 -translate-x-1/2
                   "
              >
                <div className="flex justify-center items-center gap-4 ">
                  <div className="flex items-center bg-[#4B69A9] rounded-full pr-2">
                    <img
                      src={image17}
                      alt="Ramesh Kumar"
                      className="w-12 h-12 rounded-full object-cover mr-2"
                    />
                    <p className="text-white text-xs p-2">
                      Rahul Sharma<br />
                      Facility Manager
                    </p>
                  </div>
                  <div>
                    <img
                      src={image10}
                      alt="Rating stars"
                      className="w-30 h-auto"
                    />
                  </div>
                </div>
                <p className="text-sm text-[#4B69A9] font-semibold md:text-sm  mt-4">
                  "ZAHRIX handled our commercial wiring project efficiently and
                  professionally. Their attention to detail ensured a safe and
                  compliant installation. Highly recommend their services for
                  any electrical needs!"
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="relative isolate overflow-hidden bg-gray-900 lg:mt-14 py-24 sm:py-32">
        <img
          alt=""
          src={image11}
          className="absolute inset-0 -z-10 size-full object-cover object-right md:object-center"
        />
        <div
          aria-hidden="true"
          className="hidden sm:absolute sm:-top-10 sm:right-1/2 sm:-z-10 sm:mr-10 sm:block sm:transform-gpu sm:blur-3xl"
        >
          <div
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
            className="aspect-1097/845 w-274.25 bg-linear-to-tr from-[#ff4694] to-[#776fff] opacity-20"
          />
        </div>
        <div
          aria-hidden="true"
          className="absolute -top-52 left-1/2 -z-10 -translate-x-1/2 transform-gpu blur-3xl sm:top-[-28rem] sm:ml-16 sm:translate-x-0 sm:transform-gpu"
        >
          <div
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
            className="aspect-1097/845 w-274.25 bg-linear-to-tr from-[#ff4694] to-[#776fff] opacity-20"
          />
        </div>
        <div className="mx-auto max-w-7xl px-6 lg:px-25">
          <div className="mx-auto max-w-2x lg:mx-0">
            <h2 className="text-2xl font-semibold tracking-tight text-white sm:text-5xl">
              Let's Connect
            </h2>
            <p className="mt-8 text-lg font-medium text-pretty text-white sm:text-xl/8">
              We're here to answer your <br />
              questions and help.
            </p>
          </div>
           <Link to="/quote">
          <button className=" bg-[#4B69A9] text-white py-2 px-6 flex rounded-sm">
            <img src={image18} alt="" />
            Contact Us
          </button>
           </Link>
        </div>
      </div>
    </div>
  );
}

export default Home;
