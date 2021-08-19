// Coonection to the Backend
import axios from "axios";

const chantAPI = axios.create({
  baseURL: "http://localhost:3000",
});

export default chantAPI;
