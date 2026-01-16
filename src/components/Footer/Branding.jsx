import React from "react";
import { Link } from "react-router";

function Branding() {
    return (
        <div className="max-w-3xl px-5 py-6 bg-white shadow-lg rounded-md m-auto">
            {/* Header */}
            <h1 className="text-3xl font-bold mb-6 text-center text-pink-600">
                আমাদের ব্র্যান্ডিং
            </h1>

            {/* Branding Intro */}
            <p className="text-gray-700 text-lg mb-8 text-center max-w-2xl m-auto">
                আমাদের নিউজ ওয়েবসাইটের ব্র্যান্ডিং আমাদের দর্শককে শক্তিশালী, বিশ্বাসযোগ্য এবং আধুনিক সংবাদ অভিজ্ঞতা প্রদান করে।
            </p>

            {/* Branding Features */}
            <div className="grid md:grid-cols-3 gap-3">
                {/* Feature 1 */}
                <div className="bg-blue-200 rounded-xl shadow p-4 hover:shadow-lg transition duration-300">
                    <h2 className="text-xl font-semibold mb-3 text-gray-800">
                        পরিচ্ছন্ন ডিজাইন
                    </h2>
                    <p className="text-gray-600">
                        আমাদের ওয়েবসাইটে ব্যবহৃত ডিজাইন ব্যবহারকারীদের জন্য সহজবোধ্য এবং চোখে আনন্দদায়ক।
                    </p>
                </div>

                {/* Feature 2 */}
                <div className="bg-red-200 rounded-xl shadow p-4 hover:shadow-lg transition duration-300">
                    <h2 className="text-xl font-semibold mb-3 text-gray-800">
                        নির্ভরযোগ্য সংবাদ
                    </h2>
                    <p className="text-gray-600">
                        আমরা সত্যনিষ্ঠ সংবাদ পরিবেশনের উপর গুরুত্ব দিই এবং প্রতিটি খবর যাচাই করি।
                    </p>
                </div>

                {/* Feature 3 */}
                <div className="bg-green-200 rounded-xl shadow p-4 hover:shadow-lg transition duration-300">
                    <h2 className="text-xl font-semibold mb-3 text-gray-800">
                        ব্র্যান্ড রিকগনিশন
                    </h2>
                    <p className="text-gray-600">
                        আমাদের লোগো, রঙ এবং টোন আমাদের ব্র্যান্ডকে সহজেই চেনার যোগ্য করে তোলে।
                    </p>
                </div>
            </div>

            {/* Call to Action */}
            <div className="mt-10 text-center">
                <h2 className="text-2xl font-semibold text-gray-800 mb-3">
                    আমাদের সঙ্গে যুক্ত হোন
                </h2>
                <p className="text-gray-600 mb-5">
                    আমাদের ব্র্যান্ডের সঙ্গে যুক্ত হয়ে আরও বিশ্বস্ত এবং আকর্ষণীয় সংবাদ পান।
                </p>
                <Link to='/contact' className="bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600 transition duration-300">
                    যোগাযোগ করুন
                </Link>
            </div>
        </div>
    );
}

export default Branding;
