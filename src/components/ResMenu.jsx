import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useRestraunt from "../utils/useRestraunt";
import Shammer from "./Shammer";
import ResCards from "./ResCards"

const ResMenu=()=>{
   const [showIndex,setShowIndex]=useState(0);

    const {resid}=useParams();

    const rtm=useRestraunt(resid);

    if(rtm===null){
        return <Shammer/>
    }

    const category=rtm[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter((c)=>{
       return  c?.card?.card?.['@type']==="type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    });

    
   
    return (
        <div>
           <h1 className="mt-5 text-2xl font-bold text-center">{rtm[2]?.card?.card?.info?.name}</h1>
           <p className="mt-2 text-xs text-center text-gray-400">{rtm[2]?.card?.card?.info?.cuisines.join(',')}</p>
           <div>
           <br/>

            
                
                {category.map((i,index)=><ResCards
                 data={i?.card?.card}
                showIndex={index===showIndex?true:false}
                 setShowIndex={()=>setShowIndex(index)}
                  />)}
           
       

           
           {/* {
           (rtm[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards!=null ) ?  (rtm[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards.map(i=><li>{(i?.card?.info?.name)?(i?.card?.info?.name):<h2>WArgya</h2>}---{(i?.card?.info?.defaultPrice)?((i?.card?.info?.defaultPrice)/100):((i?.card?.info?.price)/100)
}</li> ) ) :  (rtm[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards.map(i=><li>{(i?.card?.info?.name)?(i?.card?.info?.name):<h2>WArgya</h2>}---{(i?.card?.info?.defaultPrice)?((i?.card?.info?.defaultPrice)/100):((i?.card?.info?.price)/100)
}</li> ) )
} */}
           </div>
        </div>
    )
}
export default ResMenu;