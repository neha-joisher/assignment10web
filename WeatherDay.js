import React, { useEffect, useState } from "react";
import sunny from '../Images/sunny.png';
import cloudy from '../Images/cloudy.jpeg';
import rainy from '../Images/rainy.png';
import './WeatherDay.css';
import { Link } from "react-router-dom";
import { format, getHours } from 'date-fns';

const WeatherDay = (props) => {
    const weatherDetails = props.weatherInfoData;
    console.log(weatherDetails + "from weather day");

    const [finalDataa, setFinalData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const fetchData = () => {
        fetch(`http://api.openweathermap.org/geo/1.0/direct?q=Boston&limit=5&appid=7e645c5e4585ced4f48d0c5bcfc758c3`)
            .then(res => res.json())
            .then(result => {
                setIsLoading(true);
                fetch(`http://api.openweathermap.org/data/2.5/forecast?lat=${result[0].lat}&lon=${result[0].lon}&appid=7e645c5e4585ced4f48d0c5bcfc758c3`)
                    .then(newRes => newRes.json())
                    .then(newData => {
                        setIsLoading(true);
                        console.log(newData.list);
                        setFinalData(newData.list);
                        setIsLoading(false);
                    })
            })
    }

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <div className="weatherDayWrapper">
            <div className="welcomeWrapper">
                <div className="welcome">
                    <p className="h3">Boston's Weather</p>
                    <hr></hr>
                </div>
            </div>
            {finalDataa.map((item) => {
                return (
                    <div key={item.clouds.dt} className="wrapper">
                        <div className="isLoadingWrapper">
                            {isLoading && <p className="h2">Loading...</p>}
                        </div>
                        <div className="weatherContentWrapper">
                            <div className="dateAndTime">
                                <p className="h4">{new Date(item.dt_txt).toLocaleString('en-us', { weekday: "long", year: "numeric", month: "short", day: "numeric", hour: "numeric", minute: "numeric", second: "numeric" })}</p>
                            </div>
                            <div className="btnWrapper">
                                <button type="btn btn-link" class="btn btn-warning"><Link  to={`/weather/${item.dt}`} state={finalDataa} >Weather Info</Link></button>
                            </div>
                        </div>
                    </div>
                );
            })}

        </div>
    );
}

export default WeatherDay;