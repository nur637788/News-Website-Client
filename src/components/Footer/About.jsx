import React from "react";

function About() {
    return (
        <div className="max-w-3xl px-5 py-6 bg-white shadow-lg rounded-md m-auto">
            {/* Header */}
            <h1 className="text-3xl font-bold mb-6 text-center text-pink-600">
                আমাদের সম্পর্কে
            </h1>

            {/* About content */}
            <div className="grid md:grid-cols-2 gap-8 items-center">
                {/* Text */}
                <div>
                    <p className="text-gray-700 mb-4 text-justify">
                        আমাদের নিউজ ওয়েবসাইট দেশের সর্বশেষ খবর ও গুরুত্বপূর্ণ
                        তথ্য পাঠকদের কাছে পৌঁছে দেওয়ার লক্ষ্যে কাজ করে। আমরা
                        রাজনীতি, খেলাধুলা, বিনোদন, বাণিজ্য, জীবনযাপন, চাকরি
                        সহ সকল গুরুত্বপূর্ণ খবরে আপডেট থাকার চেষ্টা করি।
                    </p>

                    <p className="text-gray-700 mb-4 text-justify">
                        আমাদের লক্ষ্য হল পাঠকদের সত্যনিষ্ঠ, নিরপেক্ষ এবং সময়োপযোগী
                        সংবাদ প্রদান করা। আমাদের টিম প্রতিনিয়ত কাজ করে থাকে
                        যাতে পাঠকরা কোনো খবর মিস না করেন।
                    </p>

                    <p className="text-gray-700 mb-4 text-justify">
                        আমাদের নিউজ ওয়েবসাইটে আপনি পাবেন ভিডিও নিউজ, মতামত,
                        বিশ্লেষণ এবং দেশের সর্বশেষ খবর। আমরা বিশ্বাস করি,
                        সংবাদ শুধু তথ্য নয়, এটি সামাজিক সচেতনতার একটি অংশ।
                    </p>
                </div>

                {/* Image */}
                <div className="flex justify-center md:justify-end">
                    <img
                        src="/images/news.png"
                        alt="About News"
                        className=" w-full md:w-4/5 object-cover"
                    />
                </div>
            </div>

            {/* Mission Section */}
            <div className="mt-10 bg-gray-50 p-4 rounded-md shadow border border-gray-200">
                <h2 className="text-2xl font-semibold mb-2 text-gray-800">
                    আমাদের মিশন
                </h2>
                <p className="text-gray-700 text-justify">
                    আমাদের মিশন হলো দেশের ও বিশ্বের খবর পাঠকদের কাছে দ্রুত ও
                    নির্ভুলভাবে পৌঁছে দেওয়া। আমরা চেষ্টা করি প্রতিটি খবর
                    যাচাই করা তথ্যের ভিত্তিতে প্রকাশ করতে এবং পাঠকদের জন্য
                    সহজভাবে উপস্থাপন করতে।
                </p>
            </div>
        </div>
    );
}

export default About;
