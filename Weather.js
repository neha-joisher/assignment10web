import { set } from "date-fns";
import React, { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import './Weather.css';

const Weather = (props) => {
    // const [finalDataa, setFinalData] = useState([]);
    const { dt } = useParams();
    const location = useLocation();
    console.log(location);

    const dtText = [];

    const checkDtText = (dt) => {
        location.state.map((item) => {
            if (dt == item.dt) {
                dtText.push(item);
            }
        })
    }



    // const fetchImage = () => {
    //     fetch(`http://api.openweathermap.org/geo/1.0/direct?q=Boston&limit=5&appid=7e645c5e4585ced4f48d0c5bcfc758c3`)
    //         .then(res => res.json())
    //         .then(result => {
    //             fetch(`http://api.openweathermap.org/data/2.5/forecast?lat=${result[0].lat}&lon=${result[0].lon}&appid=7e645c5e4585ced4f48d0c5bcfc758c3`)
    //                 .then(newRes => newRes.blob())
    //                 .then(newData => {
    //                     const imageBlob = newData.list.weather[0].icon.blob();
    //                     if (dt == newData.list.dt) {
    //                         const imageURL = URL.createObjectURL(imageBlob);
    //                         setImage(imageURL);
    //                     }
    //                     else {
    //                         new Error('Image URL not found!');
    //                     }
    //                 })
    //         })
    // }

    const kelvinToCelsius = (item) => {
        const finalTemp = Math.floor(item - 273.15);
        return finalTemp;
    }



    return (
        <div className="weatherBodyWrapper">
            {checkDtText(dt)}
            {dtText.map((data) => {
                return (
                    <div className="weatherWrapper">
                        <div className="dateAndTimeWapper">
                            <p className="h3">{new Date(data.dt_txt).toLocaleString('en-us', { weekday: "long", year: "numeric", month: "short", day: "numeric", hour: "numeric", minute: "numeric", second: "numeric" })}</p>
                        </div>
                        <div className="desciptionWrapper">
                            <div className="description">
                                <h2>Description: {data.weather[0].description}</h2>
                            </div>
                        </div>
                        <div className="weatherImage">
                            <img src={"http://openweathermap.org/img/wn/" + data.weather[0].icon + "@2x.png"} />
                        </div>
                        <div className="temp">
                            <h2>Temp: {kelvinToCelsius(data.main.temp)}{'\u00b0'}Celsius</h2>
                        </div>
                        <div className="tempWrapper">
                            <div className="maxTemp">
                                <h2>Max-Temp: {kelvinToCelsius(data.main.temp_max)}{'\u00b0'}Celsius</h2>
                            </div>
                            <div className="minTemp">
                                <h2>Min-Temp: {kelvinToCelsius(data.main.temp_min)}{'\u00b0'}Celsius</h2>
                            </div>
                            <div className="feelsLikeTemp">
                                <h2>Feels Like : {kelvinToCelsius(data.main.feels_like)}{'\u00b0'}Celsius</h2>
                            </div>
                        </div>
                        <div className="windWrapper">
                            <div className="wind">
                                <h2>Wind: {data.wind.speed} km/hr</h2>
                            </div>
                        </div>
                    </div>
                );
            })}
        </div>
    );


}

export default Weather;