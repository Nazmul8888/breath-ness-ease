import {
    createBrowserRouter,
    
  } from "react-router-dom";
import LayOut from "../components/Layout/LayOut";
import Home from "../components/Home/Home";
import AboutAsthma from "../components/SharedPage/AboutAsthma/AboutAsthma";
import OurMission from "../components/SharedPage/OurMission/OurMission";
import News from "../components/SharedPage/News/News";
import ContactUs from "../components/SharedPage/ConatctUs/ContactUs";
import OurStory from "../components/Page/OurStory/OurStory";


  export const router = createBrowserRouter([
    {
      path: "/",
      element: <LayOut></LayOut>,
      children: [
        {
            path: '/',
            element: <Home></Home>
        },
        {
          path:'aboutAsthma',
          element:<AboutAsthma></AboutAsthma>
        },
        {
          path: 'ourMission',
          element:<OurMission></OurMission>
        },
        {
          path: 'news',
          element: <News></News>
        },
        {
          path:'contactUs',
          element: <ContactUs></ContactUs>
        },
        {
          path: 'ourStory',
          element:<OurStory></OurStory>
        }
      ]
    },
  ]);