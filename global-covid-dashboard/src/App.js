import React from "react";
import {
  MenuItem,
  FormControl,
  Select,
} from "@material-ui/core";
import './App.css';

function App() {
  return (
    <div className="app">
      <h1>COVID-19 Dashboard</h1>
      <FormControl className="app__dropdown">
        <Select
          variant="outlined"
          value="abcd"
        >
          <MenuItem value="worldwide">Worldwide</MenuItem>
          <MenuItem value="worldwide">Option2</MenuItem>
          <MenuItem value="worldwide">Option-3</MenuItem>
          <MenuItem value="worldwide">Option iv</MenuItem>
        </Select>
      </FormControl>

      {/* Header */}
      {/* Title + Select Input dropdown field */}

      {/* Info Boxes */}
      {/* Info Boxes */}
      {/* Info Boxes */}

      {/* Table */}
      {/* Bar Chart */}

      {/* Map */}
    </div>
  );
}

export default App;
