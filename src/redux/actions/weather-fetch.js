import WeatherConstants from "../constants/weather-constants";

const fetchWeather = (payload) => {
  return { type: WeatherConstants.FETCH_WEATHER, payload: payload };
};

export default fetchWeather;
