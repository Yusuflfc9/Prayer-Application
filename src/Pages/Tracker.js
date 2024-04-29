import React, { useState, useEffect } from "react";
import "../Styles/Tracker.css"; 

const Tracker = () => {
    // Manages state of each prayer
    const [prayers, setPrayers] = useState({
        fajr: false,
        dhuhr: false,
        asr: false,
        maghrib: false,
        isha: false
    });

    // Function to toggle state of prayer when clicked
    const togglePrayer = (prayer) => {
        setPrayers(prevState => ({
            ...prevState,
            [prayer]: !prevState[prayer]
        }));
    };

    // Loads saved prayers from local storage
    useEffect(() => {
        const savedPrayers = JSON.parse(localStorage.getItem("prayers"));
        if (savedPrayers) {
            setPrayers(savedPrayers);
        }
    }, []);

    // Saves prayers to local storage when prayer state is changed
    useEffect(() => {
        localStorage.setItem("prayers", JSON.stringify(prayers));
    }, [prayers]);

    return (
        <div>
            <h2 className="prayer-progress-heading">Prayer Progress</h2>
            <div className="prayer-tracker">
                <div className="prayer-rectangles-container">
                    <div className={`prayer-rectangle ${prayers.fajr ? 'completed' : ''}`} onClick={() => togglePrayer('fajr')}>
                        <h3>Fajr</h3>
                    </div>
                    <div className={`prayer-rectangle ${prayers.dhuhr ? 'completed' : ''}`} onClick={() => togglePrayer('dhuhr')}>
                        <h3>Dhuhr</h3>
                    </div>
                    <div className={`prayer-rectangle ${prayers.asr ? 'completed' : ''}`} onClick={() => togglePrayer('asr')}>
                        <h3>Asr</h3>
                    </div>
                    <div className={`prayer-rectangle ${prayers.maghrib ? 'completed' : ''}`} onClick={() => togglePrayer('maghrib')}>
                        <h3>Maghrib</h3>
                    </div>
                    <div className={`prayer-rectangle ${prayers.isha ? 'completed' : ''}`} onClick={() => togglePrayer('isha')}>
                        <h3>Isha</h3>
                    </div>
                </div>
            </div>

            <div className="tracker-info">
                <h3>How it works</h3>
                <p>
                    Click on each prayer to mark it as completed for the day. The completed prayers will be highlighted in green and it will save for when you return.
                </p>
            </div>
        </div>
    );
};

export default Tracker;


