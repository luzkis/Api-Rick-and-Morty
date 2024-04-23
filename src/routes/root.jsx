import React from "react";
import { Outlet, createBrowserRouter } from "react-router-dom";
import App from "../App";
import Navbar from "../components/Navbar";
import Welcome from "../pages/Welcome";
import ErrorPage from "../pages/ErrorPage";
import Footer from "../components/footer";
import CardDetails from "../components/CardDetails";
 
const NavWrapper = () => {
    return(
    <div>
        <Navbar/>
        <Outlet/>
        <Footer/>
    </div>
    )
}
const router = createBrowserRouter([ 
    { 
      path: "/", 
      element: <NavWrapper/>,
      errorElement:<ErrorPage/>, 
      children: [
          {
            path: "/",  
            element: <App />,
          },
          { 
            path: "welcome",  
            element: <Welcome/>, 
          }, 
          { 
            path: "character/:characterid",  
            element: <CardDetails/>, 
          }, 
      ]
    }, 
    
  ]); 
  export default router;