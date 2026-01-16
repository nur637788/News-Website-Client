import { useEffect } from "react";
import "cally";

function Calendar() {

    useEffect(() => {
        // just to ensure component is registered
    }, []);

    return (
        <div className=" min-h-screen flex justify-center items-center bg-gray-200 rounded-md">
            <calendar-date class="cally bg-white border border-gray-400 shadow-lg rounded-xl">
                <svg
                    slot="previous"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    className="w-4 h-4 cursor-pointer"
                >
                    <path d="M15.75 19.5 8.25 12l7.5-7.5" />
                </svg>

                <svg
                    slot="next"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    className="w-4 h-4 cursor-pointer"
                >
                    <path d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                </svg>

                <calendar-month></calendar-month>
            </calendar-date>
        </div>
    );
}

export default Calendar;
