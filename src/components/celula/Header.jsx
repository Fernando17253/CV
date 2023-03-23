import "/src/assets/styles/Header.css"
import Subtitle from "../atoms/Subtitle.jsx";
import Icon from "../atoms/Icon.jsx";
import Email from "../../assets/images/email.jpg"
import Localizacion from "../../assets/images/localizacion.jpg"
import Telefono from "../../assets/images/telefono.png"

function Header() {

    return(

        <>
            <header className={"MainHeader"}>
                <Subtitle robotoText={"José Fernando Durán Villatoro"}/>
                <div 
                className="icons">
                    <a  className="icons" href={"ericvilla1975@gmail.com"}><Icon icon={Email}/></a>
                    <a className="icons" href={"https://goo.gl/maps/hnXpJH2MgwcGV4Zr7"}><Icon icon={Localizacion}/></a>
                    <a className="icons" href={"tel: 9181223798"}><Icon icon={Telefono}/></a>
                    </div>
                    
                <Subtitle robotoText={"Desarrollador de software FullStack"}/>
            </header>
        </>

    )

}

export default Header;