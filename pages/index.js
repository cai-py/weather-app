import styles from '../styles/Home.module.css';
import React, { useEffect, useState } from "react";

export default function Home() {
  const [lat, setLat] = useState(null);
  const [long, setLong] = useState(null);
  const [data, setData] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        // get user location
        const position = await new Promise((resolve, reject) => {
          navigator.geolocation.getCurrentPosition(resolve, reject);
        })

        const userLat = position.coords.latitude 
        const userLong = position.coords.longitude;

        // Set state
        setLat(userLat);
        setLong(userLong);

        // get environment variables
        const apiBaseUrl = process.env.NEXT_PUBLIC_API_URL;
        const apiKey = process.env.NEXT_PUBLIC_API_KEY;

        // fetch weather data
        const response = await fetch(`${apiBaseUrl}/weather/?lat=${userLat}&lon=${userLong}&units=metric&APPID=${apiKey}`);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }

        const result = await response.json();
        setData(result);
        console.log(result);
      } catch (error) {
        console.error("Error fetching weather data: ", error);
      }
    }
    fetchData();
  }, [])

  // Format Time
  const formatTime = (timestamp) => {
    const date = new Date(timestamp * 1000);
    const hours = date.getHours();
    const minutes = `0${date.getMinutes()}`.slice(-2);
    return `${hours}:${minutes}`;
  };
  
  return (
    <div className={styles.weatherDisplay}>
      {/* Display weather data or loading message */}
      {data ? (
        <div>
          <div className={styles.weatherCondition}>
            <h2>Current Condition</h2>
            <p>Temperature:{data.main.temp}°C</p>
          </div>
          <div className={styles.weatherInfo}>
            <h2>Weather Info</h2>
            <p>Sunrise: {formatTime(data.sys.sunrise)}</p>
            <p>Sunset: {formatTime(data.sys.sunset)}</p>
          </div>
          
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  )
}




////////// Code Graveyard //////////
// useEffect(() => {
  //   // get user's location
  //   navigator.geolocation.getCurrentPosition(function(position) {
  //     const userLat = position.coords.latitude;
  //     const userLong = position.coords.longitude;

  //     setLat(userLat);
  //     setLong(userLong);

  //     fetchWeatherData(userLat,userLong);
  //   });


  // },[]);

  // const fetchWeatherData = () => {
  //   // fetch weather data when location is found
  //   const apiUrl = `${process.env.REACT_APP_API_URL}/weather/?lat=${lat}&lon=${long}&units=metric&APPID=${process.env.REACT_APP_API_KEY}`
  //   console.log('API URL', apiUrl);

  //   fetch(apiUrl)
  //     .then(res => res.json())
  //     .then(result => {
  //       setData(restult);
  //       console.log(result)
  //     })
  //     .catch(error => {
  //       console.error("Error fetching Weather data: ", error);
  //     })
  // };
