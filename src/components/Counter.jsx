import React, { useState, useEffect } from "react";

function Counter() {
    // Target date
    const targetDate = new Date("2026-02-01T00:00:00"); // change to your target

    const calculateTimeLeft = () => {
        const now = new Date();
        const difference = targetDate - now;

        let timeLeft = {
            days: 0,
            hours: 0,
            minutes: 0,
            seconds: 0,
        };

        if (difference > 0) {
            timeLeft = {
                days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
                minutes: Math.floor((difference / (1000 * 60)) % 60),
                seconds: Math.floor((difference / 1000) % 60),
            };
        }

        return timeLeft;
    };

    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    return (
        <div>
            <div className="grid grid-flow-col gap-3 text-center auto-cols-max">
                <div className="flex flex-col items-center">
                    <span className="countdown font-mono text-xl">{timeLeft.days}</span>
                    days
                </div>
                <div className="flex flex-col items-center text-purple-800">
                    <span className="countdown font-mono text-xl">{timeLeft.hours}</span>
                    hours
                </div>
                <div className="flex flex-col items-center text-green-500">
                    <span className="countdown font-mono text-xl">{timeLeft.minutes}</span>
                    min
                </div>
                <div className="flex flex-col items-center text-red-800">
                    <span className="countdown font-mono text-xl">{timeLeft.seconds}</span>
                    sec
                </div>
            </div>
        </div>
    );
}

export default Counter;
