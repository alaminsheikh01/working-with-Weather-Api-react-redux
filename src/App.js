import React, { useRef, useState, useEffect } from "react";
import "./App.css";
import axios from "axios";

function App() {
  const [weatherinfo, setWeatherInfo] = useState("");
  const inputRef = useRef("");

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

  return (
    <div>
      <h1>Hello world</h1>
      <form>
        <input ref={inputRef} type="text" placeholder="Type the city" />
        <button onClick={fetchWeatherInfo} type="submit">
          Click me
        </button>
      </form>
      <h2>{weatherinfo.name}</h2>
    </div>
  );
}

export default App;
