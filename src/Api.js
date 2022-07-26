import axios from 'axios';

const api = axios.create({
    baseURL: 'https://api.ziplogi.com/api/'
})

export default api;