import { Route, Routes } from "react-router-dom";
import Home from "../pages/home.jsx";
import SideBar from "../Components/SideBar/sidebar.jsx";


function Layout (){
    return (
        <div className="flex">
            <SideBar />
            <Routes>
                <Route path="/" element={<Home />} />
            </Routes>
        </div>

    )
}

export default Layout;