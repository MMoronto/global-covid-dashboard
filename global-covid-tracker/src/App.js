import React from 'react';
import {
  MenuItem,
  FormControl,
  Select,
} from "@material-ui/core";
import './App.css';

function App() {
  return (
    <div className="app">
      <h1>GLOBAL COVID-19 DASHBOARD</h1>
      <FormControl className="app__dropdown">
        <Select
          variant="outlined"
          value="abc"
        >
          <MenuItem value="worldwide">Worldwide</MenuItem>
          <MenuItem value="worldwide">Worldwide</MenuItem>
          <MenuItem value="worldwide">Worldwide</MenuItem>
          <MenuItem value="worldwide">Worldwide</MenuItem>
        </Select>
      </FormControl>

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
