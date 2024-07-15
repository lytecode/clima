import { Search, Sun, Waves, Wind } from "lucide-react";

export default function Weather() {
    return (
        <div className="weather">
            <div className="search-bar">
                <input type="text" placeholder="Search" />
                <Search size={50} color="blue" className="search-icon" />
            </div>
            <Sun size={100} color="orange" className="weather-icon" />
            <p className="temperature">23°C</p>
            <p className="location">Toronto</p>
            <div className="weather-details">
                <div className="col">
                    <Waves color="white" className="icon" />
                    <div>
                        <p>70</p>
                        <span>Humidity</span>
                    </div>
                </div>
                <div className="col">
                    <Wind color="white" className="icon" />
                    <div>
                        <p>90 km/h</p>
                        <span>Wind Speed</span>
                    </div>
                </div>
            </div>
        </div>
    )
}