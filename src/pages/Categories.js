import ServiceListeProduits from "../services/ProduitsAPI"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import img_cafe_produit from "../images/cafe_mini.jpg"

const Categories = () => {

    const [categories, setCategories] = useState([])

    const fetchAll = async () => {
        try {
            const _categories = await ServiceListeProduits.getCategories()
            setCategories(_categories)
            console.log(_categories);
        } catch (error) {
            console.log(error);
            console.log("Problème avec fetchAll de toutes les categories");
        }
        
    }

    useEffect(() => {
        fetchAll()
    }, [])

    return (
        <>
            
            <h1>Catégories :</h1>
            <ul className="categories">
                {
                    categories.map(categorie => {
                        return (
                            <>
                                <div className="categorie-flex">
                                    <li className="categorie_alt" key={categorie.idCategorie}><Link className="categorie" to={`/categorie/${categorie.idCategorie}`} role="button">{categorie.libelleCategorie}</Link></li>
                                    <Link to={`/categorie/${categorie.idCategorie}`} role="button"><img className="img_cafe_mini" src={img_cafe_produit} alt="categorie"></img></Link>
                                </div>
                            </>
                            
                        )   
                    })
                }
            </ul>
        </>
    )
}


export default Categories 