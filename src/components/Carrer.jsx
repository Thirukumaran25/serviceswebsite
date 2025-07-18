import React, { useState } from "react";
import image1 from "../images/about.png";
import { Link } from "react-router-dom";

function Carrer() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    resume: null,
    additionalInfo: '',
  });

  const [showSuccessModal, setShowSuccessModal] = useState(false);

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { id, value, type, files } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: type === 'file' ? files[0] : value,
    }));
    if (errors[id]) {
      setErrors((prevErrors) => ({ ...prevErrors, [id]: '' }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Full Name is required.';
    }
    if (!formData.email.trim()) {
      newErrors.email = 'Email Address is required.';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email Address is invalid.';
    }
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone Number is required.';
    } else if (!/^\d{10,}$/.test(formData.phone)) {
      newErrors.phone = 'Phone Number must be at least 10 digits.';
    }
    if (!formData.resume) {
      newErrors.resume = 'Resume is required.';
    } else {
        const MAX_FILE_SIZE = 10 * 1024 * 1024;
        if (formData.resume.size > MAX_FILE_SIZE) {
            newErrors.resume = 'Resume size exceeds 10MB limit.';
        }
    }
    if (!formData.additionalInfo.trim()) {
      newErrors.additionalInfo = 'Additional information is required.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0; 
  };

  const handleSubmit = (e) => {
    e.preventDefault(); 

    if (validateForm()) {
      setShowSuccessModal(true);
      console.log('Form data submitted:', formData);
    } else {
      console.log('Form has validation errors:', errors);
    }
  };

  const handleCloseModal = () => {
    setShowSuccessModal(false);
    setFormData({
      fullName: '',
      email: '',
      phone: '',
      resume: null,
      additionalInfo: '',
    });
    setErrors({});
  };

  return (
    <div className="pb-8">
      <div className="relative">
        <img src={image1} className="brightness-50" alt="" />
        <div className="absolute top-0 text-white text-center md:px-28 md:py-32 lg:px-28 lg:py-32">
          <h1 className="font-bold">Home ≻। Career</h1>
          <p>Sparking innovation,lluminating Lives</p>
        </div>
      </div>

      <div className="lg:px-10 lg:my-10">
        <p className="font-semibold text-3xl">We ARE HIRING!</p>
        <p className="font-semibold text-gray-500">
          We appreciate your intrest in joining Zahrix Electronical Services,
          <br />
          Currently, We do not have open positions.
        </p>
      </div>
      <form onSubmit={handleSubmit} className="flex flex-col lg:flex-row gap-20 mx-10">
        <div className="lg:w-1/2">
          <p className="font-semibold text-2xl">CAREER OPPORTUNITY</p>
          <div className="mt-4">
            <label htmlFor="fullName" className="font-semibold text-lg">Full Name *</label> <br />
            <input
              id="fullName"
              className="border text-xl p-5 w-full"
              type="text"
              placeholder="Enter Name"
              value={formData.fullName}
              onChange={handleChange}
            />
            {errors.fullName && <p className="text-red-500 text-sm mt-1">{errors.fullName}</p>}
          </div>
          <div className="mt-4">
            <label htmlFor="email" className="font-semibold text-lg">Email Address *</label> <br />
            <input
              id="email"
              className="border text-xl p-5 w-full"
              type="email"
              placeholder="Enter Email"
              value={formData.email}
              onChange={handleChange}
            />
            {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
          </div>
          <div className="mt-4">
            <label htmlFor="phone" className="font-semibold text-lg">Phone Number *</label> <br />
            <input
              id="phone"
              className="border text-xl p-5 w-full"
              type="tel"
              placeholder="Enter Phone No"
              value={formData.phone}
              onChange={handleChange}
            />
            {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
          </div>
        </div>

        <div className="lg:w-1/2">
          <div className="mt-4">
            <label htmlFor="resume" className="font-semibold text-lg">Resume *</label> <br />
            <div className="border text-md p-5 w-full">
              <p>Attach your Resume in PDF format</p>
              <input
                id="resume"
                name="upload"
                type="file"
                className="hidden"
                accept=".pdf"
                onChange={handleChange}
              />
              <label
                htmlFor="resume"
                className="bg-[#4B69A9] text-white text-sm py-2 px-4 rounded-md cursor-pointer inline-block mt-2"
              >
                {formData.resume ? formData.resume.name : 'Upload Resume'}
              </label>
              {errors.resume && <p className="text-red-500 text-sm mt-1">{errors.resume}</p>}
              <p className="mt-2">Maximum size: 10MB</p>
            </div>
          </div>
          <div className="mt-4">
            <label htmlFor="additionalInfo" className="font-semibold text-lg">
              Additional information *
            </label>{" "}
            <br />
            <input
              id="additionalInfo"
              className="border text-xl p-5 w-full"
              type="text"
              placeholder="Enter Address Line 1 or other info"
              value={formData.additionalInfo}
              onChange={handleChange}
            />
            {errors.additionalInfo && <p className="text-red-500 text-sm mt-1">{errors.additionalInfo}</p>}
          </div>
          <div className="border p-2 mt-2 gap-3">
            <span>Share Job:</span>
            <i className="fa-brands fa-linkedin px-2 text-2xl"></i>
            <i className="fa-brands fa-instagram px-2 text-2xl"></i>
            <i className="fa-brands fa-facebook px-2 text-2xl"></i>
            <i className="fa-brands fa-square-x-twitter px-2 text-2xl"></i>
          </div>
        </div>
      </form>

      <div className="lg:flex mx-10 font-semibold gap-20 ">
        <p className="lg:w-1/2 text-[#4B69A9] mt-4 text-lg">
          Thank You For Considering Zahrix Your Future Workplace!
        </p>
        <div className="lg:w-1/2">
          <button
            onClick={handleSubmit}
            className="bg-[#4B69A9] text-white text-sm py-2 px-4 rounded-md cursor-pointer inline-block mt-2"
            type="button"
          >
            Submit Application
          </button>
          <button className="bg-gray-600 text-white text-sm py-2 px-4 rounded-md cursor-pointer mx-4 mt-2">
            Cancel
          </button>
        </div>
      </div>

      {showSuccessModal && (
        <div className="fixed inset-0 bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-8 rounded-lg shadow-lg relative max-w-xl w-full mx-4">
            <button
              onClick={handleCloseModal}
              className="absolute top-3 right-3 text-gray-500 hover:text-gray-800 text-3xl font-bold leading-none focus:outline-none"
              aria-label="Close"
            >
              &times; 
            </button>
            <div className="text-center mt-4">
              <p className="text-2xl font-bold text-green-700">Form Submitted! </p>
              <p className="mt-2 text-black font-bold">Your application successfully submitted.</p>
              <Link to="/home"><button className="bg-[#4B69A9] text-white py-2 px-4 rounded-xl">Go Back Home</button></Link>
            </div>
          </div>
        </div>
      )}
      

    </div>
  );
}

export default Carrer;
