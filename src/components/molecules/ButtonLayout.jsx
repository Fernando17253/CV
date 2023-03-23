import Button from "../atoms/Button.jsx";
import "../../assets/styles/ButtonDisposition.css"

function ButtonLayout({ButtonAmmount}){

    return(
        <>
            {
                ButtonAmmount.map(buttonTitle=>(
                    <Button buttonText={buttonTitle}/>
                     )
                )
            }
        </>
    );
}

export default ButtonLayout;