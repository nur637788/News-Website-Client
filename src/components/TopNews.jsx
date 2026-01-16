import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router";

function TopNews() {
    const [news, setNews] = useState([]);

    useEffect(() => {
        axios
            .get("/news.json")
            .then((res) => {
                setNews(res.data);
            })
            .catch((err) => console.log(err));
    }, []);

    const topNews = news.slice(38, 41);

    return (
        <div>
            <h1 className="text-2xl font-bold uppercase my-2 text-gray-600 tracking-widest">Top News</h1>
            <section className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-5">
                {/* 🔥 First big news (2 columns) */}
                {topNews[0] && (
                    <Link
                        to={`/news/${topNews[0].slug}`}
                        state={topNews[0]}
                        className="md:col-span-2">
                        <div className="relative h-90 rounded-xl overflow-hidden group">
                            <img
                                src={topNews[0].image}
                                alt={topNews[0].title}
                                className="w-full h-full object-cover group-hover:scale-105 duration-300"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-black/20 p-5 flex items-end">
                                <h2 className="text-white text-2xl font-bold">
                                    {topNews[0].title}
                                </h2>
                            </div>
                        </div>
                    </Link>
                )}

                {/* 🔥 Right side – 2 small news */}
                <div className="flex flex-col gap-6">
                    {topNews.slice(1).map((item, i) => (
                        <Link key={i} to={`/news/${item.slug}`} state={item}>
                            <div className="relative h-[165px] rounded-xl overflow-hidden group">
                                <img
                                    src={item.image}
                                    alt={item.title}
                                    className="w-full h-full object-cover group-hover:scale-105 duration-300"
                                />
                                <div className="absolute inset-0 bg-black/50 p-4 flex items-end">
                                    <h2 className="text-white text-base font-semibold line-clamp-2">
                                        {item.title}
                                    </h2>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </section>
        </div>
    );
}

export default TopNews;
