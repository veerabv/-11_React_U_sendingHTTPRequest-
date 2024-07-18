import Places from "./Places.jsx";
import { useState, useEffect } from "react";

export default function AvailablePlaces({ onSelectPlace }) {
  const [isFetching , setIsFetching] = useState(false);
  const [availabelPlaces, setAvailablePlaces] = useState([]);

  useEffect(() => {
    async function fetching() {
      setIsFetching(true)
      const response = await fetch("http://localhost:3000/places");
      const resData = await response.json();
      setAvailablePlaces(resData.places);
      setIsFetching(false)
    }
    fetching();
  }, []);
  return (
    <Places
      title="Available Places"
      places={availabelPlaces}
      isLoading = {isFetching}
      loadingText = "fetching places ...."
      fallbackText="No places available."
      onSelectPlace={onSelectPlace}
    />
  );
}
