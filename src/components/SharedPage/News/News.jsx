import { useEffect, useState } from "react";
import NewsCard from "./NewsCard";


const News = () => {
    const [news, setNews] = useState();

    useEffect(()=>{
        fetch ('mission.json')
        .then(res=>res.json())
        .then(data=>setNews(data))
    },[])
    return (
        <div>
            {
                news?.map(item=><NewsCard key={item._id} item={item}></NewsCard>)
            }
        </div>
    );
};

export default News;