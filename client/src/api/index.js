import axios from "axios";

const API = axios.create({ baseURL: "http://192.168.1.8:5000" });

export const signin = (userInfo) => API.post("/user/signin", userInfo);
export const signup = (userInfo) => API.post("/user/signup", userInfo);