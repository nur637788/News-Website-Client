import React from "react";
import { FaEnvelope, FaFacebook, FaGithub, FaInstagram, FaLinkedin, FaWhatsapp } from "react-icons/fa";

function Design() {
    const steps = [
        {
            title: "১. পরিকল্পনা (Planning)",
            description:
                "প্রথমে আমরা News Website এর উদ্দেশ্য, target audience এবং layout নির্ধারণ করি। এতে জানা যায় কোন ধরনের news section, category, এবং features থাকবে।",
        },
        {
            title: "২. Wireframe & UI Design",
            description:
                "এরপর আমরা wireframe তৈরি করি এবং Tailwind CSS দিয়ে clean ও responsive UI design করি। এতে user-friendly interface নিশ্চিত হয়।",
        },
        {
            title: "৩. Frontend Development",
            description:
                "React ব্যবহার করে components তৈরি করি, state management (useState, useEffect) ও routing implement করি। Tailwind CSS দিয়ে styling করি।",
        },
        {
            title: "৪. Backend Integration",
            description:
                "Axios বা fetch ব্যবহার করে backend (Node.js + Express + MongoDB) এর সাথে connect করি। News data, user authentication এবং category management handle করি।",
        },
        {
            title: "৫. Testing & Optimization",
            description:
                "সব page responsive কিনা, news fetch হচ্ছে কিনা, UI smooth কিনা check করি। Performance optimization ও SEO integration করি।",
        },
        {
            title: "৬. Deployment",
            description:
                "শেষে website Netlify (frontend) ও Render / Heroku (backend) এ deploy করি। সব link ও images ঠিক আছে কিনা verify করি।",
        }
    ];

    return (
        <div className="max-w-3xl px-5 py-6 bg-white shadow-lg rounded-md m-auto">
            <h1 className="text-3xl font-bold mb-4 text-center text-pink-600">News Website Design & Development</h1>

            <p className="text-gray-700 mb-8 text-center max-w-2xl m-auto">
                এই page এ আমরা দেখাবো News Website কিভাবে ডিজাইন এবং ডেভেলপ করা হয়।
            </p>

            <div className="space-y-8">
                {steps.map((step, index) => (
                    <div
                        key={index}
                        className="border-l-4 border-blue-500 pl-4 py-3 bg-gray-50 rounded-lg shadow hover:shadow-lg duration-300"
                    >
                        <h2 className="text-xl font-semibold mb-1">{step.title}</h2>
                        <p className="text-gray-600">{step.description}</p>
                    </div>

                ))}
                <div
                    className="border-l-4 border-blue-500 pl-4 py-3 bg-gray-50 rounded-lg shadow hover:shadow-lg duration-300">
                    <h2 className="text-xl font-semibold mb-3 text-red-600">৭. Deveploper</h2>
                    <div className="flex items-center gap-3">
                        <img src="/images/logo-image.png" alt="Nur-Logo" className="h-15 w-15 rounded-full ring-1 ring-cyan-800 bg-blue-100" />
                        <div>
                            <p className="text-xl font-semibold text-gray-900">Abdun Nur</p>
                            <p className="text-purple-900 text-sm">Web Developer</p>
                        </div>
                    </div>
                    <span className="flex gap-4 items-center mt-3">
                        <a href="" target="_blank"><FaFacebook className="hover:scale-110 hover:text-blue-500 duration-300" /></a>
                        <a href="" target="_blank"><FaInstagram className="hover:scale-110 hover:text-blue-500 duration-300" /></a>
                        <a href="" target="_blank"><FaLinkedin className="hover:scale-110 hover:text-blue-500 duration-300" /></a>
                        <a href="" target="_blank"><FaGithub className="hover:scale-110 hover:text-blue-500 duration-300" /></a>
                        <a href="" target="_blank"><FaEnvelope className="hover:scale-110 hover:text-blue-500 duration-300" /></a>
                        <a href="" target="_blank"><FaWhatsapp className="hover:scale-110 hover:text-blue-500 duration-300" /></a>
                    </span>
                </div>
            </div>
        </div>
    );
}

export default Design;
