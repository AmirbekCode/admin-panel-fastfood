import rename from '../../assets/icons/rename.svg'
import delet from '../../assets/icons/delet.svg'

export default function ProductItem({item}){
    return(
        <div className="ProductItem">
            <div className="img_name">
                <img className="product-img" src={item.product_img} alt="" />
                <p className="name-info">{item.name_info}</p>
            </div>
            <p className="name">{item.name}</p>
            <p className="price">{item.price}UZS</p>
            <p className="info">{item.info}</p>
            <div className="icons">
                <img src={rename} alt="" />
                <img  src={delet} alt="" />
            </div>
        </div>
    )
}