import React, { useState, useEffect } from "react";
import axios from 'axios'; 
import '../Styles/Home.css';

const Home = () => {
    const [prayerTimes, setPrayerTimes] = useState(null);
    const [lastFetchedDate, setLastFetchedDate] = useState(null);
    const [currentDate, setCurrentDate] = useState(null);
    const [currentTime, setCurrentTime] = useState(null);

    useEffect(() => {
        fetchPrayerTimes(); // Fetch prayer times when component mounts
        // Update date and time every second
        const interval = setInterval(() => {
            setCurrentDate(new Date().toDateString());
            setCurrentTime(new Date().toLocaleTimeString());
        }, 1000);
        return () => clearInterval(interval); 
    }, []);

    useEffect(() => {
        const interval = setInterval(() => {
            const currentDate = new Date().getDate();
            if (lastFetchedDate !== currentDate) {
                fetchPrayerTimes(); // Fetch prayer times if date has changed
            }
        }, 60000); // Check every minute for date change
        return () => clearInterval(interval); 
    }, [lastFetchedDate]);

    const fetchPrayerTimes = async () => {
        const latitude = 51.508515; // Latitude of location
        const longitude = -0.1254872; // Longitude of location
        const year = new Date().getFullYear(); // Current year
        const month = new Date().getMonth() + 1; // Current month (January is 0)
        const day = new Date().getDate(); // Current day of the month
        const url = `http://api.aladhan.com/v1/calendar/${year}/${month}?latitude=${latitude}&longitude=${longitude}&method=2`;

        try {
            const response = await axios.get(url);
            const data = response.data.data[day - 1]; // Get data for today's date
            setPrayerTimes(data.timings);
            setLastFetchedDate(day); // Update last fetched date
        } catch (error) {
            console.error("Error fetching prayer times:", error); // If prayer time is not available, return null
        }
    };

    const renderPrayerTimes = () => {
        if (!prayerTimes) return null;

        return (
            <>
                <div className="rectangle">
                    <h3>Fajr: {prayerTimes.Fajr}</h3>
                </div>
                <div className="rectangle">
                    <h3>Dhuhr: {prayerTimes.Dhuhr}</h3>
                </div>
                <div className="rectangle">
                    <h3>Asr: {prayerTimes.Asr}</h3>
                </div>
                <div className="rectangle">
                    <h3>Maghrib: {prayerTimes.Maghrib}</h3>
                </div>
                <div className="rectangle">
                    <h3>Isha: {prayerTimes.Isha}</h3>
                </div>
            </>
        );
    };

    return (
        <div className="home-container">
            <div className="datetime">
                <p>{currentDate}</p>
                <p>{currentTime}</p>
            </div>
            {renderPrayerTimes()}

            <div className="textbox">
                <h3>How it works</h3>
                <p>
                    This app provides you with the daily prayer times based on your location. Simply navigate through the tabs to access features such as Qibla direction, prayer tracking and settings.
                </p>
            </div>
        </div>
    );
};

export default Home;


