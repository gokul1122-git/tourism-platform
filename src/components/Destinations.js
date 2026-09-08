import React from "react";
import "./Destinations.css";

function Destinations({ onSelectPlace }) {
  const places = [
    {
      name: "Kerala",
      description:
        "Explore beautiful backwaters, beaches, greenery and peaceful landscapes.",
      image:
        "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=800&q=80",
    },
    {
      name: "Tamil Nadu",
      description:
        "Discover ancient temples, rich culture, heritage and beautiful hill stations.",
      image:
        "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=800&q=80",
    },
    {
      name: "Karnataka",
      description:
        "Experience heritage sites, waterfalls, forests and vibrant city life.",
      image:
        "https://images.unsplash.com/photo-1596176530529-78163a4f7af2?auto=format&fit=crop&w=800&q=80",
    },
    {
      name: "Andhra Pradesh",
      description:
        "Visit historic temples, scenic beaches and unique cultural destinations.",
      image: "/image/andhra-pradesh.jpg",
    },
  ];

  return (
    <section className="destinations" id="destinations">
      <div className="section-heading">
        <h2>Popular Destinations in South India</h2>

        <p>
          Discover the culture, nature, heritage and unforgettable experiences
          of South India.
        </p>
      </div>

      <div className="destination-grid">
        {places.map((place, index) => (
          <div className="destination-card" key={index}>
            <img src={place.image} alt={place.name} />

            <div className="destination-info">
              <h3>{place.name}</h3>

              <p>{place.description}</p>

              <button onClick={() => onSelectPlace(place)}>
  Explore
</button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Destinations;