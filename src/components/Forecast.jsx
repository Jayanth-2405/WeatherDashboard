function Forecast({ dailyForecast }) {
    return (
      <div className="forecast">
        <h2>5-Day Forecast</h2>
        {dailyForecast.length > 0 ? (
          dailyForecast.slice(0, 5).map((day, index) => (
            <div key={index}>
              <p>{new Date(day.dt * 1000).toLocaleDateString()}</p>
              <p>{day.main.temp}°C</p>
              <p>{day.weather[0].main}</p>
            </div>
          ))
        ) : (
          <p>No forecast data available</p>
        )}
      </div>
    );
  }
  
  export default Forecast;
  