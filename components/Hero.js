import Link from "next/link";
import React from "react";

function Hero() {
  return (
    <div className="flex flex-col-reverse md:flex-row items-center justify-between bg-[#f5f1ee] text-white h-[400px]">
      {/* Text content */}
      <div className="text-center text-black p-4 md:p-8 md:w-1/2">
        <h1 className="text-3xl md:text-5xl font-bold mb-4">
          Welcome to EventHub
        </h1>
        <p className="text-lg mb-6">
          Discover and manage local events with ease
        </p>
        <Link
          href="/events"
          className="font-semibold text-orange-500 border-2 border-orange-500  hover:bg-orange-500 hover:text-white py-3 px-6 rounded-lg"
        >
          Explore Events
        </Link>
        <Link
          href="/events/create"
          className="mx-2 font-semibold text-purple-500 border-2 border-purple-500 hover:bg-purple-500 hover:text-white py-3 px-6 rounded-lg"
        >
          Create Event
        </Link>
      </div>

      {/* Hero Image */}
      <div className="md:w-1/2">
        <img
          src="/heroImage.jpg"
          alt="Hero"
          className="w-full h-[300px] md:h-[400px] object-cover"
        />
      </div>
    </div>
  );
}

export default Hero;
