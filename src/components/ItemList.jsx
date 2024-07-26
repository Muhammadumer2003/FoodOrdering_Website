import { useDispatch } from "react-redux";
import { addItems } from "../utils/cartSlice";

const ItemList=({items})=>{
    const dispatch=useDispatch();
    const handleclick=(i)=>{
        dispatch((addItems(i)));

    }
    console.log(dispatch)
    return(
        <>
        <div>
            {items.map((i)=><div key={i?.card?.info?.id} className="mt-4 w-[100%] border-b-4">
                
                <div>
                <span className="text-sm font-bold ">{i?.card?.info?.name}</span>
                <span className="text-xs font-bold">-- ₹{i?.card?.info?.price ? i?.card?.info?.price/100 :i?.card?.info?.defaultPrice/100 }</span>
                </div>

                <div className="mb-4 text-xs">
                {i?.card?.info?.description}
                </div>
                <button className="p-2 border border-solid"
                onClick={()=>handleclick(i)}>Add+</button>

                </div>)}
              
        </div>
        </>

    )
}
export default ItemList;