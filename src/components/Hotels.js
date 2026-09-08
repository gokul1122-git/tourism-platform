import React from "react";
import "./Hotels.css";

function Hotels() {
  const hotels = [
    {
      name: "Luxury Beach Resort",
      location: "Visakhapatnam",
      description: "Comfortable stay near beautiful beaches and attractions.",
    },
    {
      name: "Backwater Resort",
      location: "Kerala",
      description: "Relax in a peaceful resort surrounded by nature.",
    },
    {
      name: "Heritage Hotel",
      location: "Mysore",
      description: "Experience traditional architecture and modern comfort.",
    },
  ];

  return (
    <section className="hotels" id="hotels">
      <div className="section-heading">
        <h2>Hotels & Stays</h2>

        <p>
          Find comfortable places to stay during your journey across South India.
        </p>
      </div>

      <div className="hotel-grid">
        {hotels.map((hotel, index) => (
          <div className="hotel-card" key={index}>
            <div className="hotel-image">
              <span>Hotel</span>
            </div>

            <div className="hotel-info">
              <h3>{hotel.name}</h3>

              <p className="hotel-location">{hotel.location}</p>

              <p>{hotel.description}</p>

              <button>View Details</button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Hotels;