function WeatherWidget({ weather }) {
    return (
      <div className="weather-widget">
        {weather.location ? (
          <div>
            <h2>{weather.location}</h2>
            <p>{weather.temperature}°C</p>
            <p>{weather.condition}</p>
          </div>
        ) : (
          <p>No weather data available</p>
        )}
      </div>
    );
  }
  
  export default WeatherWidget;
  