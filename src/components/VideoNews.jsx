import axios from 'axios';
import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router';
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

function Home() {
    const [news, setNews] = useState([]);
    const scrollRef = useRef(null);

    useEffect(() => {
        axios
            .get("/news.json")
            .then((res) => {
                setNews(res.data.slice(22, 37));
            })
            .catch((err) => console.log(err));
    }, []);

    const scrollLeft = () => {
        scrollRef.current.scrollBy({
            left: -300,
            behavior: "smooth"
        });
    };

    const scrollRight = () => {
        scrollRef.current.scrollBy({
            left: 300,
            behavior: "smooth"
        });
    };

    return (
        <section className="relative">
            {/* Title */}
            <h3 className="text-2xl font-bold uppercase my-2 text-gray-600 tracking-widest">
                Trending
            </h3>

            {/* Left Arrow */}
            <button
                onClick={scrollLeft}
                className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white/50 hover:bg-white p-2 rounded-full shadow"
            >
                <FaChevronLeft />
            </button>

            {/* Right Arrow */}
            <button
                onClick={scrollRight}
                className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white/50 hover:bg-white p-2 rounded-full shadow"
            >
                <FaChevronRight />
            </button>

            {/* Carousel */}
            <div
                ref={scrollRef}
                className="flex gap-4 overflow-x-auto scroll-smooth scrollbar-hide"
            >
                {news.map((item, i) => (
                    <Link key={i} to={`/news/${item.slug}`} state={item}>
                        <div className="min-w-[160px] relative rounded-md overflow-hidden group">
                            {/* Image */}
                            <img
                                src={item.image}
                                alt={item.title}
                                className="h-56 w-full object-cover transition-transform duration-300 group-hover:scale-105"
                            />

                            {/* Overlay */}
                            <div className="absolute inset-0 bg-black/60 flex items-end p-3 transition-all duration-300 group-hover:bg-black/30">
                                <p className="text-white text-sm">
                                    {item.title}
                                </p>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </section>
    );
}

export default Home;
