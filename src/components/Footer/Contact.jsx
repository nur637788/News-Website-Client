import React, { useState } from "react";
import axios from "axios";

function Contact() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!name || !email || !message) {
            alert("অনুগ্রহ করে সব ফিল্ড পূরণ করুন!");
            return;
        }

        try {
            await axios.post(
                "https://news-website-server-three.vercel.app/api/news/api/contact/send",
                { name, email, message }
            );

            alert("✅ তোমার মেসেজটি পাঠানো হয়েছে। ধন্যবাদ!");
            // Clear form
            setName("");
            setEmail("");
            setMessage("");

        } catch (error) {
            alert("❌ মেসেজ পাঠানো যায়নি, আবার চেষ্টা করুন");
            console.log(error);
        }
    };

    return (
        <div className="min-h-screen bg-gray-50 flex items-center justify-center py-10 px-4">
            <div className="bg-gray-100 shadow-lg rounded-xl w-full max-w-2xl p-5 border border-gray-300">
                <img src="/images/news.png" alt="" className="w-20 m-auto" />
                <h2 className="text-3xl font-bold mb-2 text-center">যোগাযোগ করুন</h2>
                <p className="text-center text-gray-500 mb-5">
                    আপনার মতামত বা প্রশ্ন আমাদের জানান
                </p>

                <form onSubmit={handleSubmit} className="space-y-4">
                    {/* নাম */}
                    <div>
                        <label className="block mb-2 font-semibold">নাম</label>
                        <input
                            type="text"
                            value={name}
                            required
                            onChange={(e) => setName(e.target.value)}
                            className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                            placeholder="আপনার নাম লিখুন"
                        />
                    </div>

                    {/* ইমেইল */}
                    <div>
                        <label className="block mb-2 font-semibold">ইমেইল</label>
                        <input
                            type="email"
                            value={email}
                            required
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                            placeholder="আপনার ইমেইল লিখুন"
                        />
                    </div>

                    {/* মেসেজ */}
                    <div>
                        <label className="block mb-2 font-semibold">মেসেজ</label>
                        <textarea
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            rows={5}
                            required
                            className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                            placeholder="আপনার মেসেজ লিখুন"
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 rounded-lg transition duration-300 cursor-pointer">
                        মেসেজ পাঠান
                    </button>
                </form>

                {/* Optional: Contact info */}
                <div className="mt-10 text-center text-gray-600 space-y-2">
                    <p><b>ইমেইল:</b> <a href="mailto:worldnews@support.com" target="_blank" className="text-blue-500">worldnews@support.com</a></p>
                    <p><b>ফোন:</b> <a href="tel:+01749535688" target="_blank" className="text-blue-500">+8801749535688</a></p>
                    <p><b>ঠিকানা:</b> 111 বিজয় সরণি, <br /> ঢাকা, DH 1515, বাংলাদেশ।</p>
                </div>
            </div>
        </div>
    );
}

export default Contact;
