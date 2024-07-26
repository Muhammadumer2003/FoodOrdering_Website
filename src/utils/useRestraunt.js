import { useState,useEffect} from "react";

const useRestraunt=(resid)=>{
    const [rtm,setrtm]=useState(null)

    useEffect(()=>{
        fetchData();
    },[]);
    const fetchData=async()=>{
        const res=await fetch(`https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=19.0759837&lng=72.8776559&restaurantId=${resid}`);
        const js=await res.json();
        console.log(js.data);
        setrtm(js.data.cards || []);
    }

    return rtm;

}
export default useRestraunt;