function EventPlanner({ weather }) {
    if (!weather || !weather.condition) {
      return <div>No weather data available to plan events.</div>;
    }
  
    return (
      <div className="event-planner">
        <h2>Plan Your Events</h2>
        {weather.condition === 'clear' ? (
          <p>Perfect weather for outdoor events!</p>
        ) : (
          <p>It’s {weather.condition}. You might want to plan something indoors.</p>
        )}
      </div>
    );
  }
  
  export default EventPlanner;
  