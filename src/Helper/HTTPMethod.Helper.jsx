// const { default: axios } = require("axios");
import axios from 'axios';
export const HTTPServices = {
    get: axios.get,
    post: axios.post,
    put: axios.put,
    delete: axios.delete,
}
export const token = localStorage.getItem('token');
export const serverAddress = 'https://megalodon.onrender.com';
// export const serverAddress = 'http://localhost:5000';

export const ipApiKey = '960ddc85-3af5-4d4d-b1ba-d3344da70379'

export const Auth = { headers: { Authorization: `Bearer ${token.ipData ==  fetch(`https://ipfind.co/?ip=46.185.161.162&auth=${ipApiKey}`)}` } };

