import { useState } from 'react';

function Header({ onSearch }) {
  const [location, setLocation] = useState('');

  const handleSearch = () => {
    if (location) {
      onSearch(location);
    }
  };

  return (
    <div className="header" >
        <h1 >Weather Dashboard</h1> 
        <br/>
      <input
        type="text"
        placeholder="Enter location..."
        value={location}
        onChange={(e) => setLocation(e.target.value)}
        style={{
            width:'300px',
            height : '35px',
           background: 'white',
           padding: '10px',
           fontSize: '35px',
           borderRadius: '5px',
           marginRight: '10px',
           color:'black',
        
        }}
      />
      <button onClick={handleSearch}
      style={{
        padding: '10px 20px', fontSize: '30px',borderRadius: '5px',
        backgroundColor: 'blue', color: 'white', cursor: 'pointer',
        }}  >Search</button>
    </div>
  );
}

export default Header;
