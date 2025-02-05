import { Route, BrowserRouter, Routes } from "react-router-dom";
import Layout from "../layout/Home.layout";
import LandingPage from "../pages/landing.page";
import TermsOfServicePage from "../pages/terms.page";
import PrivacyPolicyPage from "../pages/privacy.page";


const AppRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path={'/'}element={<Layout />}>
                    <Route index element={<LandingPage/>}/>
                    <Route path="terms-of-service" element={<TermsOfServicePage/>} />
                    <Route path="privacy-policy" element={<PrivacyPolicyPage/>}/>
                </Route>
            </Routes>
        </BrowserRouter>
    )
}
export default AppRoutes