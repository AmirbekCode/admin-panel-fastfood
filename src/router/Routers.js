import {Routes , Route ,Navigate} from 'react-router-dom';
import Login from '../components/Login/Login';
import Card from '../components/Orders/Card';
import Test from '../components/Test/Test';
import Product from '../pages/Products';
function Routers({row , setNav}) {
    return <Routes>
        <Route path='/home' element={<Card row={row}/>} />
        <Route path='/login' element={<Login setNav={setNav} row={row}/>}/>
        <Route path='/product' element={<Product/>} />
    </Routes>;
}

export default Routers;