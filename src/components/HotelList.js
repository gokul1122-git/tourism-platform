import React from "react";
import "./HotelList.css";

function HotelList({ place }) {
  const hotels = [
    {
      name: "Beach View Resort",
      location: "Visakhapatnam",
      description: "A comfortable stay near the beautiful beaches of Andhra Pradesh.",
    },
    {
      name: "Araku Valley Resort",
      location: "Araku Valley",
      description: "Peaceful accommodation surrounded by hills and greenery.",
    },
    {
      name: "Heritage Stay",
      location: "Vijayawada",
      description: "Enjoy a comfortable stay close to famous cultural attractions.",
    },
  ];

  return (
    <section className="hotel-list">
      <h1>Hotels & Stays in {place.name}</h1>

      <p className="hotel-subtitle">
        Find comfortable places to stay during your trip.
      </p>

      <div className="hotel-list-grid">
        {hotels.map((hotel, index) => (
          <div className="hotel-list-card" key={index}>
            <div className="hotel-list-image">
              <span>Hotel</span>
            </div>

            <div className="hotel-list-info">
              <h2>{hotel.name}</h2>

              <h4>{hotel.location}</h4>

              <p>{hotel.description}</p>

              <button>View Details</button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default HotelList;