import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
// import banner1 from '../../../assets/bnner/banner-1.jpg'
import banner2 from '../../../assets/bnner/banner-2.jpg'
import banner3 from '../../../assets/bnner/banner-3.jpg'
import banner4 from '../../../assets/bnner/banner-4.jpg'

const Banner = () => {
    return (
        <div  >
            <Carousel  >
                
                <div>
                    <img  src={banner2} />
                    
                </div>
                <div>
                    <img  src={banner3} />
                    
                </div>
                <div>
                    <img  src={banner4} />
                    
                </div>
            </Carousel>
        </div>
    );
};

export default Banner;