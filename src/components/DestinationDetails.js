import React from "react";
import "./DestinationDetails.css";

function DestinationDetails({ place, onSelectPlace }) {
  const places = {
    Kerala: [
      "Munnar",
      "Alleppey",
      "Wayanad",
      "Kochi",
      "Thekkady",
    ],

    "Tamil Nadu": [
      "Ooty",
      "Chennai",
      "Madurai",
      "Kodaikanal",
      "Rameswaram",
    ],

    Karnataka: [
      "Coorg",
      "Mysore",
      "Bangalore",
      "Hampi",
      "Chikmagalur",
    ],

    "Andhra Pradesh": [
      "Visakhapatnam",
      "Araku Valley",
      "Tirupati",
      "Vijayawada",
      "Amaravati",
    ],
  };

  const selectedPlaces = places[place.name] || [];

  return (
    <section className="destination-details">
      <h1>{place.name}</h1>

      <p>{place.description}</p>

      <h2>Places to Visit in {place.name}</h2>

      <div className="places-grid">
        {selectedPlaces.map((placeName, index) => (
          <div className="place-card" key={index}>
            <h3>{placeName}</h3>

            <button onClick={() => onSelectPlace({ name: placeName })}>
              Explore
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}

export default DestinationDetails;