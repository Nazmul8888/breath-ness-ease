import { useEffect, useState } from "react";
import NewsSectionCard from "./NewsSectionCard";


const NewsSection = () => {

     const [news, setNews] = useState([]);
     console.log(news)

     useEffect(()=>{
        fetch('news.json')
        .then(res=> res.json())
        .then(data=> setNews(data))
     },[])
    return (
        <div className=" grid grid-cols-4 gap-10">
           
            {
                news?.map(item=><NewsSectionCard key={item._id} item={item}></NewsSectionCard>)
            }
        </div>
    );
};

export default NewsSection;