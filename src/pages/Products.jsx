import producrs from '../components/FakeApi/Products'
import ProductItem from '../components/ProductItem/ProductItem'

export default function Product(){


    
    

    return(

        

        <div className="Products">
            <ul className="Product-header">
                <li className="product-header_item">Maxsulot</li>
                <li className="product-header_item">Kategoriya</li>
                <li className="product-header_item">Narxi</li>
                <li className="product-header_item">Qo’shimcha</li>
                <li className="product-header_item">ACTION</li>
            </ul>

            <div className="ProductsItem">
                {
                    producrs.map((item) => (
                        <ProductItem item={item} />
                    ))
                }
            </div>
        </div>
    )
}