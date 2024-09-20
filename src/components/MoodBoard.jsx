function MoodBoard({ weather }) {
    const getMood = (condition) => {
      switch (condition) {
        case 'rain':
          return { mood: 'cozy', color: '#87CEFA', message: 'Perfect weather for a cup of tea!' };
        case 'clear':
          return { mood: 'sunny', color: '#FFD700', message: 'It’s a bright and cheerful day!' };
        case 'clouds':
          return { mood: 'gloomy', color: '#808080', message: 'A calm and cool day.' };
        default:
          return { mood: 'neutral', color: 'green', message: 'A typical day.' };
      }
    };
  
    const mood = getMood(weather.condition || 'neutral');
  
    return (
      <div className="mood-board" style={{ backgroundColor: mood.color }}>
        <h2>Today's Mood: {mood.mood}</h2>
        <p>{mood.message}</p>
      </div>
    );
  }
  
  export default MoodBoard;
  