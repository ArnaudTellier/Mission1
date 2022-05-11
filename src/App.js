import './App.css';
import Header from "./components/Header";
import Index from "./pages/Index"
import { BrowserRouter, Link, Routes, Route } from "react-router-dom";
import Categorie from "./pages/Categorie";
import Produits from './pages/Produits';
import Connexion from './pages/Connexion';
import Inscription from './pages/Inscription';
import Produit from './pages/Produit';
import Categories from './pages/Categories';
import Rubriques from './pages/Rubriques';
import Rubrique from './pages/Rubrique';
import Articles from './pages/Articles';
import Article from './pages/Article';
import Redacteurs from './pages/Redacteurs';

function App() {
    return (
        <>
            <div className="App">
                <BrowserRouter>
                    <Header />
                    <Routes>
                        <Route exact path="/" element={<Index />} />
                        <Route exact path="/produits" element={<Produits />} />
                        <Route exact path="/categories" element={<Categories />} />
                        <Route exact path="/rubriques" element={<Rubriques />} />
                        <Route path="/categorie/:idCategorie" element={<Categorie />} />
                        <Route path="/connexion" element={<Connexion />} />
                        <Route path="/inscription" element={<Inscription />} />
                        <Route path="/produit/:id" element={<Produit />} />
                        <Route path="/articles" element={<Articles />} />
                        <Route path="/article/:idArticle" element={<Article />} />
                        <Route path="/rubrique/:idRubrique" element={<Rubrique />} />
                        <Route path="/redacteurs" element={<Redacteurs />} />
                    </Routes>
                </BrowserRouter>
            </div>
        </>
    );
}

export default App;
