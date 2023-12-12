// import moment from 'moment';


const NewsCard = ({ item }) => {
  const {image} = item;
  return (
    <div className=" py-10" >
      
    <img className="w-[250px] h-[130px] ml-20  " src={image} alt="" />
    </div>
  );
};

export default NewsCard;
