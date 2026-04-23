"use client";
import React from "react";
import { useState } from "react";

const about = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="font-sans text-gray-800">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-500 to-cyan-600 text-white py-20 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">About Tourgee</h1>
        <p className="text-lg md:text-xl max-w-2xl mx-auto">
          Discover destinations, explore cultures, and experience travel like never before.
        </p>
      </section>

      {/* Content */}
      <section className="max-w-4xl mx-auto px-6 py-16 space-y-12">
        
        {/* Who We Are */}
        <div>
          <h2 className="text-2xl font-semibold mb-3">Who We Are</h2>
          <p className="text-gray-600">
            Tourgee is your trusted travel companion, designed to help you explore
            incredible destinations with ease. Whether it's a quick getaway or a
            long adventure, we bring curated travel experiences directly to you.
          </p>
        </div>

        {/* Mission */}
        <div>
          <h2 className="text-2xl font-semibold mb-3">Our Mission</h2>
          <p className="text-gray-600">
            Our mission is to simplify travel planning while connecting people to
            diverse cultures, landscapes, and unforgettable experiences. Travel
            should be exciting, accessible, and seamless—and that's exactly what
            we deliver.
          </p>
        </div>

        {/* Expansion */}
        <div>
          <h2 className="text-2xl font-semibold mb-3">Expanding Across West Africa</h2>
          <p className="text-gray-600">
            We're growing beyond borders. Tourgee is expanding into a broader West
            African platform, giving you access to more destinations, richer
            cultural experiences, and a unified way to explore the region.
          </p>
        </div>

        {/* Hotel Booking Toggle */}
        <div>
          <h2 className="text-2xl font-semibold mb-3">Hotel Bookings</h2>
          <p className="text-gray-600">
            We're building something exciting to make your travel planning even smoother.
          </p>

          <button
            onClick={() => setOpen(!open)}
            className="mt-4 px-6 py-2 bg-cyan-600 hover:bg-cyan-700 text-white rounded-lg transition duration-300"
          >
            {open ? "Hide Details" : "See What's Coming"}
          </button>

          {/* Animated Toggle */}
          <div
            className={`transition-all duration-500 ease-in-out overflow-hidden ${
              open ? "max-h-40 opacity-100 mt-4" : "max-h-0 opacity-0"
            }`}
          >
            <div className="bg-gray-100 p-4 rounded-lg shadow-inner">
              <p className="text-gray-700">
                🚧 Hotel bookings are coming soon! Soon you'll be able to search,
                compare, and book hotels directly on Tourgee—with great deals and
                a seamless experience all in one place.
              </p>
            </div>
          </div>
        </div>

      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white text-center py-6 mt-10">
        <p>© {new Date().getFullYear()} Tourgee. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default about;