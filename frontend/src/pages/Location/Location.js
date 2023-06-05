import LocationComp from "./LocationComp/LocationComp"
import ViewTitle from "../../components/ViewTitle/ViewTitle";
import React, { useEffect, useState } from 'react';
import { useDispatch } from "react-redux";
import { updateLocationData } from "../../redux/slices/booking";
import { LocationList } from "./LocationStyles";

const Location = ({ onLocationSelected }) => {
  const dispatch = useDispatch();

  const handleLocationSelected = (location) => {
    dispatch(updateLocationData(location));
    onLocationSelected(location.center_id);
  }

  const [response, setResponse] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const config = {
    method: "GET",
    headers: new Headers({
      "Content-Type": "application/json"
    }),
  };

  const url = "https://truevrbooking.propulsion-learn.ch/backend/api/v1/center/"

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const res = await fetch(url, config);
        const json = await res.json();
        setResponse(json);
        setIsLoading(false);
      } catch (error) {
        setError(error);
      }
    };
    fetchData()
  }, []);

  return (
    <>
      <ViewTitle title="Choose a center" />
      <LocationList>
        {
          response.map(center => {
            return <LocationComp
              onLocationSelected={() => handleLocationSelected(center)}
              info={center}
              key={center.center_id}
            />
          })
        }
      </LocationList>
    </>
  );
}

export default Location;