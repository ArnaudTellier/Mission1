import ServiceListeRedacteurs from "../services/RedacteursAPI"
import { useEffect, useState } from 'react'
import { Link } from "react-router-dom"

const Redacteurs = () => {


    const [redacteurs, setRedacteurs] = useState([])

    const fetchAll = async () => {

        try {
            const _redacteurs = await ServiceListeRedacteurs.getRedacteurs()
            setRedacteurs(_redacteurs)
            console.log(_redacteurs)
            
        } catch (error) {
            console.log(error);
            console.log("Problème avec fetchAll de tous les redacteurs");
        }
    }

    useEffect(() => {
        fetchAll()
    }, [])


    return (
        <>
            <h1>
                Rédacteurs :
            </h1>
            <h2>
                <Link className="bouton_creer" to={'/redacteur/add'}><a className="btn btn-success ms-4 my-2 my-sm-0">Créer un rédacteur</a></Link>
            </h2>
            <ul className="redacteurs-flex">
                {
                    redacteurs.length > 0 ?
                    (redacteurs.map(redacteur => {
                        return (
                            <>
                                
                                <div className="redacteur-flex">
                                    <div className="redacteur-space" key={redacteur.idEmploye}>{redacteur.nom} {redacteur.prenom} </div>
                                    <a className="btn btn-danger ms-4 my-2 my-sm-0">Révoquer </a>
                                    <a className="btn btn-danger ms-4 my-2 my-sm-0">&nbsp;&nbsp;&nbsp;&nbsp;Réinitialiser MDP </a>
                                </div>
                                
                            </>
                        )
                    }))
                    : (
                        <h1>
                            Aucun rédacteur
                        </h1>
                        )
                }
            </ul>
        </>
    )
}

export default Redacteurs