
import moment from 'moment';
import { Link } from 'react-scroll';

const LeftSideCard = ({item}) => {
    const {title, details,_id} = item;
    return (
        <div className='  mt-14' > 
        <h5 className=' text-xl font-bold ' >{title}</h5>
            <p className=' font-bold text-red-700'>{moment().format("dddd, MMMM Do YYYY, h:mm:ss a") }</p>
      
        
            {
            details.length >200 ? <p>{details.slice(0,200)} <Link to={`/news/${_id}`} className='text-blue-600 font-bold'>Read More....</Link></p>
            : <p>{details}</p>
            
          }
        
    </div>
        // </div>
    );
};

export default LeftSideCard;