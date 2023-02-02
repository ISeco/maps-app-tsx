import React from "react";
import mapboxgl from "mapbox-gl";
import ReactDOM from "react-dom";

import { MapsApp } from "./MapsApp";

if (!navigator.geolocation) {
  alert("Tu navegador no tiene acceso a la Geolocalización");
  throw new Error("Tu navegador no tiene acceso a la Geolocalización");
}

mapboxgl.accessToken = process.env.REACT_APP_MAPBOX_TOKEN as string;

ReactDOM.render(
  <React.StrictMode>
    <MapsApp />
  </React.StrictMode>,
  document.getElementById("root") as HTMLElement
);
