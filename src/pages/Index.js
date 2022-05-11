import img_cafe_accueil from "../images/cafe_accueil.jpg"
import InstanceAxios from "../config/axios"

const Index = () => {
    return (
        <>
            <div className="App-accueil">
                <div className="flex_accueil">
                    <div className="img_texte_accueil" >
                        <img className="image-accueil" src={img_cafe_accueil} alt="café accueil" />
                        <div className="texte_centrer">TORRÉFACTION ARTISANALE</div>
                    </div>
                    {/* <div>
                        <div>
                            <h3 className="texte_centrer_2 texte">Café</h3>
                            <img className="img_cafe" src={img_cafe} alt="café" />
                        </div>
                        <div>
                            <h3 className="texte_centrer_3 texte">Thé</h3>
                            <img className="img_the" src={img_the} alt="thé" />
                        </div>
                    </div> */}
                </div>
            </div>
        </>
    )
}

export default Index