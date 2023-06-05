import axios from "axios";

// const isDev = (!process.env.NODE_ENV || process.env.NODE_ENV === 'development');
// const baseURL = isDev ? 'http://localhost:8001/backend/api/v1' : 'http://142.93.166.27/backend/api/v1/'

const baseURL = 'https://truevrbooking.propulsion-learn.ch/backend/api/v1';

const truevrAPI = axios.create({
  baseURL: baseURL
})

export default truevrAPI;