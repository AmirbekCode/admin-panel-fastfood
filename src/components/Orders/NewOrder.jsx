import { useState } from "react"





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
            {/* <img src={p} alt="" /> */}
            <div className="NewOrderItem">
                <h4 className="titleOrder">
                    {}
                </h4>
                <p className="categoryItem">
                    {}
                </p>
                <div className="bottom-section">
                    <span className="priceOrder">
                        {} UZS
                    </span>                    
                </div>
                <div className="calt">
                    <button onClick={Remove}>-</button>
                    {numberr}
                    <button onClick={Add}>+</button>
                </div>

            </div>
        </div>
    )
}