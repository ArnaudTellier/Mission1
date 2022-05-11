import { useState, useEffect } from "react"
import { useParams } from "react-router"
import ServiceListeProduits from "../services/ProduitsAPI"
import img_cafe_produit from "../images/cafe_mini.jpg"

const Produit = () => {

    
    let { id } = useParams();

    const [produit, setProduit] = useState([])

    const fetch = async () => {

        try {
            const _produit = await ServiceListeProduits.getProduitParID(id)
            setProduit(_produit)
            console.log(_produit);
            
        } catch (error) {
            console.log(error);
            console.log("Problème avec fetch");
        }
    }

    useEffect(() => {
        fetch()
    }, [])

    return(
        <>
            <div className="produit-flex">
                <h2>{produit.libelleProduit}</h2>
                <img className="img_cafe_mini_2" src={img_cafe_produit} alt="cafe_produit"></img>
                <div>{produit.descriptionProduit}</div>
                <div>Prix HT : {produit.prixUnitaireHt} €</div>
            </div>
        </>
    )

}

export default Produit