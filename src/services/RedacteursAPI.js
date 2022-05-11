import axiosInstance from "../config/axios"


const getRedacteurs = () => {

    return axiosInstance
        .get('/redacteurs')
        .then(response => response.data)
}

const addRedacteur = () => {

    return axiosInstance
    .po(`/redacteur/add`)
    .then(response => response.data)
}


export default { addRedacteur, getRedacteurs }