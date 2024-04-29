import React from "react";
import "../Styles/Settings.css"; 

const Information = () => {
    return (
        <div className="information-container">
            <h2 className="info-title">Information</h2>
            
            {/* About Section */}
            <div className="info-section">
                <div className="info-box">
                    <h3 className="info-subtitle">About</h3>
                    <p className="info-text">Version 1.2.1</p>
                    <p className="info-text">Developer: Yusuf Salman Nawaz</p>
                    <p className="info-text">This app is designed to help Muslims with the first Pillar of Islam (Salah) by providing essential tools and features for practicing their faith, including prayer times, Qibla direction and a prayer tracking system.</p>
                </div>
            </div>

            {/* Mission Section */}
            <div className="info-section">
                <div className="info-box">
                    <h3 className="info-subtitle">Mission</h3>
                    <p className="info-text">My mission by making this application is to strengthen our Muslim Ummah (community) by providing them with easy access to important religious information and tools needed. I hope to foster a stronger connection to their faith and community by allowing Muslims around the world to go digital.</p>
                </div>
            </div>

            {/* Privacy Policy Section */}
            <div className="info-section">
                <div className="info-box">
                    <h3 className="info-subtitle">Privacy Policy</h3>
                    <p className="info-text">I believe that all users are entitled to their privacy and this application will not use your data for malicious purposes, data collection will be avoided entirely. Analytics and personal information will never be collected and used.</p>
                </div>
            </div>
        </div>
    );
};

export default Information;




