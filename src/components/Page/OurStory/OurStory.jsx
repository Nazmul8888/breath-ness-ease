import { Parallax } from 'react-parallax';
import img from '../../../assets/bnner/ourstory.jpg'
import itemImg from '../../../assets/bnner/item-1-2.png'
const OurStory = () => {
    return (
       <div>
    <Parallax blur={{ min: -10, max: 15 }}
        bgImage={img}
        bgImageAlt="the story"
        strength={-200}>
    <h1 className=' text-6xl font-bold  text-white  ml-20 my-9'>Our Story</h1>
    <h1 className=' text-6xl font-bold  text-white  ml-20 my-9'>Who We Are.</h1>
    <div style={{ height: '500px' }} />
</Parallax>
<div className=' flex justify-evenly items-center'>
  <div>
   <img src={itemImg} alt="" />
  </div>
  <div>
        <h1 className=' text-4xl font-bold' >SO WHO ARE WE?</h1>
        <br />
        <p>The Breathe Easy Foundation is a charity set up in the memory of Caroline Omolara</p>
        <p>Akeju who died on the 23rd of April 2009 in Nigeria of asthma and allergy related</p>
        <p>problems. We are a non-profit organisation dedicated to improve the lives of people</p>
        <p>with asthma and allergies.</p>
        <br />

        <button
  className="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg bg-green-700 text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none block w-full"
  type="button">
  Red More About Lara
</button>
  </div>
</div>
</div>
        
    );
};

export default OurStory;