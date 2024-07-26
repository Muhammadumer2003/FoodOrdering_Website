import { useState,useEffect } from "react";

const useOnlineStatus=()=>{
    const [onlineStatus,setOnline]=useState(true);



    useEffect(()=>{
        window.addEventListener("offline",()=>{
            setOnline(false);
        });
    
        window.addEventListener("online",()=>{
            setOnline(true);
        });
    

    },[]);

   


    return onlineStatus;
}
export default useOnlineStatus;