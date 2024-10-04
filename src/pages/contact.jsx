import React, { useState } from "react";
import { CircularProgress, Button } from '@mui/material';
import { IoLocation } from "react-icons/io5";
import { MdMarkEmailRead } from "react-icons/md";
import { FaPhone } from "react-icons/fa";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import contactImage from '../assets/assets/girl.png'; // Import your contact image

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch("http://your-django-api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        toast.success("Message sent successfully!");
        setFormData({ name: "", email: "", message: "" });
      } else {
        toast.error("An error occurred, please try again.");
      }
    } catch (error) {
      toast.error("An error occurred, please try again.");
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="px-4 py-10 bg-gray-50 mt-16 min-h-screen">
      <h1 className="text-center text-3xl mx-auto my-10 font-extrabold bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
        Get In Touch
      </h1>

      {/* First div with image and contact details */}
      <div className="flex flex-col md:flex-row justify-between px-8 gap-8 mb-10">
        <div className="flex flex-1 flex-col items-center md:items-start">
          <img
            src={contactImage}
            alt="Contact"
            className="object-cover rounded-lg w-full h-auto"
          />
        </div>

        <div className="flex flex-col flex-1">
          <h1 className="text-4xl font-extrabold mb-9 mt-20 text-center md:text-start bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
            We're Here to Help
          </h1>
          <p className="text-md font-semibold text-slate-500 mb-5">
            Have questions about our job platform? We're here to assist you.
          </p>
          <div className="flex items-start mt-6">
            <MdMarkEmailRead className="text-green-500 text-xl" />
            <h2 className="text-sm font-bold ml-2">support@jobplatform.com</h2>
          </div>
          <div className="flex items-start mt-6">
            <FaPhone className="text-green-500 text-xl" />
            <a href="tel:+1234567890" className="hover:text-blue-400">(+123) 456-7890</a>
          </div>
          <div className="flex items-start mt-6">
            <IoLocation className="text-green-500 text-xl" />
            <h2 className="text-sm font-bold ml-2">123 Job Street, Suite 350, New York, USA</h2>
          </div>
        </div>
      </div>

      {/* Flex layout for description and contact form */}
      <div className="flex flex-col md:flex-row px-8 gap-4">
        {/* Description */}
        <div className="flex flex-col flex-1 mb-6 md:mb-0">
          <h2 className="text-2xl font-bold mb-4 bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">Contact Form</h2>
          <p className="text-md text-slate-500 font-semibold mb-4">
            At our job platform, we understand the importance of finding the right opportunity. We're committed to providing you with the highest level of support.
          </p>
          <p className="text-md text-slate-500 font-semibold mb-4">
            Whether you have questions about job listings, need assistance with applications, or seek career advice, we're here to help!
          </p>
        </div>

        {/* Contact Form */}
        <div className="flex flex-col flex-1">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="flex flex-col mt-3 w-full max-w-md mx-auto">
              <label htmlFor="name" className="mb-1 text-sm font-semibold">Your Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="bg-slate-200 p-3 border focus:outline-green-700 text-sm rounded-md"
                placeholder="Your Name"
                required
              />
            </div>
            <div className="flex flex-col mt-3 w-full max-w-md mx-auto">
              <label htmlFor="email" className="mb-1 text-sm font-semibold">Your Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="bg-slate-200 p-3 text-sm border focus:outline-green-700 rounded-md"
                placeholder="Your Email"
                required
              />
            </div>
            <div className="flex flex-col mt-3 w-full max-w-md mx-auto">
              <label htmlFor="message" className="mb-1 text-sm font-semibold">Your Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="bg-slate-200 resize-none text-sm border focus:outline-green-700 rounded-md p-3"
                placeholder="Enter your message here"
                rows={4}
                required
              />
            </div>
            <div className="flex justify-center mt-6">
              <Button
                type="submit"
                variant="contained"
                color="primary"
                disabled={loading}
                startIcon={loading ? <CircularProgress size={20} color="inherit" /> : null}
              >
                {loading ? "Submitting..." : "Submit"}
              </Button>
            </div>
          </form>
        </div>
      </div>

      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </div>
  );
};

export default Contact;
