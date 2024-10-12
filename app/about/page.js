import React from "react";
import { FaBullhorn, FaUsers, FaCalendarAlt, FaRocket } from "react-icons/fa";

const About = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="flex bg-[#f5f1ee] justify-between px-10">
        <div className='justify-end'>
          <h1 className="text-4xl text-center md:p-8 md:w-1/2 font-extrabold">
            About Eventhub
          </h1>
          <p className="text-lg pl-4 text-gray-600 mb-8 max-w-3xl mx-auto">
            Welcome to{" "}
            <span className="text-purple-700 font-semibold">Eventhub</span> –
            your go-to platform for discovering, creating, and sharing
            unforgettable events! Whether you’re looking for the next big music
            festival, a hidden gem food truck rally, or a local art fair, we’re
            here to connect you to the experiences that bring people together.
          </p>
        </div>
        <img src="/about_us.png" className='' />
      </div>
      <div className="max-w-7xl mx-auto text-center  px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10">
          {/* Our Mission */}
          <div className="bg-white border-2 p-8 hover:shadow-lg rounded-lg transform hover:scale-105 transition duration-300 ease-in-out">
            <div className="flex items-center mb-4">
              <FaBullhorn className="text-purple-700 text-3xl mr-3" />
              <h2 className="text-xl font-bold text-purple-700">Our Mission</h2>
            </div>
            <p className="text-gray-600 text-left">
              At Eventhub, we believe events have the power to bring communities
              closer, spark creativity, and create lasting memories. Our mission
              is simple: to make event discovery and management as easy and
              enjoyable as possible for everyone.
            </p>
          </div>

          {/* What We Do */}
          <div className="bg-white border-2 p-8 hover:shadow-lg rounded-lg transform hover:scale-105 transition duration-300 ease-in-out">
            <div className="flex items-center mb-4">
              <FaCalendarAlt className="text-purple-700 text-3xl mr-3" />
              <h2 className="text-xl font-bold text-purple-700">What We Do</h2>
            </div>
            <ul className="list-disc list-inside text-gray-600 text-left">
              <li>
                <strong>Explore Events</strong>: Find concerts, workshops,
                fairs, and more.
              </li>
              <li>
                <strong>Create and Promote</strong>: Organize your events with
                ease.
              </li>
              <li>
                <strong>Stay Connected</strong>: Follow venues, artists, and
                event creators.
              </li>
            </ul>
          </div>

          {/* Why Eventhub */}
          <div className="bg-white border-2 p-8 hover:shadow-lg rounded-lg transform hover:scale-105 transition duration-300 ease-in-out">
            <div className="flex items-center mb-4">
              <FaUsers className="text-purple-700 text-3xl mr-3" />
              <h2 className="text-xl font-bold text-purple-700">
                Why Eventhub?
              </h2>
            </div>
            <ul className="list-disc list-inside text-gray-600 text-left">
              <li>
                <strong>User-Friendly Platform</strong>: Easy for everyone to
                navigate.
              </li>
              <li>
                <strong>Personalized Experience</strong>: Get event
                recommendations based on your interests.
              </li>
              <li>
                <strong>Support for Organizers</strong>: Manage registrations,
                sell tickets, and more.
              </li>
            </ul>
          </div>

          {/* Our Story */}
          <div className="bg-white border-2 p-8 hover:shadow-lg rounded-lg transform hover:scale-105 transition duration-300 ease-in-out">
            <div className="flex items-center mb-4">
              <FaRocket className="text-purple-700 text-3xl mr-3" />
              <h2 className="text-xl font-bold text-purple-700">Our Story</h2>
            </div>
            <p className="text-gray-600 text-left">
              Founded by passionate event enthusiasts, Eventhub started as a
              small project to help people find quality events nearby. Today, we
              help thousands of users connect with events they love.
            </p>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-12 pb-10">
          <h3 className="text-xl font-bold text-purple-700">
            Join the Eventhub Community
          </h3>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Whether you're here to explore, create, or connect, Eventhub is the
            perfect space to make it happen. Start browsing today, and let the
            adventure begin!
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
