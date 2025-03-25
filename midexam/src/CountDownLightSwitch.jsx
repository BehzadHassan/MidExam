import React, { useState, useEffect } from "react";
import "./CountDownLightSwitch.css"; // import CSS file same css code as given in index.html


const CountDownLightSwitch = () => {
    const [isLightMode, setIsLightMode] = useState(false); // false is dark mode and true is light mode
    const [timeLeft, setTimeLeft] = useState(30); // time is 30 seconds
    const [isRunning, setIsRunning] = useState(false); // timer is not running

    // Light mode effect
    useEffect(() => {
        document.body.className = isLightMode ? "light" : "";
    }, [isLightMode]);

    // Timer function
    useEffect(() => {
        let timer;
        if (isRunning && timeLeft > 0) {
            timer = setInterval(() => {
                setTimeLeft((prevTime) => prevTime - 1);
            }, 1000);
        } else if (timeLeft === 0) {
            setIsRunning(false);
        }
        return () => clearInterval(timer);
    }, [isRunning, timeLeft]);

    // Timer start functions
    const handleStart = () => {
        setIsRunning(true);
    };

    // Timer reset function
    const handleReset = () => {
        setIsRunning(false);
        setTimeLeft(30);
    };

    const styles = {
        
    }

    return (
        // JSX code for the countdown timer and light switch
        <div className="container">
            <div className="header">
                <h1>Countdown & Light Switch</h1>
                <div className="toggle-container">
                    <label className="toggle-switch">
                        <input
                            type="checkbox"
                            checked={isLightMode}
                            onChange={() => setIsLightMode(!isLightMode)}
                        />
                        <span className="slider"></span>
                    </label>
                    <span>Light Mode</span>
                </div>
            </div>
            <div className="timer-section">
                <div className="progress-bar">
                    <div
                        className="progress"
                        style={{ width: `${(timeLeft / 30) * 100}%` }}  // progress bar width based on time left
                    ></div>
                </div>
                <div className="timer">{timeLeft}s</div>
                {timeLeft === 0 && <div className="timer">Time's up!</div>}
                {/* conditional rendering of buttons */}
                <div className="btn-group">  
                    {!isRunning && <button onClick={handleStart}>Start Timer</button>}
                    {isRunning && <button onClick={handleReset}>Reset Timer</button>}
                </div>
            </div>
        </div>
    );
};

export default CountDownLightSwitch;