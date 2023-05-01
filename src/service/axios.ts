import axios from "axios";

const BASE_URL = 'http://localhost:8000'
//const BASE_URL = 'https://demo.finthesys.com/v2/api'

export default axios.create({
    baseURL: BASE_URL,
    withCredentials: true
});


export const axiosPrivate = axios.create({
    baseURL: BASE_URL,
    withCredentials: true,
});