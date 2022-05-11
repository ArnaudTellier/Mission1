import { useEffect, useState } from "react"
import ServiceListeRubriques from "../services/ArticlesAPI"
import { Link } from "react-router-dom"
import img_article from "../images/article.png"

const Rubriques = () => {

    const [rubriques, setRubriques] = useState([])

    const fetchAll = async () => {
        const _rubriques = await ServiceListeRubriques.getRubriques()
        setRubriques(_rubriques)
    }

    useEffect(() => {
        fetchAll()
    }, [])

    return(
        <>
            <h1>
                Rubriques :
            </h1>
            <ul className="rubriques-articles">
                {
                    rubriques.map(rubrique => {
                        return (
                            <>
                            <div className="rubrique-article-flex">
                                <li className="rubrique-article_alt" key={rubrique.$idRubrique}><Link className="rubrique-article" to={`/rubrique/${rubrique.idRubrique}`} role="button">{rubrique.titre}</Link></li>
                                <Link to={`/rubrique/${rubrique.idRubrique}`} role="button"><img className="img_rubrique-article" src={img_article} alt="rubrique-article image"></img></Link>
                            </div>
                            </>
                        )
                    })
                }
            </ul>
        </>
    )
}

export default Rubriques