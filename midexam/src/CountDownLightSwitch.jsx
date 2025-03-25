import React, { useState, useEffect } from "react";
import "./CountDownLightSwitch.css";

const CountDownLightSwitch = () => {
    const [isLightMode, setIsLightMode] = useState(false);
    const [timeLeft, setTimeLeft] = useState(30);
    const [isRunning, setIsRunning] = useState(false);

    useEffect(() => {
        document.body.className = isLightMode ? "light" : "";
    }, [isLightMode]);

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

    const handleStart = () => {
        setIsRunning(true);
    };

    const handleReset = () => {
        setIsRunning(false);
        setTimeLeft(30);
    };

    return (
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
                        style={{ width: `${(timeLeft / 30) * 100}%` }}
                    ></div>
                </div>
                <div className="timer">{timeLeft}s</div>
                <div className="btn-group">
                    {!isRunning && <button onClick={handleStart}>Start Timer</button>}
                    {isRunning && <button onClick={handleReset}>Reset Timer</button>}
                </div>
            </div>
        </div>
    );
};

export default CountDownLightSwitch;