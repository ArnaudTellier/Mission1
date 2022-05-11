import axiosInstance from "../config/axios"

const getRubriques = () => {

    return axiosInstance
        .get('/rubriques')
        .then(response => response.data)
}

const getArticles = () => {

    return axiosInstance
        .get('/articles')
        .then(response => response.data)
}

const getArticle = (idArticle) => {

    return axiosInstance
        .get(`/article/${idArticle}`)
        .then(response => response.data)
}

const getArticlesParRubrique = (idRubrique) => {

    return axiosInstance
        .get(`/articles/rubrique/${idRubrique}`)
        .then(response => response.data)
}

const getRubrique = (idRubrique) => {

    return axiosInstance
        .get(`/rubrique/${idRubrique}`)
        .then(response => response.data)
}

export default { getRubriques , getArticles , getArticlesParRubrique, getArticle, getRubrique }