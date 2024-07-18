import Places from "./Places.jsx";
import { useState,useEffect } from "react";

export default function AvailablePlaces({ onSelectPlace }) {
  const [availabelPlaces , setAvailablePlaces] = useState([]);
  useEffect(
    () =>{
      fetch("http://localhost:3000/places")
        .then((response) => {
          return response.json();
        })
        .then((resData) => {
          setAvailablePlaces(resData.places);
        })},
    []
  );
  return (
    <Places
      title="Available Places"
      places={availabelPlaces}
      fallbackText="No places available."
      onSelectPlace={onSelectPlace}
    />
  );
}
