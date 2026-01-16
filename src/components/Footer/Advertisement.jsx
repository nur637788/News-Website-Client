import React from "react";
import { Link } from "react-router";

function Advertisement() {
    return (
        <div className="max-w-3xl px-5 py-6 bg-white shadow-lg rounded-md m-auto">
            <h1 className="text-3xl font-bold mb-6 text-center">বিজ্ঞাপন</h1>

            <p className="text-gray-700 mb-6">
                আমাদের নিউজ ওয়েবসাইটে বিজ্ঞাপন দেওয়ার জন্য ধন্যবাদ। এখানে আপনি আপনার ব্যবসা বা পণ্যের বিজ্ঞাপন রাখতে পারেন। আমাদের প্ল্যাটফর্মটি ব্যবহারকারীদের মধ্যে ব্যাপক দর্শক সংখ্যা পৌঁছে দেয়।
            </p>

            <div className="grid md:grid-cols-2 gap-6">
                {/* বিজ্ঞাপন উদাহরণ কার্ড 1 */}
                <div className="border border-gray-300 rounded-lg p-6 shadow hover:shadow-lg transition">
                    <h2 className="text-xl font-semibold mb-3">বিজ্ঞান ও প্রযুক্তি</h2>
                    <p className="text-gray-600 mb-3">
                        আপনার প্রযুক্তি পণ্য বা সেবা এখানে প্রদর্শন করুন। দর্শকরা সহজেই আপনার বিজ্ঞাপন দেখতে পারবে।
                    </p>
                    <Link to='/contact' className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
                        যোগাযোগ করুন
                    </Link>
                </div>

                {/* বিজ্ঞাপন উদাহরণ কার্ড 2 */}
                <div className="border border-gray-300 rounded-lg p-6 shadow hover:shadow-lg transition">
                    <h2 className="text-xl font-semibold mb-3">জীবনযাপন ও স্বাস্থ্য</h2>
                    <p className="text-gray-600 mb-3">
                        স্বাস্থ্য বা জীবনযাপন সংক্রান্ত পণ্য/সেবা এখানে প্রদর্শন করুন। আমাদের পাঠকরা সহজেই আপনার বিজ্ঞাপন দেখবে।
                    </p>
                    <Link to='/contact' className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
                        যোগাযোগ করুন
                    </Link>
                </div>
            </div>

            <div className="mt-10 text-center">
                <p className="text-gray-700 mb-5 text-center max-w-2xl m-auto">
                    আপনি যদি আপনার ব্যবসার জন্য বিজ্ঞাপন দিতে চান, অনুগ্রহ করে আমাদের <a href="mailto:worldnews@support.com">worldnews@support.com</a> এ ইমেইল করুন।
                </p>
                <Link to='/contact' className="bg-green-500 text-white px-6 py-3 rounded hover:bg-green-600">
                    এখনই যোগাযোগ করুন
                </Link>
            </div>
        </div>
    );
}

export default Advertisement;
