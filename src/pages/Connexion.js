import React, {useState} from "react";
import AuthAPI from "../services/AuthAPI";

const Connexion = (history) => {

    // State pour le username et le mot de passe
    const[username,setUsername] = useState();
    const[password,setPassword] = useState();

    // Soumission du formulaire
    const handleSubmit = async e => {
        
        e.preventDefault();
        
        const token = await AuthAPI.logIn(username,password);
        localStorage.setItem("token",token);
    }

    return(
        <>
        <div className="container">
        <h1>Connexion :</h1>
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="username"
                       className="form-label">Username </label>
                <input
                       className="form-control"
                       placeholder="Saisir votre email"
                       id="username"
                       value={username}
                       onChange={e => setUsername(e.target.value)}/>
            </div>
            <div className="mb-3">
                <label htmlFor="password"
                       className="form-label">Mot de passe </label>
                <input type="password"
                       className="form-control"
                       placeholder="Saisir votre mot de passe"
                       id="password"
                       value={password}
                       onChange={e => setPassword(e.target.value)}/>
            </div>
            <button type="submit" className="btn btn-primary">Connexion</button>
        </form>
        </div>
        </>
    )
}

export default Connexion