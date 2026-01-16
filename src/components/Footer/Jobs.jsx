import axios from "axios";
import React, { useEffect, useState } from "react";

function Jobs() {
    const [data, setData] = useState([])

    useEffect(() => {
        axios.get("/job.json")
            .then(res => {
                setData(res.data.Jobs)
            })
            .catch(err => console.log(err))
    }, [])
    return (
        <div className="max-w-6xl mx-auto p-5">
            {/* Page Header */}
            <h1 className="text-3xl font-bold mb-6 text-pink-600 text-center" >
                 চাকরির খবর
            </h1>

            {/* Jobs List */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {data.map((job) => (
                    <div
                        key={job.id}
                        className="border border-gray-300 rounded-xl p-5 shadow-sm hover:shadow-md shadow-green-200 transition"
                    >
                        <h2 className="text-xl font-semibold text-gray-800 mb-2">
                            {job.title}
                        </h2>

                        <p className="text-gray-600 mb-1">
                            🏢 <span className="font-medium">{job.company}</span>
                        </p>

                        <p className="text-gray-600 mb-1">
                            📍 লোকেশন: {job.location}
                        </p>

                        <p className="text-gray-600 mb-1">
                            ⏰ ডেডলাইন: {job.deadline}
                        </p>

                        <p className="text-sm text-blue-600 font-medium mb-4">
                            ধরন: {job.type}
                        </p>

                        <button className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 rounded-lg text-sm font-semibold cursor-pointer">
                            বিস্তারিত দেখুন
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Jobs;
