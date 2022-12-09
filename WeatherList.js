import React from "react";
import './WeatherList.css';
import WeatherDay from "./WeatherDay";
import sunny from '../Images/sunny.png';
import cloudy from '../Images/cloudy.jpeg';
import rainy from '../Images/rainy.png'


const WeatherList = (props) => {

    const data = props.weatherInfo;
    // console.log(data);
    return (
        <div>
            <div className="weatherListWrapper">
                {/* <div className="weatherListHeadingWrapper">
                    <div className="cityNameWrapper">
                        <h2>Boston, today</h2>
                    </div>
                    <div className="temperatureWrapper">
                        <h2>9 degree's</h2>
                    </div>
                    <div className="temperatureImage">
                        <img id="tempId" src={cloudy} alt="temperatureImage" />
                    </div>
                </div> */}
                <div className="weatherDays">
                   <WeatherDay weatherInfoData={data} />
                </div>
            </div>
        </div>
    );
}

export default WeatherList;