import { Search } from "lucide-react";

export default function Weather() {
    return (
        <div className="weather">
            <div className="search-bar">
                <input type="text" placeholder="Search" />
                <Search size={50} color="blue" className="search-icon" />
            </div>
            <h1>Weather</h1>
        </div>
    )
}