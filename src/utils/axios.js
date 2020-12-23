import axios from 'axios';

const instance = axios.create({
    baseURL: "https://localhost:44334"
})

export default instance;