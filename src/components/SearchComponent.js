import React from "react";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import fetchWeather from "../redux/actions/weather-fetch";

const SearchComponent = () => {
  const [getState, setGetState] = useState("hyderabad");
  const [city, setCity] = useState("hyderabad");
  const dispatch = useDispatch();

  const apiKey = "278a0ac6968bf84d27a0adf4166abc2f";
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;

  useEffect(() => {
    fetch(apiUrl)
      .then((res) => res.json())
      .then((data) => {
        dispatch(fetchWeather(data));
      });
  }, [apiUrl, dispatch]);

  const submitHandler = () => {
    setCity(getState);
  };

  return (
    <div className="main-search">
      <div className="search-bar">
        <input
          type="text"
          id="location-name"
          onChange={(event) => setGetState(event.target.value)}
          value={getState}
          className="shadow-sm"
        />
      </div>
      <div className="search-button">
        <button className="search-btn shadow-sm" onClick={submitHandler}>
          Search
        </button>
      </div>
    </div>
  );
};

export default SearchComponent;
