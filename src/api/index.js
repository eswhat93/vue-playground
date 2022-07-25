import axios from 'axios'

// console.log(import.meta.env)
const instance = axios.create({
    baseURL: import.meta.env.VITE_APP_API_URL_DEPLOYMENT,
    headers :{
        'Content-Type': 'application/json',
    }  
})

function registerUser(userData){
    // const url ="http://localhost:8080/api/signup"
    return instance.post('/api/signup', userData);
}

function loginUser(userData){
    return instance.post('/api/login', userData);
}
export {registerUser, loginUser};