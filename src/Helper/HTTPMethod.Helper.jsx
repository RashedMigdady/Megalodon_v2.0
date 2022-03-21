const { default: axios } = require("axios");
 
export const HTTPServices = {
    get: axios.get,
    post: axios.post,
    put: axios.put,
    delete:axios.delete,
}

const token = localStorage.getItem("token");
 export const serverAddress = "http://localhost:5000";

export const Auth = {Headers: {Authorization: `Bearer ${token}`}};

