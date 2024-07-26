import { React, useContext, useEffect, useState } from 'react';
import Restaurant from './Restaurant';
import Shammer from './Shammer';
import { Link } from 'react-router-dom';
import useOnlineStatus from '../utils/useOnlineStatus';
import {Res} from "./Restaurant";
import { USerContext } from '../utils/UserContex';
const Body = () => {
  const [res, setRes] = useState([]);
  const [searchText, setSearchText] = useState('');
  const [fitter, setFitter] = useState([]);
  const PromotedRes=Res(Restaurant);
  const {loggedInUser,setUser}=useContext(USerContext);

  useEffect(() => {
    fetchData();
  }, []);
  
  

  const fetchData = async () => {
    try {
      const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.0759837&lng=72.8776559&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
      const json = await data.json();
      const restaurants = json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants;

      console.log(restaurants);

      if (restaurants) {
        setRes(restaurants);
        setFitter(restaurants);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const onlineStatus = useOnlineStatus();
  if (onlineStatus === false) {
    return <h1>You are offline, check your Internet</h1>;
  }

  const handleSearch = () => {
    const filtered = res.filter((r) =>
      r.info.name.toLowerCase().includes(searchText.toLowerCase())
    );
    setFitter(filtered);
  };

  const handleFilter = () => {
    const filtered = res.filter((r) => r.info.avgRating > 4.0);
    setFitter(filtered);
    
  };

  return res.length === 0 ? <Shammer /> : (
    <>
      <div>
        <div className='flex gap-4 p-4'>
          <div className='flex gap-4'>
            <input
            className='mt-1 w-56 h-10 text-center rounded-md border border-black border-solid' 
              type='text'
              value={searchText}
              placeholder='Search for restaurant'
              onChange={(e) => setSearchText(e.target.value)}
            />
            <input
             className='mt-1 w-56 h-10 text-center rounded-md border border-black border-solid'
             value={loggedInUser}
             onChange={(e)=>setUser(e.target.value)}
            />
            <button className='px-3 py-2 bg-green-100 rounded-lg' onClick={handleSearch}>Search</button>
          </div>
          <button className='px-3 py-2 bg-green-100 rounded-lg' onClick={handleFilter}>Filter Button</button>
        </div>
      
          <div className='flex flex-wrap gap-4'>
            {fitter.map((i) => (
              <Link key={i.info.id} to={'/restaurant/' + i.info.id}>
                {(i.info.avgRating>4.0)?(
                  <PromotedRes resdata={i}/>
                ) :(
                  <Restaurant resdata={i} />
                )}
               
              </Link>
            ))}
         S
        </div>
      </div>
    </>
  );
};

export default Body;
