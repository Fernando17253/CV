import "../../assets/styles/Button.css"
function Button({buttonText}) {
    return(
        <button className={"uselessButton"}>{buttonText.name}</button>
    )
}

export default Button;