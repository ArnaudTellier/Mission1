import React, {useState} from "react";
import AuthAPI from "../services/AuthAPI";
import App from "../App"

const Inscription = (history) => {

    // State pour le username et le mot de passe
    const[username,setUsername] = useState("");
    const[password,setPassword] = useState("");
    const[firstname,setFirstname] = useState("");
    const[lastname,setLastname] = useState("");

    // Soumission du formulaire
    const handleSubmit = async e => {
        e.preventDefault();
        await AuthAPI.register(username,password,firstname,lastname)
    }

    return(
        <div className="container">
            <h1>Inscription :</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="username"
                           className="form-label">Username </label>
                    <input type="email"
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
                <div className="mb-3">
                    <label htmlFor="firstname"
                           className="form-label">Firstname </label>
                    <input type="text"
                           className="form-control"
                           placeholder="Saisir votre prénom"
                           id="firstname"
                           value={firstname}
                           onChange={e => setFirstname(e.target.value)}/>
                </div>
                <div className="mb-3">
                    <label htmlFor="lastname"
                           className="form-label">Lastname </label>
                    <input type="text"
                           className="form-control"
                           placeholder="Saisir votre nom"
                           id="lastname"
                           value={lastname}
                           onChange={e => setLastname(e.target.value)}/>
                </div>
                <button type="submit" className="btn btn-primary">S'inscrire</button>
            </form>
        </div>
    )
}

export default Inscription;