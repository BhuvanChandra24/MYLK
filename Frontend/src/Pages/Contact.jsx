import { useState } from "react";
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaPaperPlane } from "react-icons/fa6";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thank you! We’ll contact you soon.");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="min-h-screen bg-coffee-50 pt-24 pb-16">
      
      {/* Header */}
      <div className="bg-coffee-800 text-white py-16 mb-12">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-3">Contact MYLK Co*</h1>
          <p className="text-coffee-200">
            Our kitchen on wheels is launching soon. Reach us for updates,
            bookings, or events.
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 space-y-10">

        {/* Contact Info */}
        <div className="grid sm:grid-cols-3 gap-6">
          <div className="bg-white rounded-2xl shadow p-6 text-center">
            <FaPhone className="text-coffee-700 text-2xl mx-auto mb-2" />
            <p className="font-semibold text-coffee-800">Phone</p>
            <p className="text-coffee-600 text-sm">+91 00000 00000</p>
          </div>

          <div className="bg-white rounded-2xl shadow p-6 text-center">
            <FaEnvelope className="text-coffee-700 text-2xl mx-auto mb-2" />
            <p className="font-semibold text-coffee-800">Email</p>
            <p className="text-coffee-600 text-sm">mylkco@email.com</p>
          </div>

          <div className="bg-white rounded-2xl shadow p-6 text-center">
            <FaMapMarkerAlt className="text-coffee-700 text-2xl mx-auto mb-2" />
            <p className="font-semibold text-coffee-800">Location</p>
            <p className="text-coffee-600 text-sm">Food Truck — Rolling Soon</p>
          </div>
        </div>

        {/* Form */}
        <div className="bg-white rounded-3xl shadow-lg p-8">
          <h2 className="text-2xl font-bold text-coffee-800 mb-4">
            Send a Message
          </h2>

          <form onSubmit={handleSubmit} className="space-y-5">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border border-coffee-200 rounded-xl focus:outline-none focus:border-coffee-500"
            />

            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border border-coffee-200 rounded-xl focus:outline-none focus:border-coffee-500"
            />

            <textarea
              name="message"
              rows="4"
              placeholder="Message"
              value={formData.message}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border border-coffee-200 rounded-xl focus:outline-none focus:border-coffee-500"
            />

            <button
              type="submit"
              className="w-full bg-coffee-700 text-white py-3 rounded-xl font-semibold flex items-center justify-center gap-2 hover:bg-coffee-800 transition"
            >
              <FaPaperPlane />
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
