import { useState } from 'react';
import Header from './components/Header';
import WeatherWidget from './components/Weatherwidget';
import MoodBoard from './components/MoodBoard';
import Forecast from './components/Forecast';
import Alerts from './components/Alerts';
import EventPlanner from './components/EventPlanner';

function App() {
  const [weather, setWeather] = useState({});
  const [dailyForecast, setDailyForecast] = useState([]);
  const [alerts, setAlerts] = useState([]);
  const [events, setEvents] = useState([]);

  
  const apiKey = '77b754ef5a20ab0a08e69f5feeddf4ed'; // Replace with your actual API key

  const fetchWeatherData = async (location) => {
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}&units=metric`
      );
      const data = await response.json();

      
      if (data.cod === 200) {
        setWeather({
          location: data.name,
          temperature: data.main.temp,
          condition: data.weather[0].main.toLowerCase(),
        });
        fetchForecast(location);
       
      } else {
        console.error('Error fetching weather data:', data.message);
      }
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const fetchForecast = async (location) => {
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/forecast?q=${location}&appid=${apiKey}&units=metric`
      );
      const data = await response.json();
      setDailyForecast(data.list);
    } catch (error) {
      console.error('Error fetching forecast data:', error);
    }
  };

  // const fetchAlerts = async (location) => {
  //   try {
  //     // Assuming alerts API endpoint
  //     const response = await fetch(`https://api.openweathermap.org/data/2.5/alerts?q=${location}&appid=${apiKey}`);
  //     const data = await response.json();
  //     setAlerts(data.alerts || []);
  //   } catch (error) {
  //     console.error('Error fetching alerts:', error);
  //   }
  // };

  return (
    <div className="app">
      <Header onSearch={fetchWeatherData} />
      <WeatherWidget weather={weather} />
      <MoodBoard weather={weather} />
      <Forecast dailyForecast={dailyForecast} />
      <Alerts alerts={alerts} />
      <EventPlanner events={events} />
    </div>
  );
}

export default App;
