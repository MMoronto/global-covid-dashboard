import React, {useState} from 'react';
import { MenuItem, FormControl, Select } from "@material-ui/core";
import './App.css';

function App() {
  const [countries, setCountries] = useState(["USA", "Italy", "Nigeria"]);

  // STATE = How to write a variable in REACT <<<<<<<<

  return (
    <div className="app">
      <div className="app__header">
        <h1>GLOBAL COVID-19 DASHBOARD</h1>
        <FormControl className="app__dropdown">
          <Select variant="outlined" value="abc">
          {/* Loop through all the countries and 
          show a drop down list of the options */}

          {countries.map((country) => (
            <MenuItem value={country}>{country}</MenuItem>
          ))}


            {/* <MenuItem value="worldwide">Worldwide</MenuItem>
            <MenuItem value="worldwide">Worldwide</MenuItem>
            <MenuItem value="worldwide">Worldwide</MenuItem>
            <MenuItem value="worldwide">Worldwide</MenuItem> */}
          </Select>
        </FormControl>
      </div>

      {/* Header */}
      {/* Title + Select input dropdown field */}

      {/* Info Boxes */}
      {/* Info Boxes */}
      {/* Info Boxes */}

      {/* Table */}
      {/* Graphs */}

      {/* Map */}
    </div>
  );
}

export default App;

// // Add this in your component file
// require('react-dom');
// window.React2 = require('react');
// console.log(window.React1 === window.React2);