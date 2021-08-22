import React, { useRef, useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import moment from "moment";

function App() {
  const [weatherinfo, setWeatherInfo] = useState("");
  const inputRef = useRef("");
  const [image, setImage] = useState("");

  useEffect(() => {
    fetchWeatherInfo();
  }, []);

  const fetchWeatherInfo = async (e) => {
    e?.preventDefault();

    const options = {
      method: "GET",
      url: "https://community-open-weather-map.p.rapidapi.com/weather",
      params: {
        q: inputRef.current.value || "Dhaka",
        units: "metric",
      },
      headers: {
        "x-rapidapi-host": "community-open-weather-map.p.rapidapi.com",
        "x-rapidapi-key": "bb5faa6a04msh458e2202ef7e301p1a95ddjsn4e8e618febd5",
      },
    };

    const response = await axios.request(options);
    setWeatherInfo(response.data);
  };

  useEffect(() => {
    determineBackgroundImage();
  }, [weatherinfo]);

  const determineBackgroundImage = () => {
    if (weatherinfo.main?.temp < 25) {
      setImage(
        "https://images.unsplash.com/photo-1580495024618-3fb7d34affbd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=751&q=80"
      );
    }

    if (weatherinfo.main?.temp >= 25) {
      setImage(
        "https://images.unsplash.com/photo-1581041778541-1ac1b92728a4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=334&q=80"
      );
    }
  };
  console.log(image);

  return (
    <div className="app" style={{ backgroundImage: `url(${image})` }}>
      <div className="app__container">
        <div className="app__info app__left">
          <h1>Weather App</h1>
          <form>
            <input ref={inputRef} type="text" placeholder="Type the city" />
            <button onClick={fetchWeatherInfo} type="submit">
              Click me
            </button>
          </form>
        </div>

        <div className="app__info app__left">
          <h2>{weatherinfo.name}</h2>
          <h2>{weatherinfo.main?.temp} Degrees Celsius</h2>
          <h3>
            {/* {new Date(
          parseInt(weatherinfo.sys?.sunrise * 1000)
        ).toLocaleDateString()} */}
            {/* // or using moment.js  */}
            {weatherinfo &&
              `Sunrise:  ${moment
                .unix(weatherinfo.sys?.sunrise)
                .format("LLLL")}`}
          </h3>
        </div>
      </div>
    </div>
  );
}

export default App;
