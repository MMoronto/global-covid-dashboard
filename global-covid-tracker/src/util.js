import React from "react";
import numeral from "numeral";
import { Circle, Popup } from "react-leaflet";

const casesTypeColors = {
    cases: {},
    recovered: {},
    deaths: {},
};


export const sortData = (data) => {
    const sortedData = [...data];

    return sortedData.sort((a, b) => (a.cases > b.cases ? -1 : 1));
};

// Draw Circles on the Map with interactive tooltips
export const showDataOnMap = (data, casesType='cases') => {
    data.map(country => (
        <Circle
           center={[country.countryInfo.lat, country.countryInfo.long]}
           fillOpacity={0.4} 
        >

        </Circle>
    ))
};