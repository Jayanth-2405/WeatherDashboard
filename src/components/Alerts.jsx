function Alerts({ alerts }) {
    return (
      <div className="alerts">
        <h2>Weather Alerts</h2>
        {alerts.length > 0 ? (
          alerts.map((alert, index) => (
            <div key={index}>
              <p>{alert.event}</p>
              <p>{alert.description}</p>
            </div>
          ))
        ) : (
          <p>No weather alerts at this time.</p>
        )}
      </div>
    );
  }
  
  export default Alerts;
  