import { useEffect, useState } from "react";
import NewsCard from "./NewsCard";
import RightSideNav from "../../Page/NavBar/RightSideNav";
import LeftSideNav from "../../Page/NavBar/LeftSideNav";


const News = () => {
    const [news, setNews] = useState();

    useEffect(()=>{
        fetch ('http://localhost:5000/mission')
        .then(res=>res.json())
        .then(data=>setNews(data))
    },[])
    return (
        <div className="grid grid-cols-3 md:grid-cols-4 gap-6">
           
             <div >
            {
                news?.map(item=><NewsCard key={item._id} item={item}></NewsCard>)
            }
            </div>
            <div >
            <LeftSideNav></LeftSideNav>
            </div>
            <div>
                <RightSideNav></RightSideNav>
            </div>
        
        </div>
    );
};

export default News;