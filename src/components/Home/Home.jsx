import NewsSectionCard from "../Page/NewsSection/NewsSectionCard";
import VideoNews from "../Page/VideoNews/VideoNews";
import Banner from "./Banner/Banner";


const Home = () => {
    return (
        <div>
          <Banner></Banner>
          <NewsSectionCard></NewsSectionCard>
          <VideoNews></VideoNews>
        </div>
    );
};

export default Home;