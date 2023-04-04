import axios from "axios";

// set config default when creating instance
const instance = axios.create({
    baseURL: 'http://localhost:8000'
});

// use interceptor to add token authorization header
instance.interceptors.request.use((config) => {
    const token = localStorage.getItem('token');
    if(token){
        config.headers.Authorization = `Bearer ${token}`
    }
    else{
        return config
    }
});

export default instance;

