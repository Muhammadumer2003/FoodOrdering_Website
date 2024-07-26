 
import Navbar from './components/Navbar'

import { Outlet } from 'react-router-dom'
import { USerContext } from './utils/UserContex'
import { useEffect, useState } from 'react'
import { Provider } from 'react-redux'
import appStore from "./utils/appStore"

function App() {


  useEffect(()=>{
    const data={
      name:"uzair",}
      setUser(data.name)
  },[])

  const[user,setUser]=useState();


  return (
    <>
    <Provider store={appStore}>
    <USerContext.Provider value={{loggedInUser:user,setUser}} >
    <Navbar/>
    <Outlet/>
    </USerContext.Provider>
    </Provider>
     
    </>
  )
}

export default App
