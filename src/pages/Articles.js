import { useEffect, useState } from "react"
import ServiceListeArticles from "../services/ArticlesAPI"
import { Link } from "react-router-dom"
import img_article from "../images/article.png"

const Articles = () => {

    const [Articles, setArticles] = useState([])

    const fetchAll = async () => {
        const _Articles = await ServiceListeArticles.getArticles()
        setArticles(_Articles)
    }

    useEffect(() => {
        fetchAll()
    }, [])

    return(
        <>
            <h1>
                Articles :
            </h1>
            <ul className="rubriques-articles">
                {
                    Articles.map(article => {
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
        </>
    )
}

export default Articles