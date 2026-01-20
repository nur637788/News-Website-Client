import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router';
import VideoNews from "../components/VideoNews"
import TopNews from '../components/TopNews';
function Home() {
    const [news, setNews] = useState([]);
    const [visibleCount, setVisibleCount] = useState(10); // প্রথমে 10টি দেখাবে

    useEffect(() => {
        axios.get("https://news-website-server-three.vercel.app/api/news")
            .then((res) => {
                setNews(res.data);
            })
            .catch((err) => console.log(err));
    }, []); // useEffect দিয়ে শুধু একবার ডেটা ফেচ হবে

    const loadMore = () => {
        setVisibleCount((prev) => prev + 10); // See More ক্লিক করলে 10 বাড়াবে
    };

    return (
        <div className="max-w-6xl mx-auto px-5">
            <TopNews />
            <h1 className="text-2xl font-bold uppercase my-2 text-gray-600 tracking-widest">All News</h1>

            <div className="grid md:grid-cols-2 gap-6">
                {news.slice(0, visibleCount).map((item) => (
                    <Link to={`/news/${item.slug}`} key={item.id}>
                        <div className="flex flex-row gap-2 md:gap-10 items-center border border-gray-400 rounded-lg p-3 shadow hover:-translate-y-1 duration-300 relative py-5">
                            <img
                                src={item.image}
                                alt={item.title}
                                className="rounded mb-3 w-30 h-25 md:w-40 hover:scale-105 duration-300"
                            />
                            <div className='pt-5'>
                                <h2 className="font-semibold mb-1 md:mb-3 hover:text-blue-500">{item.title}</h2>
                                {item.shortDescription.length > 50
                                    ? item.shortDescription.slice(0, 50) + "..."
                                    : item.shortDescription}

                            </div>
                            <p className="text-gray-500 text-[8px] md:text-sm absolute top-1 right-3">
                                {item.author} | {item.createdAt} | {item.views} views
                            </p>
                        </div>
                    </Link>
                ))}
            </div>

            {/* See More Button */}
            {visibleCount < news.length && (
                <div className="text-center mt-6">
                    <button
                        onClick={loadMore}
                        className="bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600"
                    >
                        আরও...
                    </button>
                </div>
            )} <hr className='my-3 text-gray-300' />
            <VideoNews />
        </div>
    );
}

export default Home;
