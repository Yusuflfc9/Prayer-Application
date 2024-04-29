import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './Navbar';
import Home from './Pages/Home'; 
import Qibla from './Pages/Qibla'; 
import Tracker from './Pages/Tracker'; 
import Settings from './Pages/Settings'; 
import NoPage from './Pages/NoPage'; // Error page if no page is found in navbar


const App = () => {
    return (
        <BrowserRouter>
            <div>
                <Routes>
                    <Route path="/" element={<Home />} /> 
                    <Route path="/qibla" element={<Qibla />} />
                    <Route path="/tracker" element={<Tracker />} />
                    <Route path="/settings" element={<Settings />} />
                    <Route path="*" element={<NoPage />} />
                </Routes>
                <Navbar />
                {/* Routing for navbar */}
            </div>
        </BrowserRouter>
    );
};

export default App;

