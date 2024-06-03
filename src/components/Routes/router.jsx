
import {
  createBrowserRouter,

} from "react-router-dom";

import Main from "../Layouts/Main";
import Home from "../pages/Home/Home/Home";
import Signin from "../pages/Registrations/Signin";
import Signup from "../pages/Registrations/SIgnup";
import Blogs from "../Blogs/Blogs";

import AdminRoutes from "./AdminRouter";
import { Dashboard } from "../Dashboard/Dashboard";



const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children:[
        {
            path:'/',
            element:<Home></Home>
        },
        {
          path:'/login'
          ,
          element:<Signin></Signin>
        },
        {
          path:'/signup'
          ,
          element:<Signup></Signup>
        },
        {
          path:'/blogs'
          ,
          element:<Blogs></Blogs>
        },
        {
          path:'/dashboard'
          ,
          element: <AdminRoutes><Dashboard></Dashboard></AdminRoutes> 
        },
      
      ]
    },
  ])


export default router