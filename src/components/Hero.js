import React from "react";
import "./Hero.css";

function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>Explore India.<br />Create Memories.</h1>

        <p>
          Discover amazing destinations, hotels, food,
          transport and more — all in one place.
        </p>

        <div className="search-box">
          <input
            type="text"
            placeholder="Where do you want to go?"
          />

          <button>Search</button>
        </div>
      </div>
    </section>
  );
}

export default Hero;