import ServiceListeProduits from "../services/ProduitsAPI"
import { useEffect, useState } from 'react'
import { Link } from "react-router-dom"
import img_cafe_produit from "../images/cafe_mini.jpg"

const Produits = () => {


    const [produits, setProduits] = useState([])

    const fetchAll = async () => {

        try {
            const _produits = await ServiceListeProduits.getProduits()
            setProduits(_produits)
            console.log(_produits);
            
        } catch (error) {
            console.log(error);
            console.log("Problème avec fetchAll de tous les produits");
        }
    }

    useEffect(() => {
        fetchAll()
    }, [])


    return (
        <>
            <h1>
                Produits :
            </h1>
            <ul className="produits">
                {
                    produits.map(produit => {
                        return (
                            <>
                                <div className="produit-flex">
                                    <li className="produit_alt" key={produit.idProduit}><Link className="produit" to={`/produit/${produit.idProduit}`} role="button">{produit.libelleProduit}</Link></li>
                                    <Link to={`/produit/${produit.idProduit}`} role="button"><img className="img_rubrique-article" src={img_cafe_produit} alt="cafe_produit"></img></Link>
                                </div>
                                
                            </>
                        )
                    })
                }
            </ul>
        </>
    )
}

export default Produits