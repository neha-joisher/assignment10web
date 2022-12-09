import React, { useEffect, useState } from 'react';
import './App.css';
import WeatherList from './Components/WeatherList';
import { Routes, Route } from 'react-router-dom'
import Weather from './Components/Weather';
import WeatherDay from './Components/WeatherDay';
import axios from 'axios';

function App() {

  const weatherInfo = [
    { day: "Sun Nov 27", degrees: "10", status: "Cloudy", id: 1 },
    { day: "Mon Nov 28", degrees: "9", status: "Sunny", id: 2 },
    { day: "Tue Nov 29", degrees: "5", status: "Sunny", id: 3 },
    { day: "Wed Nov 30", degrees: "12", status: "Rainy", id: 4 },
    { day: "Thu Dec 01", degrees: "1", status: "Sunny", id: 5 },
  ];


  const [error, setError] = useState();
  const [data, setData] = useState([]);
  // const [finalData, setFinalData] = useState([]);

  // const REACT_APP_API_URL = 'https://api.openweathermap.org/data/2.5'
  // const REACT_APP_API_KEY = 'eda983f3cff0e16a6514d0a2f854eafe'
  // const REACT_APP_ICON_URL = 'https://openweathermap.org/img/w'

  // const fetchData = () => {
  //   // const weatherData = "http://api.openweathermap.org/geo/1.0/direct?q=Boston&limit=5&appid=eda983f3cff0e16a6514d0a2f854eafe"
  //   // const weatherURL = "`${REACT_APP_API_URL}//weather/?lat=${lat}&lon=${long}&units=metric&APPID=${REACT_APP_API_KEY}`";
  //   fetch('http://api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=eda983f3cff0e16a6514d0a2f854eafe')
  //     .then((response) => {
  //       response.json();
  //     })
  //     .then((result) => {
  //       setData(result);
  //       console.log(result);
  //     }).catch((err) => {
  //       setError(err.message);
  //     });
  // }

  // const stateWeatherData = [];
  // const fetchData = () => {
  //   axios.get('http://api.openweathermap.org/geo/1.0/direct?q=Boston&limit=5&appid=eda983f3cff0e16a6514d0a2f854eafe').then((result) => {
  //     setData(result);
  //     const d = result.data;
  //     d.map((item) => {
  //       if (item.state == "Massachusetts") {
  //         stateWeatherData.push(item);
  //       }
  //     });
  //   }).catch((err) => {
  //     setError(err.message);
  //     console.log('The error is:', err.message);
  //   });
  // }

  // const fetchTheData = () => {
  //   fetch(`http://api.openweathermap.org/geo/1.0/direct?q=Boston&limit=5&appid=eda983f3cff0e16a6514d0a2f854eafe`)
  //     .then((response) => {
  //       response.json();
  //     })
  //     .then((data) => {
  //       fetch(`http://api.openweathermap.org/data/2.5/forecast?lat=${data[0].lat}&lon=${data[0].lon}&appid=eda983f3cff0e16a6514d0a2f854eafe`)
  //     }).then((res) => res.json())
  //     .then((result) => {
  //       setFinalData(result);
  //       console.log(result);
  //     });
  // }


  // const onSubmit = () => {
  //   fetch(`http://api.openweathermap.org/geo/1.0/direct?q=Boston&limit=5&appid=7e645c5e4585ced4f48d0c5bcfc758c3`)
  //     .then(res => res.json())
  //     .then(result => {
  //       fetch(`http://api.openweathermap.org/data/2.5/forecast?lat=${result[0].lat}&lon=${result[0].lon}&appid=7e645c5e4585ced4f48d0c5bcfc758c3`)
  //         .then(newRes => newRes.json())
  //         .then(newData => {
  //           console.log(newData.list);
  //           setFinalData(newData);
  //         })
  //     })
  // }



  return (
    <div className="appWrapper">
      <Routes>
        <Route path='/' element={<WeatherList weatherInfo={weatherInfo} />} />
        <Route path='/weather/:dt' element={<Weather />} />
      </Routes>
     
    </div>
  );
}

export default App;
