import { useEffect, useState } from "react"
import { useParams } from "react-router"
import ServiceListeProduits from "../services/ProduitsAPI"
import { Link } from "react-router-dom"
import img_cafe_produit from "../images/cafe_mini.jpg"

const Categorie = () => {

    let { idCategorie } = useParams();


    const [produits, setProduits] = useState([])
    const [categorie, setCategorie] = useState([])

    const fetchAll = async () => {
        const _produits = await ServiceListeProduits.getProduitsParCategorie(idCategorie)
        setProduits(_produits)
        const _categorie = await ServiceListeProduits.getCategorieParID(idCategorie)
        setCategorie(_categorie)
    }

    useEffect(() => {
        fetchAll()
    }, [])

    return (
        <>
            {
            produits.length > 0 ? 
            (
                <div>
                    <h1>{categorie.libelleCategorie}</h1>
                    <ul className="produits">
                        {
                            produits.map(produit => {
                                return (
                                    <div className="produit-flex">
                                        <li className="produit_alt" key={produit.idProduit}><Link className="produit" to={`/produit/${produit.idProduit}`} role="button">{produit.libelleProduit}</Link></li>
                                        <Link to={`/produit/${produit.idProduit}`} role="button"><img className="img_cafe_mini" src={img_cafe_produit} alt="cafe_produit"></img></Link>
                                    </div>
                                    
                                )
                            })
                        }
                    </ul>
                </div>
            ) : 
            (
            <h1>La catégorie {categorie.libelleCategorie} ne comporte aucun produit</h1>
            )}
        </>
    )
}


export default Categorie