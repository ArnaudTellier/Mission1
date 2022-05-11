import axiosInstance from "../config/axios";
import jwtDecode from "jwt-decode"

const register = (username,password,firstname,lastname) => {
    return axiosInstance
        .post("/register", {"username":username,"password":password,"firstname":firstname,"lastname":lastname})
}

const logIn = (username,password) => {
    return axiosInstance
        .post("/login_check",{
            username: 'username',
            password: 'password'
        })
        .then(response => response.data.token)      
}

const logOut = () => {
    localStorage.removeItem("token");
}


const isAuthenticated = () => {
    const token = localStorage.getItem("token");
    if (token) {
        const payload = jwtDecode(token);
        return payload.exp * 1000 > new Date().getTime();
    }
    return false;
}

const getPayload = () => {
    return jwtDecode(localStorage.getItem("token"))
}



export default { logIn, logOut, isAuthenticated, register };