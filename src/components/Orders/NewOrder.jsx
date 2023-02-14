import { Button } from "@chakra-ui/react"
import { useState } from "react"
import Burger from '../../assets/images/Burger.png'




export default function NewOrder() {

    const [numberr , setNumber] = useState(0)

function Add(){
    setNumber(numberr + 1)
}
function Remove(){
    setNumber(numberr - 1)
    if (numberr <= 0) {
        setNumber(0)
    }
}
    return(
        <div className="CardOrder">
            <img src={Burger} className="ImgOrder" />
            <div className="NewOrderItem">
                <h4 className="titleOrder">
                    Big Burger
                </h4>
                <p className="categoryItem">
                    Mozoli karoche
                </p>
                <div className="bottom-section">
                    <span className="priceOrder">
                        67.000   UZS
                    </span>                    
                
                <div className="calt">
                    <Button onClick={Remove}>-</Button>
                    {numberr}
                    <Button onClick={Add}>+</Button>
                </div>
                </div>
            </div>
        </div>
    )
}