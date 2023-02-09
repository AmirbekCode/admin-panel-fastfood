import CardDetails from './CardDetails'
import { useState , useEffect} from 'react';
import './Card.css'
import axios from 'axios';
function Card({data , row}) {

    const [state, setState] = useState([]);
    useEffect(() => {
        get();
    }, []);

    async function get() {
        try {
            return await axios.get("https://jsonplaceholder.typicode.com/users").then((res) => setState(res.data));
        } catch (e) {
            console.log(e);
        }
    }

    return ( 
        <div className="CardTem">
            {
                state.map((item, index)=>(
                    <CardDetails row={row} setState={setState} state={state} item={item} key={index}/>
                ))                
            }
        </div>

     );
}

export default Card;