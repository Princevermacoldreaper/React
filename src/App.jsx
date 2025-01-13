import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaurentMenu from "./components/RestaurentMenu";
import "../index.css"
//import Grocery from "./components/Grocery";
//import { RouterProvider } from "react-router/dom";
import { createBrowserRouter ,Outlet ,RouterProvider} from "react-router";
// import { BrowserRouter as Router, Route } from 'react-router-dom';
//import { BrowserRouter as Router, Switch, Route } from "react-router-dom/dist/index.js";
const Grocery=lazy(()=>import("./components/Grocery"));
const AppLayout=()=>{
  return (
    <div className="app">
   <Header/>
   <Outlet/> 
    </div>
  )};
  const appRouter=createBrowserRouter([
    {
      path:"/",
      element:<AppLayout/>,
      children:[{
        path:"/",
        element:<Body/>
      },
        {
          path:"about",
          element:<About/>,
        },
        {
          path:"contact",
          element:<Contact/>,
        },
        {
          path:"restaurents/:resId",
          element:<RestaurentMenu/>,
        },
        {
          path:"grocery",
          element:<Suspense fallback={<h1>
            grocery js is loading hold on
          </h1>

          }><Grocery/></Suspense>,
        },
      ],
      errorElement:<Error/>,
    }
    
  ])
const root = ReactDOM.createRoot(document.getElementById('root')); 
 root.render(<RouterProvider router={appRouter}/>);