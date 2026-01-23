import axios from "axios";
import { useState } from "react";

function UplodeNews() {
    const [news, setNews] = useState({
        title: "",
        slug: "",
        category: "",
        author: "",
        publishedDate: "",
        image: "",
        shortDescription: "",
        content: "",
        views: 0,
    });

    // 🔹 Auto slug generator
    const generateSlug = (text) => {
        return text
            .toLowerCase()
            .replace(/[^a-z0-9]+/g, "-")
            .replace(/(^-|-$)+/g, "");
    };

    const handleChange = (e) => {
        const { name, value } = e.target;

        if (name === "title") {
            setNews({
                ...news,
                title: value,
                slug: generateSlug(value + "-" + Date.now()),
            });
        } else {
            setNews({ ...news, [name]: value });
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            await axios.post(
                "http://localhost:5000/api/news",
                {
                    title: news.title,
                    slug: news.slug,
                    category: news.category,
                    image: news.image,
                    shortDescription: news.shortDescription,
                    content: news.content,
                    author: news.author,
                }
            );

            alert("নিউজ সফলভাবে প্রকাশ হয়েছে ✅");

            setNews({
                title: "",
                slug: "",
                category: "",
                author: "",
                image: "",
                shortDescription: "",
                content: "",
            });

        } catch (error) {
            console.error(error);
            alert("নিউজ প্রকাশ করতে সমস্যা হয়েছে ❌");
        }
    };


    return (
        <div className="p-2 mx-auto text-slate-200 bg-white rounded-md">
            <h1 className="text-xl md:text-2xl text-gray-500 text-center font-bold mb-5">
                নতুন সংবাদ যোগ করুন
            </h1>

            <form
                onSubmit={handleSubmit}
                className="space-y-4 bg-slate-800 p-2 md:p-6 rounded-lg max-w-3xl m-auto"
            >
                {/* Title */}
                <input
                    type="text"
                    name="title"
                    placeholder="সংবাদের শিরোনাম"
                    value={news.title}
                    onChange={handleChange}
                    className="w-full p-2 rounded bg-slate-900 border border-slate-700"
                    required
                />

                {/* Slug */}
                <input
                    type="text"
                    name="slug"
                    placeholder="Slug"
                    value={news.slug}
                    className="w-full p-2 rounded bg-slate-900 border border-slate-700"
                    readOnly
                />

                {/* Category */}
                <select
                    name="category"
                    value={news.category}
                    onChange={handleChange}
                    className="w-full p-2 rounded bg-slate-900 border border-slate-700"
                    required>
                    <option className="bg-gray-400" value="">ক্যাটাগরি নির্বাচন</option>
                    <option value="latest">সর্বশেষ</option>
                    <option value="top-news">শীর্ষ খবর</option>
                    <option value="bangladesh">বাংলাদেশ</option>
                    <option value="world">বিশ্ব</option>
                    <option value="politics">রাজনীতি</option>
                    <option value="sports">খেলা</option>
                    <option value="business">বাণিজ্য</option>
                    <option value="opinion">মতামত</option>
                    <option value="entertainment">বিনোদন</option>
                    <option value="lifestyle">জীবনযাপন</option>
                    <option value="jobs">চাকরি</option>
                    <option value="video">ভিডিও</option>
                </select>

                {/* Author */}
                <input
                    type="text"
                    name="author"
                    placeholder="লেখকের নাম"
                    value={news.author}
                    onChange={handleChange}
                    className="w-full p-2 rounded bg-slate-900 border border-slate-700"
                    required
                />

                {/* Image URL */}
                <input
                    type="text"
                    name="image"
                    placeholder="Image URL"
                    value={news.image}
                    onChange={handleChange}
                    className="w-full p-2 rounded bg-slate-900 border border-slate-700"
                />

                {/* Short Description */}
                <textarea
                    name="shortDescription"
                    placeholder="সংক্ষিপ্ত বিবরণ"
                    value={news.shortDescription}
                    onChange={handleChange}
                    rows="2"
                    className="w-full p-2 rounded bg-slate-900 border border-slate-700"
                    required
                ></textarea>

                {/* Content */}
                <textarea
                    name="content"
                    placeholder="সম্পূর্ণ সংবাদ লিখুন"
                    value={news.content}
                    onChange={handleChange}
                    rows="5"
                    className="w-full p-2 rounded bg-slate-900 border border-slate-700"
                    required
                ></textarea>

                {/* Submit */}
                <button
                    type="submit"
                    className="w-full bg-green-600 hover:bg-green-700 py-2 rounded font-semibold"
                >
                    সংবাদ প্রকাশ করুন
                </button>
            </form>
        </div>
    );
}

export default UplodeNews;
