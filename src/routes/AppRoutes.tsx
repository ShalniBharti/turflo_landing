import { Routes, Route } from 'react-router-dom';
import LandingPage from '../pages/page/Landing';

const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/landingPage" element={<LandingPage />} />
        </Routes>
    );
};

export default AppRoutes;
