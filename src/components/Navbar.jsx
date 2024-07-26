import {React, useContext, useState} from 'react'
import {Link} from 'react-router-dom'


import useOnlineStatus from '../utils/useOnlineStatus';
import { USerContext } from '../utils/UserContex';
import { useSelector } from 'react-redux';

const Navbar=()=>{
    const[btn,setbtn]= useState("Login");
    const onlineStatus=useOnlineStatus();
    const {loggedInUser}=useContext(USerContext);
    const cart=useSelector((store)=>store.cart.items);
    console.log(cart);
    return (
        <>
        <div className='flex sticky justify-between items-center px-6 py-2 border-2 shadow-lg'>
            <div className='w-36'>
                <img alt='res-logo' src='https://logolook.net/wp-content/uploads/2023/11/Foodpanda-Logo.png' />
            </div>
            <ul className='flex gap-10 items-center text-2xl'>
                <li>OnlineStatus:{onlineStatus? "✔" : "🎈"   }</li>
                <li><Link to={'/'}>Home</Link></li>
                <li><Link to={'/about'}>About Us</Link></li>
                <li><Link to={'/contact'}>Contact Us</Link></li>
                <li className='font-bold'><Link to={'/cart'}>Cart-({cart.length} items)</Link></li>
                <div className='px-2 py-2 text-center rounded-xl border-2 border-sky-500 border-solid' onClick={()=>{
                   btn==='login'?setbtn("Logout"):setbtn("login")
                  
                }}>{btn}</div>
                 <li>{loggedInUser}</li>
            </ul>
            
        </div>
        </>

    )
}
export default Navbar