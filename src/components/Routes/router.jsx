
import {
  createBrowserRouter,

} from "react-router-dom";

import Main from "../Layouts/Main";
import Home from "../pages/Home/Home/Home";
import Signin from "../pages/Registrations/Signin";

import Blogs from "../Blogs/Blogs";

import AdminRoutes from "./AdminRouter";

import DashboardLayout from "../Layouts/DashboardLayout";
import { Dashboard } from "../Dashboard/Dashboard/Dashboard";

import Register from "../pages/Registrations/Register";





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
          path:'/register',
          element:<Register></Register>
        },
        {
          path:'/blogs'
          ,
          element:<Blogs></Blogs>
        }
        
      
      ]
    },
    {
      path:'/dashboard',
      element:<DashboardLayout></DashboardLayout>,
      children:[
        {
          index:true
          ,
          element: <AdminRoutes><Dashboard></Dashboard></AdminRoutes> 
        },
      ]
    }
  ])


export default router