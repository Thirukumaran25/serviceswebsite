import React, { useState } from "react";
import image13 from "../images/blue bolt.png";
import image1 from "../images/Screenshot 2025-06-12 152750.png";

function Quote() {
   const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    termsAccepted: false,
  });

  const [showSuccessPopup, setShowSuccessPopup] = useState(false);

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { id, value, type, checked, files } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: type === 'checkbox' ? checked : (type === 'file' ? files[0] : value),
    }));
    if (errors[id]) {
      setErrors((prevErrors) => ({ ...prevErrors, [id]: '' }));
    }
  };


  const validateForm = () => {
    const newErrors = {};
    if (!formData.firstName.trim()) newErrors.firstName = 'First name is required.';
    if (!formData.lastName.trim()) newErrors.lastName = 'Last name is required.';
    if (!formData.email.trim()) newErrors.email = 'Email is required.';
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Email is invalid.';
    if (!formData.phone.trim()) newErrors.phone = 'Phone number is required.';
    if (!formData.date) newErrors.date = 'Date is required.';
    if (!formData.time) newErrors.time = 'Time is required.';
    if (!formData.resume) newErrors.resume = 'Resume is required.';
    if (!formData.termsAccepted) newErrors.termsAccepted = 'You must accept the terms.';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault(); 

    if (validateForm()) {
      setShowSuccessPopup(true);
      console.log('Form data submitted:', formData);
    } else {
      console.log('Form has validation errors:', errors);
      alert('Please fill in all required fields and correct errors.'); 
    }
  };

  const handleClosePopup = () => {
    setShowSuccessPopup(false);
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      date: '',
      time: '',
      termsAccepted: false,
    });
    setErrors({}); 
  };
  return (
    <div>
      <div className="relative">
        <img src={image1} className="brightness-50" alt="" />
        <div className="absolute top-0 text-white text-center md:px-28 md:py-32 lg:ml-96 lg:px-28 lg:py-32">
          <h1 className="font-bold">Home ≻। Contact Us</h1>
          <p>Sparking innovation,lluminating Lives</p>
        </div>
      </div>

      <h1 className="font-semibold text-3xl text-center mt-4">
        Get in Touch With Us
      </h1>
      <p className=" text-center">for more information about our services.</p>

      <div className="lg:px-30 lg:my-10">
        <div className="flex">
          <p className="font-semibold text-3xl">Booking Your Service Today!</p>
          <img src={image13} className="h-8" alt="" />
        </div>
        <p className="font-semibold text-gray-500">
          Whether you're planning a new project or need emergency support, We're
          <br />
          available to provide fast and reliable assistance.
        </p>
      </div>
      <form onSubmit={handleSubmit} className="lg:grid lg:grid-cols-2 gap-8 lg:px-40">
        <div>
          <label htmlFor="firstName" className="text-[#4B69A9] font-bold text-2xl">First name</label> <br />
          <input
            id="firstName"
            className="border text-xl p-5 w-full"
            type="text"
            placeholder="e.g xxxx"
            value={formData.firstName}
            onChange={handleChange}
          />
          {errors.firstName && <p className="text-red-500 text-sm mt-1">{errors.firstName}</p>}
        </div>

        <div>
          <label htmlFor="lastName" className="text-[#4B69A9] font-bold text-2xl">Last name</label> <br />
          <input
            id="lastName"
            className="border text-xl p-5 w-full"
            type="text"
            placeholder="e.g yyyy"
            value={formData.lastName}
            onChange={handleChange}
          />
          {errors.lastName && <p className="text-red-500 text-sm mt-1">{errors.lastName}</p>}
        </div>

        <div>
          <label htmlFor="email" className="text-[#4B69A9] font-bold text-2xl">Email</label> <br />
          <input
            id="email"
            className="border text-xl p-5 w-full"
            type="email"
            placeholder="e.g xxxx@gmail.com"
            value={formData.email}
            onChange={handleChange}
          />
          {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
        </div>

        <div>
          <label htmlFor="phone" className="text-[#4B69A9] font-bold text-2xl">Phone</label> <br />
          <input
            id="phone"
            className="border text-xl p-5 w-full"
            type="tel"
            placeholder="e.g 12445678"
            value={formData.phone}
            onChange={handleChange}
          />
          {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
        </div>

        <div>
          <label htmlFor="date" className="text-[#4B69A9] font-bold text-2xl">Pick the date</label> <br />
          <input
            id="date"
            className="border text-xl p-5 w-full"
            type="date"
            placeholder="e.g 05/9/25"
            value={formData.date}
            onChange={handleChange}
          />
          {errors.date && <p className="text-red-500 text-sm mt-1">{errors.date}</p>}
        </div>

        <div>
          <label htmlFor="time" className="text-[#4B69A9] font-bold text-2xl">Choose Your Time</label> <br />
          <input
            id="time"
            className="border text-xl p-5 w-full"
            type="time"
            placeholder="e.g 10.00 AM"
            value={formData.time}
            onChange={handleChange}
          />
          {errors.time && <p className="text-red-500 text-sm mt-1">{errors.time}</p>}
        </div>

        <div className="lg:px-2 my-10 flex items-center gap-4 col-span-2">
          <input
            type="checkbox"
            id="termsAccepted"
            className="w-10 h-10"
            checked={formData.termsAccepted}
            onChange={handleChange}
          />
          <p>I have read and accepted terms and Privacy</p>
          {errors.termsAccepted && <p className="text-red-500 text-sm mt-1">{errors.termsAccepted}</p>}
        </div>

        <div className="text-center col-span-2">
          <button
            className="bg-[#4B69A9] py-2 px-6 text-white mb-8"
            type="submit"
          >
            Submit
          </button>
        </div>
      </form>


      {showSuccessPopup && (
        <div
          id="successPopup"
          className="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center z-50"
        >
          <div className="bg-white p-8 rounded-lg shadow-lg text-center">
            <p className="text-2xl font-bold text-green-700">Form Submitted! 🎉</p>
            <button
              onClick={handleClosePopup}
              className="mt-4 bg-[#4B69A9] text-white py-2 px-4 rounded"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Quote;
