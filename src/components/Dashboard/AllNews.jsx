import { useEffect, useState } from "react";
import axios from "axios";

function AllNews() {
    const [news, setNews] = useState([]);
    const [editNews, setEditNews] = useState(null);

    // Load pending news
    const loadData = async () => {
        const res = await axios.get("http://localhost:5000/api/news");
        setNews(res.data);
    };

    useEffect(() => {
        loadData();
    }, []);

    // Delete
    const deleteNews = async (id) => {
        if (!confirm("Are you sure to delete?")) return;
        await axios.delete(`http://localhost:5000/api/news/${id}`);
        alert("Deleted ❌");
        loadData();
    };

    // Update news
    const updateNews = async (e) => {
        e.preventDefault();
        await axios.put(
            `https://news-website-server-three.vercel.app/api/news/${editNews._id}`,
            editNews
        );
        alert("News Updated ✏️");
        setEditNews(null);
        loadData();
    };

    return (
        <div className="bg-white p-4 rounded space-y-6">

            <h2 className="text-xl font-bold text-gray-700">
                All News
            </h2>

            {/* ================= EDIT FORM ================= */}
            {editNews && (
                <form
                    onSubmit={updateNews}
                    className="border border-gray-500 rounded-lg p-4 bg-gray-50 space-y-3">

                    <h3 className="font-semibold text-lg text-blue-600">
                        Edit News
                    </h3>

                    <input
                        type="text"
                        placeholder="Title"
                        value={editNews.title}
                        onChange={(e) =>
                            setEditNews({ ...editNews, title: e.target.value })
                        }
                        className="w-full border border-gray-400 p-2 rounded" />

                    <input
                        type="text"
                        placeholder="Category"
                        value={editNews.category}
                        onChange={(e) =>
                            setEditNews({ ...editNews, category: e.target.value })
                        }
                        className="w-full border border-gray-400 p-2 rounded" />

                    <input
                        type="text"
                        placeholder="Author"
                        value={editNews.author}
                        onChange={(e) =>
                            setEditNews({ ...editNews, author: e.target.value })
                        }
                        className="w-full border border-gray-400 p-2 rounded" />

                    <input
                        type="text"
                        placeholder="Image URL"
                        value={editNews.image}
                        onChange={(e) =>
                            setEditNews({ ...editNews, image: e.target.value })
                        }
                        className="w-full border border-gray-400 p-2 rounded" />

                    <textarea
                        placeholder="Short Description"
                        rows="2"
                        value={editNews.shortDescription}
                        onChange={(e) =>
                            setEditNews({
                                ...editNews,
                                shortDescription: e.target.value,
                            })
                        }
                        className="w-full border border-gray-400 p-2 rounded" />

                    <textarea
                        placeholder="Full Content"
                        rows="5"
                        value={editNews.content}
                        onChange={(e) =>
                            setEditNews({
                                ...editNews,
                                content: e.target.value,
                            })
                        }
                        className="w-full border border-gray-400 p-2 rounded" />

                    <div className="flex gap-3">
                        <button
                            type="submit"
                            className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded cursor-pointer">
                            Update
                        </button>

                        <button
                            type="button"
                            onClick={() => setEditNews(null)}
                            className="border border-gray-400 hover:bg-red-600 px-4 py-2 rounded cursor-pointer">
                            Cancel
                        </button>
                    </div>
                </form>
            )}

            {/* ================= News List ================= */}
            {news.map(item => (
                <div
                    key={item._id}
                    className="md:flex justify-between items-center border border-gray-400 rounded p-3">
                    <img src={item.image} alt={item.title} className="w-29 rounded" />
                    <p className="font-medium py-1">{item.title}</p>

                    <div className="space-x-2">
                        <button
                            onClick={() => setEditNews(item)}
                            className="border border-blue-500 cursor-pointer text-red-600 px-3 py-1 rounded">
                            Edit
                        </button>

                        <button
                            onClick={() => deleteNews(item._id)}
                            className="bg-red-500 hover:bg-red-600 cursor-pointer text-white px-3 py-1 rounded">
                            Delete
                        </button>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default AllNews;
