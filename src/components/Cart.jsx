import { clearCart } from "../utils/cartSlice";
import ItemList from "./ItemList";
import { useDispatch, useSelector } from 'react-redux';

const Cart=()=>{
    const select=useSelector((store)=>store.cart.items);
    const dispatch=useDispatch()
    const handleClick=()=>{
      dispatch(clearCart());

    }
    return (
        <div className="m-auto text-center">
          <div>
            <button onClick={handleClick}>Clear cart</button>
          </div>
          {select.length===0?<h1>Cart is Empty</h1>:<ItemList items={select}/>}  
        </div>

    )

}
export default Cart;