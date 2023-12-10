import NewsSection from "../Page/NewsSection/NewsSection";

import VideoNews from "../Page/VideoNews/VideoNews";
import Banner from "./Banner/Banner";


const Home = () => {
    return (
        <div>
          <Banner></Banner>
          <NewsSection></NewsSection>
          <VideoNews></VideoNews>
      
        </div>
    );
};

export default Home;