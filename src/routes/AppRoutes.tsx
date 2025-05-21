import { Routes, Route } from 'react-router-dom';
import LandingPage from '../pages/page/Landing';
import TermsAndConditions from '../pages/page/TermsCondition';
import PrivacyPolicy from '../pages/page/PrivacyPolicy';


const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/landingPage" element={<LandingPage />} />
            <Route path="/terms_and_conditions" element={<TermsAndConditions />} />
            <Route path="/privacy_policy" element={<PrivacyPolicy />} />
        </Routes>
    );
};

export default AppRoutes;
