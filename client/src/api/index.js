import axios from "axios";
// import AsyncStorage from "@react-native-async-storage/async-storage";

const API = axios.create({ baseURL: "http://192.168.1.8:5000" });

/*
    API.interceptors.request.use((request) => {
        const profile = JSON.parse(AsyncStorage.getItem("userInfo"));

        if (profile && profile.token) {
            const token = profile.token.credential || profile.token;
            request.headers.Authorization = `Bearer ${token}`;
        }

        return request;
    });
*/

export const fetchUserData = (userEmail) => API.get("/user/fetchUserData", userEmail);
export const alterUserData = (updatedData) => API.patch("/user/alterUserData", updatedData);
export const signin = (userInfo) => API.post("/user/signin", userInfo);
export const signup = (userInfo) => API.post("/user/signup", userInfo);