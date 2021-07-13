import React, {useState, useEffect} from 'react';
import { MenuItem, FormControl, Select } from "@material-ui/core";
import './App.css';

function App() {
  const [countries, setCountries] = useState(["USA", "Italy", "Nigeria"]);
  const [country, setCountry] = useState('worldwide')

  // STATE = How to write a variable in REACT <<<<<<<<

  // https://disease.sh/v3/covid-19/countries

  // USEEFFECT = Runs a piece of code based on a given condition

  useEffect(() => {
    // The code inside here will run once 
    // when the component loads and not again after

    // async -> send a request, wait for it, do something with info

    const getCountriesData = async () => {
      await fetch("https://disease.sh/v3/covid-19/countries")
      .then((response) => AuthenticatorResponse.json())
      .then((data) => {

        

        const countries = data.map((country) => (
          {
            name: country.country, // United STates, United Kingdom
            value: country.countryInfo.iso2 // UK, USA, FR
          }));

          setCountries(countries);
      });
    };
    
    getCountriesData();
  }, []); 

  return (
    <div className="app">
      <div className="app__header">
        <h1>GLOBAL COVID-19 DASHBOARD</h1>
        <FormControl className="app__dropdown">
          <Select variant="outlined" value={country}>
            <MenuItem value="worldwide">Worldwide</MenuItem>
            {countries.map((country) => (
              <MenuItem value={country.value}>{country.name}</MenuItem>
            ))}
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

// Add this in your component file
require('react-dom');
window.React2 = require('react');
console.log(window.React1 === window.React2);