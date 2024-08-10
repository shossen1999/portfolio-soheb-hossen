import { Outlet } from "react-router-dom";
import Footer from "../Home/footer/Footer";
import Navbar from "../Home/Navbar/Navbar";



const Root = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
            
        </div>
    );
};

export default Root;