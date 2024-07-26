import {React, useContext} from 'react'
import { expose } from '../swaggy';
import { USerContext } from '../utils/UserContex';

 const Restaurant=(props)=>{
    const{resdata}=props;
    const{loggedInUser}=useContext(USerContext);
    return(
        <>
        <div className='bg-gray-100 p-2 rounded-xl w-[250px] truncate'>
        <img alt='biryani' className='w-[250px] rounded-xl' src={'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_366/'+ resdata.info.cloudinaryImageId }/>
        <h4 >{resdata.info.name}</h4>
<p className='text-sm'>{resdata.info.cuisines.join(',')}</p>
        <p className='o'>{resdata.info.avgRating}</p>
        <p className='o'>{resdata.info.sla.deliveryTime} minutes</p></div>
        <p>{loggedInUser}</p>
        </>
 
    )
}

export const Res=(Restaurant)=>{
    return(props)=>{
        return(
            <>
            <label className='absolute p-2 m-2 text-white bg-black rounded-lg'>Promoted</label>
            <Restaurant {...props}/>
            </>

        )
    }
}
export default Restaurant