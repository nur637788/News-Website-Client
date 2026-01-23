import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import axios from "axios";
import { IoArrowBack } from "react-icons/io5";

function NewsDetails() {
    const { slug } = useParams();
    const [newsItem, setNewsItem] = useState(null);
    const navigate = useNavigate();
    useEffect(() => {
        axios.get("http://localhost:5000/api/news")
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
            <h1 className="text-3xl font-bold mb-3 text-center">{newsItem.title}</h1>
            <p className="text-gray-500 mb-5 text-[10px] md:text-sm">
                By {newsItem.author} | {newsItem.createdAt} | {newsItem.views} views
            </p>
            <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-3 mb-5 border-t border-b border-gray-300 py-5">
                <img src={newsItem.image} alt={newsItem.title} className="h-50 m-auto object-cover border border-gray-200 rounded-md hover:scale-105 duration-300" />
                <h2 className=" font-semibold">{newsItem.shortDescription}</h2>
            </div>
            <p className="text-start leading-relaxed whitespace-pre-line">{newsItem.content}</p>
        </div>
    );
}

export default NewsDetails;
