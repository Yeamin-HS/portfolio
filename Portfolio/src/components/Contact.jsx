import React from 'react';

const Contact = () => {
  return (
    <section
      id="contact"
      className="min-h-screen flex items-center justify-center bg-gradient-to-b from-black via-gray-900 to-black px-4 py-16"
    >
      <div className="w-full max-w-4xl bg-[#0e0e0e] p-10 rounded-2xl shadow-xl text-white">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 text-white">
          Contact <span className="text-blue-400">Me</span>
        </h2>

        <form className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block mb-1 text-sm font-medium text-gray-300">Name</label>
              <input
                type="text"
                placeholder="Your name"
                className="w-full px-4 py-2 rounded-lg bg-gray-800 border border-gray-700 text-white focus:outline-none focus:border-blue-600"
              />
            </div>
            <div>
              <label className="block mb-1 text-sm font-medium text-gray-300">Email</label>
              <input
                type="email"
                placeholder="Your email"
                className="w-full px-4 py-2 rounded-lg bg-gray-800 border border-gray-700 text-white focus:outline-none focus:border-blue-400"
              />
            </div>
          </div>

          <div>
            <label className="block mb-1 text-sm font-medium text-gray-300">Message</label>
            <textarea
              rows="5"
              placeholder="Your message..."
              className="w-full px-4 py-2 rounded-lg bg-gray-800 border border-gray-700 text-white focus:outline-none focus:border-blue-600 "
            ></textarea>
          </div>

          <div className="text-center">
            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-lg font-semibold transition"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
