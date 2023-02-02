import axios from "axios";

const directionApi = axios.create({
  baseURL: "https://api.mapbox.com/directions/v5/mapbox/driving",
  params: {
    access_token: process.env.REACT_APP_MAPBOX_TOKEN,
    alternatives: false,
    geometries: "geojson",
    overview: "simplified",
    steps: false,
  },
});

export default directionApi;
