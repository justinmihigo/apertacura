import { Route, BrowserRouter, Routes } from "react-router-dom";
import Layout from "../layout/Home.layout";
import LandingPage from "../pages/landing.page";


const AppRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<Layout />}>
                    <Route element={<LandingPage/>} path="/"></Route>
                </Route>
            </Routes>
        </BrowserRouter>
    )
}
export default AppRoutes