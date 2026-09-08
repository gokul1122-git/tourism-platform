import { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Destinations from "./components/Destinations";
import DestinationDetails from "./components/DestinationDetails";

function App() {
  const [selectedPlace, setSelectedPlace] = useState(null);

  return (
    <>
      <Navbar />

      {!selectedPlace ? (
        <>
          <Hero />
          <Destinations onSelectPlace={setSelectedPlace} />
        </>
      ) : (
        <DestinationDetails place={selectedPlace} />
      )}
    </>
  );
}

export default App;