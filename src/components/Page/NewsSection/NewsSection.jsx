import { useEffect, useState } from "react";
import NewsSectionCard from "./NewsSectionCard";


const NewsSection = () => {

     const [news, setNews] = useState([]);

     useEffect(()=>{
        fetch('news.json')
        .then(res=> res.json())
        .then(data=> setNews(data))
     },[])
    return (
        <div>
            {
                news?.map(item=><NewsSectionCard key={item._id} aNews={item}></NewsSectionCard>)
            }
        </div>
    );
};

export default NewsSection;