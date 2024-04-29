import React from "react";
import "../Styles/Qibla.css";

const Qibla = () => {
    return (
        <div className="qibla-container">
            <h2>Qibla</h2>
            <div className="qibla-info">
                <h3>How to Find the Qibla Direction:</h3>
                <p>
                    To find the direction of the Qibla, follow these steps:
                </p>
                <ol>
                    <li>Stand facing the direction of the Qibla.</li>
                    <li>Use a compass or a Qibla finder app to determine the direction.</li>
                    <li>Align yourself with the direction indicated.</li>
                </ol>
            </div>
            <div className="qibla-finder">
                <h3>Qibla Finder</h3>
                <p>
                    If you need assistance in finding the Qibla direction, you can click the link below to find the direction to pray while facing the Qibla.
                </p>
                {/* Link to Qibla finder */}
                <a href="https://qiblafinder.withgoogle.com/intl/en/desktop" target="_blank" rel="noopener noreferrer">Find Qibla Finder Apps</a>
            </div>
        </div>
    );
};

export default Qibla;
