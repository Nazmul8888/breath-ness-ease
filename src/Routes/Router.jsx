import {
    createBrowserRouter,
    
  } from "react-router-dom";
import LayOut from "../components/Layout/LayOut";
import Home from "../components/Home/Home";


  export const router = createBrowserRouter([
    {
      path: "/",
      element: <LayOut></LayOut>,
      children: [
        {
            path: '/',
            element: <Home></Home>
        }
      ]
    },
  ]);