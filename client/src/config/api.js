import axios from "axios"
const DEV_URL = "http://localhost:8000";
const PROD_URL = "https://client-dasdasd.herokuapp.com/#/";
const BASE_URL = process.env.NODE_ENV !== "production" ? DEV_URL : PROD_URL;

export const api = axios.create({
  baseURL: BASE_URL
})  