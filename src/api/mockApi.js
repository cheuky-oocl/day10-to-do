import axios from "axios";
import {message} from "antd";

const api = axios.create({
    baseURL: "https://68c7ac8e5d8d9f51473287a1.mockapi.io/",
    headers: {"Content-Type": "application/json"},
    timeout: 10_000
})

api.interceptors.response.use(
    (response) => {
        return response;
    },
    (error) => {
        const {status, data} = error.response;
        if (status === 404){
            message.error(error.message, 10_000).then(r => {});
        }
        return Promise.reject(error);
    }
);

export {api}