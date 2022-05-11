import axiosInstance from "../config/axios"


const getProduits = () => {

    return axiosInstance
        .get('/produits')
        .then(response => response.data)
}

const getProduitParID = (idProduit) => {

    return axiosInstance
    .get(`/produit/${idProduit}`)
    .then(response => response.data)
}

const getProduitsParCategorie = (idCategorie) => {
    
    return axiosInstance
    .get(`/produits/categorie/${idCategorie}`)
    .then(response => response.data)
}

const getCategories = () => {
    return axiosInstance
    .get('/categories')
    .then(response => response.data)
}

const getCategorieParID = (idCategorie) => {
    return axiosInstance
    .get(`/categorie/${idCategorie}`)
    .then(response => response.data)
}


export default { getProduits, getProduitParID, getProduitsParCategorie, getCategories, getCategorieParID }