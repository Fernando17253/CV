import "../../assets/styles/MainMenu.css";
import Presentacion from "../../assets/images/Presentacion.jpg";
import ButtonLayout from "../molecules/ButtonLayout.jsx";
import Subtitle from "../atoms/Subtitle.jsx";

function MainMenu() {

    const ap = [
        {name: <h2>Desarrollo de software</h2>},
        {name: <h2>Desarrollo de diseño</h2>},
        {name: <h2>Software de gestion de base de datos</h2>}
    ]

    return(

        <div className="MenuDisplay">
                <aside>
                    <img src={Presentacion}/>
                    <Subtitle robotoText={"Aptitudes:"}/>
                    <ButtonLayout ButtonAmmount={ap}/>
                    
                </aside>
        </div>

    )
}

export default MainMenu;