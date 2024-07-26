import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import About from './components/About.jsx'
import Contact from './components/Contact.jsx'
import Error from './components/Error.jsx'
import Body from "./components/Body.jsx"
import ResMenu from './components/ResMenu.jsx';
import Cart from "./components/Cart.jsx"
import "./index.css"

const err=createBrowserRouter([{
  path:"/",
  element:<App/>,
  errorElement:<Error/>,
  children:[
    {
      path:'/',
      element:<Body/>,
      
        
    
    },
    {
      path:"/about",
      element:<About/>
    },
    {
      path:"/contact",
      element:<Contact/>
    },
    {
      path:'/restaurant/:resid',
      element:<ResMenu/>,

  },{
    path: "/cart",
    element:<Cart/>,
  }
  ]


},
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={err}/>
  </React.StrictMode>,
)
