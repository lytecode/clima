import { Search, Waves, Wind } from "lucide-react";
import { useEffect, useRef, useState } from "react";

export default function Weather() {
    const inputRef = useRef()

    const [weatherData, setWeatherData] = useState({
        location: '',
        windSpeed: '',
        temperature: 0,
        humidity: '',
        icon: '',
    });

    const getData = async (city: string) => {
        if (!city || city === '') {
            alert("Enter city name");
            return
        }

        const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&APPID=${import.meta.env.VITE_OPEN_WEATHER_API_KEY}`
        try {
            const response = await fetch(url);
            const data = await response.json();

            setWeatherData({
                location: data.name,
                windSpeed: data.wind.speed,
                temperature: Math.floor(data.main.temp),
                humidity: data.main.humidity,
                icon: `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`,
            })
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getData('toronto')
    }, [])

    return (
        <div className="weather">
            <div className="search-bar">
                <input ref={inputRef} type="text" placeholder="Search" />
                <Search size={50} color="blue" className="search-icon" onClick={() => getData(inputRef.current.value)} />
            </div>
            <img src={weatherData.icon} className="weather-icon" alt="weather icon" />
            <p className="temperature">{weatherData.temperature}°C</p>
            <p className="location">{weatherData.location}</p>
            <div className="weather-details">
                <div className="col">
                    <Waves color="white" className="icon" />
                    <div>
                        <p>{weatherData.humidity}</p>
                        <span>Humidity</span>
                    </div>
                </div>
                <div className="col">
                    <Wind color="white" className="icon" />
                    <div>
                        <p>{weatherData.windSpeed} km/h</p>
                        <span>Wind Speed</span>
                    </div>
                </div>
            </div>
        </div>
    )
}