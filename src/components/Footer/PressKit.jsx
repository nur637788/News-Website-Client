import React from "react";

function PressKit() {
    return (
        <div className="max-w-3xl px-5 py-6 bg-white shadow-lg rounded-md m-auto">
            {/* Header */}
            <div className="mb-10">
                <h1 className="text-3xl font-bold mb-3 text-pink-600 text-center">প্রেস কিট</h1>
                <p className="text-gray-600 max-w-xl m-auto text-center">
                    আমাদের সংবাদমাধ্যম সম্পর্কিত অফিসিয়াল তথ্য, লোগো, ব্র্যান্ড গাইডলাইন ও যোগাযোগের তথ্য এখানে পাওয়া যাবে।
                </p>
            </div>

            {/* About */}
            <section className="mb-10">
                <h2 className="text-xl font-semibold mb-2">আমাদের সম্পর্কে</h2>
                <p className="text-gray-700 leading-relaxed">
                    <strong>নিউজ পোর্টাল</strong> একটি নির্ভরযোগ্য অনলাইন সংবাদমাধ্যম, যেখানে
                    সর্বশেষ বাংলাদেশ, রাজনীতি, বিশ্ব, বাণিজ্য, খেলা, বিনোদন, চাকরি ও জীবনযাপন
                    বিষয়ক সংবাদ প্রকাশ করা হয়। আমরা সত্য, নিরপেক্ষ ও সময়োপযোগী সংবাদ
                    পাঠকের কাছে পৌঁছে দিতে প্রতিশ্রুতিবদ্ধ।
                </p>
            </section>

            {/* Key Info */}
            <section className="mb-10 grid md:grid-cols-2 gap-6">
                <div className="border border-gray-300 shadow rounded-lg p-5">
                    <h3 className="font-semibold mb-2">প্রতিষ্ঠানের তথ্য</h3>
                    <ul className="text-gray-700 space-y-1">
                        <li>প্রতিষ্ঠার বছর: ২০২6</li>
                        <li>ধরণ: অনলাইন নিউজ পোর্টাল</li>
                        <li>ভাষা: বাংলা</li>
                        <li>কভারেজ: বাংলাদেশ ও আন্তর্জাতিক</li>
                        <li>ঠিকানা: 111 বিজয় সরণি, ঢাকা,
                            DH 1515, বাংলাদেশ।</li>
                    </ul>
                </div>

                <div className="border border-gray-300 shadow rounded-lg p-5">
                    <h3 className="font-semibold mb-2">মূল বিষয়বস্তু</h3>
                    <ul className="text-gray-700 space-y-1">
                        <li>📰 সর্বশেষ সংবাদ</li>
                        <li>🏛️ রাজনীতি</li>
                        <li>🌍 বিশ্ব</li>
                        <li>⚽ খেলা</li>
                        <li>🎬 বিনোদন</li>
                        <li>💼 চাকরি</li>
                    </ul>
                </div>
            </section>

            {/* Logo */}
            <section className="mb-10">
                <h2 className="text-xl font-semibold mb-2">লোগো ও ব্র্যান্ড উপকরণ</h2>
                <p className="text-gray-700 mb-4">
                    নিচের লোগোগুলো সংবাদ প্রকাশ, প্রেস রিলিজ ও মিডিয়া কাভারেজের জন্য ব্যবহার করা যাবে।
                </p>

                <div className="flex flex-wrap gap-6">
                    <div className="border border-gray-300 rounded-lg p-4 text-center w-48">
                        <div className="h-24 flex items-center justify-center mb-2 overflow-hidden">
                            <img src="/images/news.png" alt="Logo" className="hover:scale-105 duration-300" />
                        </div>
                        <p className="text-sm text-gray-600">Primary Logo</p>
                    </div>

                    <div className="border border-gray-300 rounded-lg p-4 text-center w-48">
                        <div className="h-24 flex items-center justify-center overflow-hidden bg-green-500 mb-2 rounded">
                            <img src="/images/news.png" alt="Logo" className="hover:scale-105 duration-300" />
                        </div>
                        <p className="text-sm text-gray-600">Background Logo</p>
                    </div>
                </div>
            </section>

            {/* Usage Guideline */}
            <section className="mb-10">
                <h2 className="text-xl font-semibold mb-2">ব্যবহার নির্দেশিকা</h2>
                <ul className="list-disc ml-5 text-gray-700 space-y-1">
                    <li>লোগোর রঙ পরিবর্তন করা যাবে না</li>
                    <li>লোগোর চারপাশে পর্যাপ্ত ফাঁকা জায়গা রাখতে হবে</li>
                    <li>ব্র্যান্ড নাম বিকৃত করা যাবে না</li>
                    <li>অননুমোদিত বাণিজ্যিক কাজে ব্যবহার নিষিদ্ধ</li>
                </ul>
            </section>

            {/* Contact */}
            <section>
                <h2 className="text-xl font-semibold mb-2">মিডিয়া যোগাযোগ</h2>
                <p className="text-gray-700">
                    প্রেস, মিডিয়া বা পার্টনারশিপ সংক্রান্ত যেকোনো প্রয়োজনে আমাদের সাথে যোগাযোগ করুন:
                </p>

                <div className="mt-4 text-gray-700 space-y-1">
                    <p>📧 ইমেইল: <a href="mailto:worldnews@support.com">worldnews@support.com</a></p>
                    <p>📞 ফোন: <a href="tel:+01749535688">+8801749535688</a></p>
                    <p>🌐 ওয়েবসাইট: <a href="www.newsportal.com">www.newsportal.com</a></p>
                </div>
            </section>
        </div>
    );
}

export default PressKit;
