import Places from "./Places.jsx";
import { useState, useEffect } from "react";
import Error from "./Error.jsx";
import { sortPlacesByDistance } from "../loc.js";
import { fetchPlaces } from "../http.js";

export default function AvailablePlaces({ onSelectPlace }) {
  const [isFetching, setIsFetching] = useState(false);
  const [availabelPlaces, setAvailablePlaces] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    async function fetching() {
      setIsFetching(true);
      try {
       const places = await fetchPlaces() // the fetchPlaces is an async function. async always returns promise


        navigator.geolocation.getCurrentPosition((position) => {
          let sortedPlace = sortPlacesByDistance(places.places , position.coords.latitude ,position.coords.longitude);
          setAvailablePlaces(sortedPlace);
          setIsFetching(false);

        })

        
      } catch (err) {
        // console.log("catch",err);
        setError({message:err.message || "Could not fetch the places.Please try again later.."});
        setIsFetching(false);
      }

     
    }
    fetching();
  }, []);

  if(error){
    return(
      <Error title="An error occured!" message = {error.message}/>
    )
  }
  return (
    <Places
      title="Available Places"
      places={availabelPlaces}
      isLoading={isFetching}
      loadingText="fetching places ...."
      fallbackText="No places available."
      onSelectPlace={onSelectPlace}
    />
  );
}
