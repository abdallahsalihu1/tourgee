import React from "react";

// ✅ Add this array at the top
const places = [
  {
    name: "Zuma Rock",
    location: "Niger State",
    image: "/images/zumarock.jpg",
  },
  {
    name: "Obudu Mountain Resort",
    location: "Cross River State",
    image: "/images/obudu.jpg",
  },
  {
    name: "Lekki Conservation Centre",
    location: "Lagos State",
    image: "/images/lekkiconservation.jpg",
  },
  {
    name: "Olumo Rock",
    location: "Ogun State",
    image: "/images/olumorock.jpg",
  },
  {
    name: "Yankari National Park",
    location: "Bauchi State",
    image: "/images/yankari.jpg",
  },
  {
    name: "Erin Ijesha Waterfall",
    location: "Osun State",
    image: "/images/ijeshafalls.jpg",
  },
  {
    name: "Kajuru Castle",
    location: "Kaduna State",
    image: "/images/Kajurucastle.jpg",
  },
  {
    name: "Jabi Lake",
    location: "Federal Capital Territory",
    image: "/images/jabilake.jpg",
  },
  {
    name: "Aso Rock",
    location: "Abuja (FCT)",
    image: "/images/asorock.jpg",
  },
  {
    name: "Nike Art Gallery",
    location: "Lagos State",
    image: "/images/nikeart.jpg",
  },
  {
    name: "Ogbunike Caves",
    location: "Anambra State",
    image: "/images/ogbunikecave.jpg",
  },
  {
    name: "Tarkwa Bay Beach",
    location: "Lagos State",
    image: "/images/tarkwa.jpg",
  },
];

export default function Explore() {
  return (
    <main className="bg-[url('/tour3.jpg')] bg-no-repeat bg-center bg-cover min-h-screen">
      
      {/* Overlay for readability */}
      <div className="bg-black/60 min-h-screen px-4 py-10">

        {/* Intro Section */}
        <div className="max-w-3xl mx-auto text-center text-white mb-10">
          <h1 className="text-3xl md:text-4xl font-bold mb-4 text-blue-700">
            Explore Nigeria
          </h1>
          <p className="text-lg leading-relaxed">
            Nigeria is a vibrant and diverse country in West Africa, known for its rich cultural heritage, bustling cities, beautiful landscapes, and warm hospitality. With over 250 ethnic groups, Nigeria offers a unique blend of traditions, languages, cuisines, and festivals. From lively urban centers to serene natural attractions, it’s a destination full of energy and discovery.

            Tourists visiting Nigeria can experience everything from historical landmarks and wildlife parks to beaches, waterfalls, and cultural festivals. Whether you’re interested in history, nature, or modern city life, Nigeria has something to offer.
          </p>
        </div>

        {/* Places Grid */}
        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 max-w-6xl mx-auto">
          {places.map((place, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:scale-105 transition duration-300"
            >
              <img
                src={place.image}
                alt={place.name}
                className="w-full h-48 object-cover"
              />

              <div className="p-4">
                <h2 className="text-xl font-semibold">{place.name}</h2>
                <p className="text-gray-500">{place.location}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </main>
  );
}