import Subtitle from "../atoms/Subtitle.jsx";
import "../../assets/styles/Body.css"
import MainMenu from "./MainMenu.jsx";
import Text from "./Text.jsx";

function Body() {

    const ResumenProfesional = "Estudiante de área de conocimiento con un gran interés en seguir aprendiendo cada vez más." +
        " Tengo gran capacidad para adaptarme a todotipo de entornos y portar simpre lo mejor de mi." + 
        " Me caracterizo por mi facilidad para el trabajo en equipo y mi entusiasmo en aprender y desarrollar mis habilidades."+
        " En busca de una oportunidad laboral en la que adquirir más experiencia.";

    const Formación = "Universidad Politécnica de Chiapas - Suchiapas, CHP" ;

    const HistorialLaboral = "Ingeniero de desarrollo de software";
    const HistorialLaboral2 = "Politécnica de Chiapas - Tuxtla Gutiérrez, Chiapas";
    const HistorialLaboral3 = "*Cumplimiento de requerimientos y metodologias de software, y control y garantia de la calidad.";
    const HistorialLaboral4 = "*Creación y desarrollo de programas o de sistemas, mantenimiento de los existentes y actualización.";

    const historialaboral = [
        {name: <h2>Desarrollo de software</h2>},
        {name: <h2>Desarrollo de diseño</h2>},
        {name: <h2>Software de gestion de base de datos</h2>},
        {name: <h2>Software de gestion de base de datos</h2>}
    ]

    return(

        <div className= "DisplayedInfo">
            <MainMenu/>
            <main>
                <Subtitle  robotoText={"Resumen Profesional:"}/>
                <Text text={ResumenProfesional}/>
                <Subtitle  robotoText={"Formación"}/>
                <Text text={Formación}/>
                
                
                <Subtitle robotoText={"Historial Laboral"}/>
                <Text text={HistorialLaboral}/>
                <Text text={HistorialLaboral2}/>
                <Text text={HistorialLaboral3}/>
                <Text text={HistorialLaboral4}/>
                
                {/*<Texto Textochido={historialaboral}/>*/}

            </main>
        </div>
    );
}

export default Body;