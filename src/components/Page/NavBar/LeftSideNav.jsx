import { useEffect, useState } from "react";
import LeftSideCard from "./LeftSideCard";


const LeftSideNav = () => {
    const [sideNews, setSideNews] = useState();

    useEffect(()=>{
        fetch('http://localhost:5000/mission')
        .then(res=>res.json())
        .then(data=> setSideNews(data))
    },[])
 
    return (
        <div>
         {
            sideNews?.map(item=><LeftSideCard key={item._id} item={item}></LeftSideCard>)
         }
        </div>
    );
};

export default LeftSideNav;