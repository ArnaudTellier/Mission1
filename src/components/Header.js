import logo from "../images/logo_afterwork.jpg"

const Header = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                    <img className="App-logo" alt="logo" src={logo} href="/" />
                    <a className="navbar-brand App-name App-name-hover" href="/">AfterWork</a>
                    <div className="collapse navbar-collapse" id="navbarColor02">
                        <ul className="navbar-nav me-auto">
                            <li className="nav-item nav-item-hover">
                                <a className="nav-link active" href="/produits">Produits</a>
                            </li>
                            <li className="nav-item nav-item-hover espace">
                                <a className="nav-link active" href="/categories">Catégories</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/articles">Articles</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/rubriques">Rubriques</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/redacteurs">Rédacteurs</a>
                            </li>
                        </ul>
                        <a className="btn btn-success ms-4 my-2 my-sm-0">Newsletter</a>
                        <a className="btn btn-primary ms-4 my-2 my-sm-0" href="/connexion">Connexion</a>
                        <a className="btn btn-info ms-1 my-2 my-sm-0" href="/inscription">S'inscrire</a>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Header