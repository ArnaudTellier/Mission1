import { useEffect, useState } from "react"
import { useParams } from "react-router"
import ServiceListeRubriques from "../services/ArticlesAPI"
import { Link } from "react-router-dom"
import img_article from "../images/article.png"

const Rubrique = () => {

    let { idRubrique } = useParams();

    const [rubrique, setRubrique] = useState([])
    const [articles, setArticles] = useState([])

    const fetchAll = async () => {
        const _rubrique = await ServiceListeRubriques.getRubrique(idRubrique)
        setRubrique(_rubrique)
        const _articles = await ServiceListeRubriques.getArticlesParRubrique(idRubrique)
        setArticles(_articles)
    }

    useEffect(() => {
        fetchAll()
    }, [])

    return(
        <>
            {
            articles.length > 0 ?
            (
                <div>
                    <h1>
                        {rubrique.titre}
                    </h1>
                    <ul className="rubriques-articles">
                    {
                    articles.map(article => {
                        return (
                            <>
                            <div className="rubrique-article-flex">
                                <li className="rubrique-article_alt" key={article.$idArticle}><Link className="rubrique-article" to={`/article/${article.idArticle}`} role="button">{article.titre}</Link></li>
                                <Link to={`/article/${article.idArticle}`} role="button"><img className="img_rubrique-article" src={img_article} alt="rubrique-article image"></img></Link>
                            </div>
                            </>
                        )
                    })
                }
            </ul>
                </div>
            
            ) :
            (
            <h1>
                La rubrique {rubrique.titre} n'a pas d'articles
            </h1>
            )
            }
        </>
    )
}

export default Rubrique