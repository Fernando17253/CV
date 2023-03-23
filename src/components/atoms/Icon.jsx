import "../../assets/styles/Icon.css"

function Icon({icon}){
    return(
        <>
            <button className={"IconButton"}>
                <img src={icon}/>
            </button>
        </>
    )
}

export default Icon;