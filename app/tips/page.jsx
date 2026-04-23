import React from "react";

export default function TravelTips() {
  return (
    <div className="bg-gray-50 min-h-screen text-gray-800">
      {/* Hero Section */}
      <div className="bg-green-600 text-white py-16 px-6 text-center">
        <h1 className="text-4xl font-bold mb-4">Travel Tips for Nigeria 🇳🇬</h1>
        <p className="max-w-2xl mx-auto text-lg">
          Everything you need to know for a safe, fun, and unforgettable trip to Nigeria.
        </p>
      </div>

      {/* Content */}
      <div className="max-w-6xl mx-auto px-6 py-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">

        {/* Safety */}
        <div className="bg-white rounded-2xl shadow-md p-6 hover:shadow-lg transition">
          <h2 className="text-xl font-semibold mb-3">🛡️ Safety</h2>
          <ul className="space-y-2 text-sm">
            <li>• Avoid traveling alone at night</li>
            <li>• Use trusted transport services</li>
            <li>• Keep valuables out of sight</li>
            <li>• Stay updated on local news</li>
          </ul>
        </div>

        {/* Transportation */}
        <div className="bg-white rounded-2xl shadow-md p-6 hover:shadow-lg transition">
          <h2 className="text-xl font-semibold mb-3">🚗 Transportation</h2>
          <ul className="space-y-2 text-sm">
            <li>• Use ride-hailing apps like Uber or Bolt</li>
            <li>• Expect traffic in major cities</li>
            <li>• Domestic flights save time</li>
            <li>• Agree on prices before taxi rides</li>
          </ul>
        </div>

        {/* Currency */}
        <div className="bg-white rounded-2xl shadow-md p-6 hover:shadow-lg transition">
          <h2 className="text-xl font-semibold mb-3">💵 Currency</h2>
          <ul className="space-y-2 text-sm">
            <li>• Nigerian Naira (₦) is the local currency</li>
            <li>• Carry some cash for small purchases</li>
            <li>• ATMs are widely available</li>
            <li>• Inform your bank before travel</li>
          </ul>
        </div>

        {/* Culture */}
        <div className="bg-white rounded-2xl shadow-md p-6 hover:shadow-lg transition">
          <h2 className="text-xl font-semibold mb-3">🎭 Culture & Etiquette</h2>
          <ul className="space-y-2 text-sm">
            <li>• Nigerians are warm and welcoming</li>
            <li>• Greet people politely</li>
            <li>• Dress modestly in some areas</li>
            <li>• Respect local traditions</li>
          </ul>
        </div>

        {/* Food */}
        <div className="bg-white rounded-2xl shadow-md p-6 hover:shadow-lg transition">
          <h2 className="text-xl font-semibold mb-3">🍲 Food & Drink</h2>
          <ul className="space-y-2 text-sm">
            <li>• Try jollof rice, suya, and pounded yam</li>
            <li>• Eat from clean, busy restaurants</li>
            <li>• Drink bottled or filtered water</li>
            <li>• Be cautious with street food</li>
          </ul>
        </div>

        {/* Connectivity */}
        <div className="bg-white rounded-2xl shadow-md p-6 hover:shadow-lg transition">
          <h2 className="text-xl font-semibold mb-3">📱 Connectivity</h2>
          <ul className="space-y-2 text-sm">
            <li>• Buy a local SIM card (MTN, Airtel)</li>
            <li>• Internet is widely available in cities</li>
            <li>• Use power banks for outages</li>
            <li>• Wi-Fi may be slow in some areas</li>
          </ul>
        </div>

      </div>

      {/* Call to Action */}
      <div className="bg-white py-12 text-center border-t">
        <h2 className="text-2xl font-semibold mb-4">
          Ready to explore Nigeria?
        </h2>
        <p className="mb-6 text-gray-600">
          Plan your journey and experience the beauty, culture, and energy of Nigeria.
        </p>
        <button className="bg-green-600 text-white px-6 py-3 rounded-full hover:bg-green-700 transition">
          Start Planning
        </button>
      </div>

      {/* Footer */}
      <footer className="text-center text-sm text-gray-500 py-6">
        © {new Date().getFullYear()} Visit Nigeria Guide
      </footer>
    </div>
  );
}