// components/UpcomingEvents.js
import React from 'react';
import EventCard from './EventCard';

function UpcomingEvents() {
  const events = [
    {
      id: 1,
      image: '/event1.jpg',
      title: 'Local Music Festival',
      description: 'Join us for a day of amazing music performances by local bands.',
      date: 'October 15, 2024',
      address: 'Central Park, 123 Main St',
      landmark: 'Near the fountain',
    },
    {
      id: 2,
      image: '/event2.jpg',
      title: 'Food Truck Rally',
      description: 'Experience a variety of delicious food from local food trucks.',
      date: 'October 22, 2024',
      address: 'City Square, 456 Elm St',
      landmark: 'Next to the City Mall',
    },
    {
      id: 3,
      image: '/event3.jpg',
      title: 'Art and Craft Fair',
      description: 'Discover unique handmade crafts and artworks from local artists.',
      date: 'November 5, 2024',
      address: 'Art Gallery, 789 Oak St',
      landmark: 'Opposite the Grand Theater',
    },
    {
      id: 4,
      image: '/event4.jpg',
      title: 'School Annual Function',
      description: 'Discover unique handmade crafts, artworks along with various cultural activities.',
      date: 'December 5, 2024',
      address: 'Green Valley High School, 101 School St',
      landmark: 'Near the main auditorium',
    },
  ];

  return (
    <div className="p-4">
      <h1 className="text-3xl pl-2 font-bold mb-6">Upcoming Events</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {events.map((event) => (
          <EventCard
            key={event.id}
            image={event.image}
            title={event.title}
            description={event.description}
            date={event.date}
            address={event.address}
            landmark={event.landmark}
          />
        ))}
      </div>
    </div>
  );
}

export default UpcomingEvents;
