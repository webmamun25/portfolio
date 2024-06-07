
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
import BlogsCard from "../BlogsCard/BlogsCard";
import BlogsDetail from "../BlogsCard/BlogsDetail";
import Addskills from "../Skills/Addskills";
import AddFeedback from "../Testimonial/AddFeedback";
import AddWorks from "../Works/AddWorks";
import Testimonial from "../Testimonial/Testimonial";
import Mail from "../Contact/Mail";





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
        },
        {
          path:'/feedback'
          ,
          element:<AddFeedback></AddFeedback>
        }
        
      
      ]
    },
    {
      path:'/dashboard',
      element:<AdminRoutes><DashboardLayout></DashboardLayout></AdminRoutes> ,
      children:[
        {
          index:true
          ,
          element: <AdminRoutes><Dashboard></Dashboard></AdminRoutes> 
        },
        {
          path:"allblogs"
          ,
          element:<BlogsCard></BlogsCard>
        },
      
        {
          path:"blogs/:id"
          ,
          element:<BlogsDetail></BlogsDetail>,
          loader:({params})=>fetch(`http://localhost:8000/blogs/${params.id}`)
        },
        {
          path:"addskills"
          ,
          element:<Addskills></Addskills>
        },
        {
          path:"addworks"
          ,
          element:<AddWorks></AddWorks>
        },
        {
          path:"testimonial"
          ,
          element:<Testimonial></Testimonial>
        },
        {
          path:"mail"
          ,
          element:<Mail></Mail>
        },
      ]
    }
  ])


export default router