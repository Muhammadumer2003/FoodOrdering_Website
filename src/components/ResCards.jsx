import ItemList from "./ItemList"
import { useState } from "react";

const ResCards=({data,showIndex,setShowIndex})=>{

    const [close,setClose]=useState(true);

  

    const handle=()=>{
        setShowIndex(!showIndex);
     
        
        
        
    }

    
    return(
        <div className="">

        <div onClick={handle} className="px-4 py-1 mx-auto mb-4 w-6/12 bg-gray-100 rounded-lg">
            <div className="flex justify-between">

<span className="font-bold">{data?.title} ({data?.itemCards?.length
})</span>
<span>🔽</span>







</div>


<div className="flex justify-start w-[100%]">
    {  showIndex && <ItemList items={data?.itemCards}/>}
    </div>

   </div>


   </div>

    )

}
export default ResCards;