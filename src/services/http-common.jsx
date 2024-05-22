import axios from "axios";

export default axios.create({
  baseURL: "https://landcornerapi.ktgt.in/api",
  headers: {
    "Content-type": "application/json"
  }
});