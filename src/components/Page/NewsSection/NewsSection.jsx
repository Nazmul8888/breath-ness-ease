import { useEffect, useState } from "react";
import NewsSectionCard from "./NewsSectionCard";


const NewsSection = () => {

     const [news, setNews] = useState([]);
     console.log(news)

     useEffect(()=>{
        fetch('http://localhost:5000/news')
        .then(res=> res.json())
        .then(data=> setNews(data))
     },[])
    return (
        <div className=" grid grid-cols-4 gap-10 py-10">
           
            {
                news?.map(item=><NewsSectionCard key={item._id} item={item}></NewsSectionCard>)
            }
        </div>
    );
};

export default NewsSection;