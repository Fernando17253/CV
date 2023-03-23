import "../../assets/styles/Textos.css"
function Textos({eltexto}) {
    return(
        <text className={"usartexto"}>{eltexto.name}</text>
    )
}

export default Textos;