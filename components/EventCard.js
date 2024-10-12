import React from "react";

function EventCard({ image, title, description, date, address, landmark }) {
  return (
    <div className="bg-white border-4 border-purple-100 hover:border-purple-400 rounded-lg overflow-hidden">
      <img src={image} alt={title} className="w-full h-48 object-cover" />
      <div className="py-6 px-4 flex flex-col h-full">
        <h2 className="text-xl font-semibold mb-2">{title}</h2>
        <p className="text-gray-700 mb-2">{description}</p>
        <p className="text-sm text-gray-500 font-medium mb-6">{date}</p>

        {/* Address and landmark */}
        <div className="border-t border-gray-300 pt-2 mt-2 text-center">
          <p className="text-gray-600 text-sm font-semibold">{address}</p>
          <p className="text-gray-500 text-sm">{landmark}</p>
        </div>
      </div>
    </div>
  );
}

export default EventCard;
