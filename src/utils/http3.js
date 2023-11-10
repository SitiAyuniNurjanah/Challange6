import axios from "axios";

export const http3 = axios.create({
    baseURL:  process.env.REACT_APP_BASEURL,
    timeout: 30000,
    headers: {
      accept: 'application/json',
      Authorization: `Bearer ${process.env.REACT_APP_KEY}`
    }
})