import { Outlet } from "react-router-dom";
import NavBar from "../Page/NavBar/NavBar";
import Footer from "../Footer/Footer";


const LayOut = () => {
    return (
        <div>
            <NavBar></NavBar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default LayOut;