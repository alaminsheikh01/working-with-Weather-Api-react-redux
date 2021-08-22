import React, { useEffect } from "react";
import "./App.css";
import axios from "axios";

const options = {
  method: "GET",
  url: "https://community-open-weather-map.p.rapidapi.com/weather",
  params: {
    q: "Dhaka",
    cnt: "0",
    mode: "null",
    lon: "0",
    type: "link, accurate",
    lat: "0",
    units: "imperial, metric",
  },
  headers: {
    "x-rapidapi-host": "community-open-weather-map.p.rapidapi.com",
    "x-rapidapi-key": "bb5faa6a04msh458e2202ef7e301p1a95ddjsn4e8e618febd5",
  },
};

function App() {
  useEffect(() => {
    axios
      .request(options)
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <div>
      <h1>Hello world</h1>
    </div>
  );
}

export default App;
