import axios from "axios";

const axiosInstance = axios.create({
    baseURL: "https://healthsynx-backend.vercel.app/",
    withCredentials: true,
})

export default axiosInstance;