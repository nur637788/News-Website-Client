import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import axios from "axios";
import { IoArrowBack } from "react-icons/io5";

function NewsDetails() {
    const { slug } = useParams();
    const [newsItem, setNewsItem] = useState(null);
    const navigate = useNavigate();
    useEffect(() => {
        axios.get("/news.json")
            .then(res => {
                const found = res.data.find(item => item.slug === slug);
                setNewsItem(found || null);
            })
            .catch(err => console.log(err));
    }, [slug]);

    if (!newsItem) {
        return (
            <div className="max-w-6xl mx-auto p-5 text-center text-gray-500">
                News not found
            </div>
        );
    }

    return (
        <div className="max-w-2xl mx-auto pt-2 pb-5 px-5 text-center border border-gray-300 rounded-md shadow-sm my-8">
            <button
                onClick={() => navigate(-1)}
                className="flex items-center gap-1 text-sm font-medium my-2 text-blue-600 hover:text-blue-800"
            >
                <IoArrowBack size={18} />
                Back
            </button>
            <h1 className="text-3xl font-bold mb-3">{newsItem.title}</h1>
            <p className="text-gray-500 mb-5 text-[10px] md:text-sm">
                By {newsItem.author} | {newsItem.publishedDate} | {newsItem.views} views
            </p>
            <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-3 mb-5 border-t border-b border-gray-300 py-5">
                <img src={newsItem.image} alt={newsItem.title} className="h-50 m-auto object-cover border border-gray-200 rounded-md hover:scale-105 duration-300" />
                <h2 className="text-xl lg:text-2xl font-bold">{newsItem.shortDescription}</h2>
            </div>
            <p className="lg:text-lg text-start leading-relaxed font-semibold">{newsItem.content}</p>
            <p className="mt-2 text-start space-y-2">
                <p>জুলাই গণ–অভ্যুত্থানের সময় আশুলিয়ায় ছয়জনের লাশ পোড়ানোর ঘটনায় করা মানবতাবিরোধী অপরাধের মামলায় সাক্ষ্য গ্রহণ শেষ হয়েছে রোববার। আগামী বুধবার থেকে এ মামলায় যুক্তি–তর্ক উপস্থাপন শুরু হবে। সেদিন প্রসিকিউশন (রাষ্ট্রপক্ষ) যুক্তি–তর্ক উপস্থাপন করবে।</p>

                <p>রোববার এ মামলার আসামি পুলিশের গোয়েন্দা বিভাগের (ডিবি) সাবেক পরিদর্শক মো. আরাফাত হোসেন সাফাই সাক্ষ্য দিয়েছেন। জবানবন্দিতে তিনি বলেন, ঘটনার দিন তিনি ডিবি (উত্তর) দলের একজন সাধারণ সদস্য হিসেবে দায়িত্ব পালন করেন। সেদিন তিনি নিজে কোনো অস্ত্র বহন করেননি। কাউকে নির্দেশনা দেওয়ার মতো অবস্থান নিয়েও তিনি সেদিন ডিউটিতে যোগদান করেননি। তাঁর ইনচার্জের নির্দেশনামতো প্রতিটি কাজ করেছেন। তিনি নিরপরাধ। ন্যায়বিচার চান।</p>

                <p>মামলার অপর আসামি সাবেক অতিরিক্ত পুলিশ সুপার আবদুল্লাহিল কাফীর পক্ষে দুজন সাফাই সাক্ষী এবং আসামি সাবেক অতিরিক্ত পুলিশ সুপার শহিদুল ইসলামের পক্ষে নিজেরই সাফাই সাক্ষী দেওয়ার কথা ছিল। তবে তাঁরা সাফাই সাক্ষী দেবেন না বলে ট্রাইব্যুনালকে জানান তাঁদের আইনজীবীরা।</p>
            </p>
        </div>
    );
}

export default NewsDetails;
