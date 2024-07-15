import { Search, Sun, Waves, Wind } from "lucide-react";
import { useEffect, useState } from "react";

export default function Weather() {
    const [weatherData, setWeatherData] = useState({
        location: '',
        windSpeed: '',
        temperature: 0,
        humidity: '',
        icon: '',
    });

    const getData = async (city: string) => {
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&APPID=${import.meta.env.VITE_OPEN_WEATHER_API_KEY}`
        try {
            const response = await fetch(url);
            const data = await response.json();
            console.log(data);
            setWeatherData({
                location: data.name,
                windSpeed: data.wind.speed,
                temperature: Math.floor(data.main.temp),
                humidity: data.main.humidity,
                icon: data.weather[0].icon,
            })
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getData('Toronto')
    }, [])

    return (
        <div className="weather">
            <div className="search-bar">
                <input type="text" placeholder="Search" />
                <Search size={50} color="blue" className="search-icon" />
            </div>
            <Sun size={100} color="orange" className="weather-icon" />
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