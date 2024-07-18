import Places from "./Places.jsx";
import { useState, useEffect } from "react";

export default function AvailablePlaces({ onSelectPlace }) {
  const [availabelPlaces, setAvailablePlaces] = useState([]);

  useEffect(() => {
    async function fetching() {
      const response = await fetch("http://localhost:3000/places");
      const resData = await response.json();
      setAvailablePlaces(resData.places);
    }
    fetching();
  }, []);
  return (
    <Places
      title="Available Places"
      places={availabelPlaces}
      fallbackText="No places available."
      onSelectPlace={onSelectPlace}
    />
  );
}
