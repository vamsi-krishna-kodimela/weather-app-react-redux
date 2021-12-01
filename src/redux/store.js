import { createStore } from "redux";
import weatherReducer from "./reducers/weather-reducer";

const weatherStore = createStore(
  weatherReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default weatherStore;
