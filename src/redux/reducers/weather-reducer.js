import WeatherConstants from "../constants/weather-constants";

const weatherReducer = (state = {}, { type, payload }) => {
  switch (type) {
    case WeatherConstants.FETCH_WEATHER:
      return { ...payload };
    default:
      return {};
  }
};

export default weatherReducer;
