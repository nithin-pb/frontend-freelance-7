import axios from "axios";

const BASE_URL = 'https://api.engage.nithinpb.com/api'

export default axios.create({
    baseURL: BASE_URL,
    withCredentials: true
});


export const axiosPrivate = axios.create({
    baseURL: BASE_URL,
    withCredentials: true,
});