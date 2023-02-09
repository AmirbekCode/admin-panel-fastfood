import {Routes , Route ,Navigate} from 'react-router-dom';
import Card from '../components/Orders/Card';
import Test from '../components/Test/Test';
import Product from '../pages/Products';
function Routers() {
    return <Routes>
        {/* <Route path='' element={Navigate} to='home'/> */}
        <Route path='/' element={<Card/>} />
        <Route path='product' element={<Product/>} />
        {/* <Route path='shop/:id' element={<ProductDetails/>} />
        <Route path='checkout' element={<Checkout/>} />
        <Route path='login' element={<Login/>} />
        <Route path='signup' element={<SignUp/>} /> */}

    </Routes>;
}

export default Routers;