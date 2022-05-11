import { useEffect, useState } from "react"
import { useParams } from "react-router"
import ServiceListeArticles from "../services/ArticlesAPI"
import { Link } from "react-router-dom"
import img_article from "../images/article.png"

const Article = () => {

    let { idArticle } = useParams();

    const [Article, setArticle] = useState([])

    const fetchAll = async () => {
        const _Article = await ServiceListeArticles.getArticle(idArticle)
        setArticle(_Article)
    }

    useEffect(() => {
        fetchAll()
    }, [])

    return(
        <>
            <div className="rubrique-article-flex">
                <h2>
                    {Article.titre}
                </h2>
                <img className="img_rubrique-article_2" src={img_article} alt="article image"></img>
                <div>{Article.contenu}</div>
            </div>
        </> 
    )
}

export default Article