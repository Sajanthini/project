import React, { useState } from 'react';
import './App.css';

const DistrictLocation = () => {
  const [selectedDistrict, setSelectedDistrict] = useState('');

  const handleDistrictChange = (event) => {
    setSelectedDistrict(event.target.value);
  };

  return (
    <div className="container mt-4 pt-5 bg-light">
      <h1>Locate a Branch</h1>
      <p>Use your current location to find the nearest LB Finance branch</p>
    <br></br>
      <h6>Select District:</h6>
      <select onChange={handleDistrictChange} value={selectedDistrict}>
      <option value="">--Select District--</option>
                    <option value="Jaffna">Jaffna</option>
                    <option value="Colombo">Colombo</option>

      </select>
      <hr />
      {selectedDistrict && (
        <div>
          <h3>Location:</h3>
          <p>{selectedDistrict}</p>
        </div>
      )}
    </div>
  );
};

export default DistrictLocation;
