import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Layout = () => {
    return (
        <>
            <div className="w-full">
                <div>
                    <Navbar />
                </div>
                <div>
                    <Outlet />
                </div>
                <div>
                    <Footer/> 
                </div>
            </div>
        </>
    )
}
export default Layout;