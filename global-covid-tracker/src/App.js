import React, {useState, useEffect} from 'react';
import { MenuItem, FormControl, Select } from "@material-ui/core";
import InfoBox from './InfoBox';
import './App.css';

function App() {
  const [countries, setCountries] = useState(["USA", "Italy", "Nigeria"]);
  const [country, setCountry] = useState('worldwide')


  useEffect(() => {
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

  const onCountryChange = async (event) => {
    const countryCode = event.target.value;
    setCountry(countryCode);
  };

  return (
    <div className="app">
      <div className="app__header">
        <h1>GLOBAL COVID-19 DASHBOARD</h1>
        <FormControl className="app__dropdown">
          <Select variant="outlined" onChange={onCountryChange} value={country}>
            <MenuItem value="worldwide">Worldwide</MenuItem>
            {countries.map((country) => (
              <MenuItem value={country.value}>{country.name}</MenuItem>
            ))}
          </Select>
        </FormControl>
      </div>

      <div className="app__stats">
        <InfoBox title="Coronavirus Cases" cases={123} total={2000} />

        <InfoBox title="Recovered" cases={1234} total={5000} />

        <InfoBox title="Deaths" cases={12346} total={6000} />

        {/* InfoBoxes title="Coronavirus cases */}
        {/* Info Boxes title="Coronavirus recoveries */}
        {/* Info Boxes title="Coronavirus deaths*/}
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