import Textos from "../atoms/Textos.jsx";

function Texto({Textochido}){

    return(
        <>
            {
                Textochido.map(texto1=>(
                    <Textos buttonText={texto1}/>
                     )
                )
            }
        </>
    );
}

export default Texto;