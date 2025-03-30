import React from "react";
import { motion } from "framer-motion";
import { TypeAnimation } from 'react-type-animation';

function App() {
  return (
    <main className="min-h-screen bg-gray-900 text-white transition-colors duration-300">
      {/* Header */}
      <header className="flex justify-between items-center px-20 py-5 bg-black">
      <img
  src={`${process.env.PUBLIC_URL}/logos/plannit-logo-red.png`}
  alt="Plannit Logo"
  className="h-10 sm:h-12"
/>

        <button className="bg-red-500 px-6 py-2 rounded-full font-semibold">BOOK YOUR SEAT</button>
      </header>

      {/* Hero Section */}
      <section className="bg-gray-800 py-24 text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          Meet Like Minded People Over{" "}
          <TypeAnimation
            sequence={[
              "Dinner & Drinks", 2000,
              "Great Conversations", 2000,
              "Meaningful Connections", 2000,
            ]}
            speed={30}
            repeat={Infinity}
            wrapper="span"
            className="italic text-indigo-400"
          />
        </h2>
        <p className="text-lg mb-8">EVERY WEDNESDAY</p>
        <button className="px-8 py-3 rounded-full bg-white text-gray-800 font-semibold">BOOK YOUR SEAT HERE</button>
      </section>

      {/* Steps Section */}
      <section className="py-16 px-8 bg-gray-900 text-center">
        <h2 className="text-3xl font-bold mb-12">HOW DOES IT WORK?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {["Create Your Profile", "Select Time & Area", "Get Matched & Planned", "Show Up & Dive In"].map((title, i) => (
            <div key={i} className="bg-gray-700 shadow-lg rounded-xl p-6 text-white">
              <h3 className="font-bold text-xl mb-2">STEP {i + 1}</h3>
              <p className="text-sm">
                {title === "Create Your Profile" && "Answer questions about your interests, hobbies, and budget."}
                {title === "Select Time & Area" && "Choose when and where to meet. Eg (Koramangala, 8PM)."}
                {title === "Get Matched & Planned" && "Our algorithm matches you with groups at the perfect venue."}
                {title === "Show Up & Dive In" && "Head to your table for a night of conversations and memorable moments!"}
              </p>
            </div>
          ))}
        </div>
      </section>

{/* Partners Section */}
<section className="py-20 bg-gray-800 text-center">
  <h2 className="text-3xl font-bold mb-12 text-white">Our Partner Restaurants</h2>
  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-8 px-6 max-w-6xl mx-auto">
    {['chinlung', 'badmaash', 'cafe-noir', 'tycoons', 'hangover', 'mirage', 'nevermind', 'planb'].map((logo, idx) => (
      <div key={idx} className="bg-gray-900 rounded-xl p-4 shadow-md hover:shadow-xl transition duration-300">
        <img
          src={`${process.env.PUBLIC_URL}/logos/${logo}.png`}
          alt={logo}
          className="h-20 mx-auto object-contain"
        />
      </div>
    ))}
  </div>
</section>


      {/* CTA Section */}
      <section className="py-16 bg-red-600 text-center">
        <h2 className="text-4xl font-bold">Hurry Up!<br/>Connect With Like-Minded Strangers Today!</h2>
        <p className="mt-4">Next meetup on <strong>19th March</strong></p>
        <button className="mt-6 px-6 py-3 rounded-full bg-white text-red-600 font-semibold">BOOK YOUR SEAT HERE</button>
      </section>

      {/* Footer */}
      <footer className="py-10 px-8 bg-gray-900 text-gray-400">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          <div>
            <h3 className="text-2xl font-bold mb-2 text-white">PLANNiT</h3>
            <p>Your gateway to spontaneous and meaningful meetups in Bangalore. Make new connections every week!</p>
          </div>
          <div className="text-center">
            <h3 className="font-bold mb-2">Join Our Newsletter</h3>
            <input type="email" placeholder="Email Address" className="rounded-full p-2 text-gray-800"/>
            <button className="ml-2 bg-red-600 px-4 py-2 rounded-full text-white">Sign Me Up</button>
          </div>
          <div className="text-center md:text-right">
            <p>© {new Date().getFullYear()} PLANNiT. All Rights Reserved.</p>
            <div className="mt-4 flex space-x-4 justify-center md:justify-end">
              <button className="hover:underline">Community Guidelines</button>
              <button className="hover:underline">Privacy Policy</button>
              <button className="hover:underline">Terms of Service</button>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}

export default App;