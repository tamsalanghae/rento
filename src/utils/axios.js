import axios from 'axios';

const instance = axios.create({
    baseURL: "https://172.16.1.106:44334"
})

export default instance;