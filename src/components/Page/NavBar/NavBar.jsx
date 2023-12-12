import { Link } from "react-router-dom";
import logo from '../../../assets/bnner/logo.jpg'


const NavBar = () => {
    const navLinks = <>
    <li><Link to='/' className=" text-white font-bold ">HOME</Link></li>
    <li><Link to='/aboutAsthma' className=" text-white font-bold ">ABOUT ASTHMA</Link></li>
    <li><Link to='/ourStory' className=" text-white font-bold ">OUR STORY</Link></li>
    <li><Link to='/ourMission' className=" text-white font-bold ">OUR MISSION</Link></li>
    <li><Link to='/news' className=" text-white font-bold ">NEWS</Link></li>
    <li><Link to='/contactUs' className=" text-white font-bold ">CONTACT US</Link></li>
    </>
    return (
        <div>
           <div className="navbar bg-[#65B741]">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </div>
      <ul tabIndex={0} className="menu menu-sm dropdown-content text-white mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
        {navLinks}
        
      </ul>
    </div>
    <img className=" w-[50px]" src={logo} alt="" />
    <a className="btn btn-ghost text-xl">BreathNess EASE</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      {navLinks}
    </ul>
  </div>
  <div className="navbar-end">
  <Link to='/page'>
  <button className="btn btn-outline  bg-white ">DONATE</button>
  </Link>
    {/* <a className="btn"></a> */}
  </div>
</div> 
        </div>
    );
};

export default NavBar;