"use client";
import React, { useState } from "react";

function CreateEventPage() {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    date: "",
    address: "",
    landmark: "",
    eventType: "",
    participants: "",
    poster: null,
    rules: "",
    eventDetailsFile: null,
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (files) {
      setFormData({
        ...formData,
        [name]: files[0],
      });
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const eventData = new FormData();
    Object.keys(formData).forEach((key) => {
      eventData.append(key, formData[key]);
    });

    const response = await fetch("/api/events", {
      method: "POST",
      body: eventData,
    });

    if (response.ok) {
      // Redirect or show success message
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 p-6">
      <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-lg">
        <p className="font-bold text-center text-3xl text-purple-700 mb-6">Create an Event</p>
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Event Title */}
          <div>
            <label htmlFor="title" className="block text-lg font-medium text-gray-700">Event Title</label>
            <input
              type="text"
              name="title"
              id="title"
              value={formData.title}
              onChange={handleChange}
              required
              className="border border-gray-300 rounded-lg w-full p-3 focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>

          {/* Event Description */}
          <div>
            <label htmlFor="description" className="block text-lg font-medium text-gray-700">Description</label>
            <textarea
              name="description"
              id="description"
              value={formData.description}
              onChange={handleChange}
              required
              className="border border-gray-300 rounded-lg w-full p-3 focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>

          {/* Event Date */}
          <div>
            <label htmlFor="date" className="block text-lg font-medium text-gray-700">Date</label>
            <input
              type="date"
              name="date"
              id="date"
              value={formData.date}
              onChange={handleChange}
              required
              className="border border-gray-300 rounded-lg w-full p-3 focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>

          {/* Event Type */}
          <div>
            <label htmlFor="eventType" className="block text-lg font-medium text-gray-700">Event Type</label>
            <select
              name="eventType"
              id="eventType"
              value={formData.eventType}
              onChange={handleChange}
              required
              className="border border-gray-300 rounded-lg w-full p-3 focus:outline-none focus:ring-2 focus:ring-purple-500"
            >
              <option value="">Select Type</option>
              <option value="conference">Conference</option>
              <option value="workshop">Workshop</option>
              <option value="cultural">Cultural Event</option>
            </select>
          </div>

          {/* Number of Participants */}
          <div>
            <label htmlFor="participants" className="block text-lg font-medium text-gray-700">Number of Participants</label>
            <input
              type="number"
              name="participants"
              id="participants"
              value={formData.participants}
              onChange={handleChange}
              className="border border-gray-300 rounded-lg w-full p-3 focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>

          {/* Poster Upload */}
          <div>
            <label htmlFor="poster" className="block text-lg font-medium text-gray-700">Upload Poster</label>
            <input
              type="file"
              name="poster"
              id="poster"
              accept="image/*"
              onChange={handleChange}
              required
              className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:border-0 file:text-sm file:font-semibold file:bg-gray-100 hover:file:bg-gray-200"
            />
          </div>

          {/* Rules & Regulations */}
          <div>
            <label htmlFor="rules" className="block text-lg font-medium text-gray-700">Rules & Regulations</label>
            <textarea
              name="rules"
              id="rules"
              value={formData.rules}
              onChange={handleChange}
              className="border border-gray-300 rounded-lg w-full p-3 focus:outline-none focus:ring-2 focus:ring-purple-500"
              required
            />
          </div>

          {/* Upload Additional Event Details (File) */}
          <div>
            <label htmlFor="eventDetailsFile" className="block text-lg font-medium text-gray-700">Upload Event Details (PDF or DOC)</label>
            <input
              type="file"
              name="eventDetailsFile"
              id="eventDetailsFile"
              accept=".pdf, .doc, .docx"
              onChange={handleChange}
              className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:border-0 file:text-sm file:font-semibold file:bg-gray-100 hover:file:bg-gray-200"
            />
          </div>

          <button
            type="submit"
            className="bg-purple-700 hover:bg-purple-600 text-white py-2 px-4 rounded-lg w-full"
          >
            Create Event
          </button>
        </form>
      </div>
    </div>
  );
}

export default CreateEventPage;
