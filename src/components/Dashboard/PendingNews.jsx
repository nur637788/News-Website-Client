import { useEffect, useState } from "react";
import axios from "axios";

function PendingNews() {
    const [news, setNews] = useState([]);
    const [editNews, setEditNews] = useState(null);

    // Load pending news
    const loadData = async () => {
        const res = await axios.get("https://news-website-server-three.vercel.app/api/news/pending");
        setNews(res.data);
    };

    useEffect(() => {
        loadData();
    }, []);

    // Publish
    const publishNews = async (id) => {
        await axios.put(`http://localhost:5000/api/news/publish/${id}`);
        alert("Published ✅");
        loadData();
    };

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
            `http://localhost:5000/api/news/${editNews._id}`,
            editNews
        );
        alert("News Updated ✏️");
        setEditNews(null);
        loadData();
    };

    return (
        <div className="bg-white p-4 rounded space-y-6">

            <h2 className="text-xl font-bold text-gray-700">
                Pending News
            </h2>

            {/* ================= EDIT FORM ================= */}
            {editNews && (
                <form
                    onSubmit={updateNews}
                    className="border rounded-lg p-4 bg-gray-50 space-y-3">

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
                        className="w-full border p-2 rounded"
                    />

                    <input
                        type="text"
                        placeholder="Category"
                        value={editNews.category}
                        onChange={(e) =>
                            setEditNews({ ...editNews, category: e.target.value })
                        }
                        className="w-full border p-2 rounded"
                    />

                    <input
                        type="text"
                        placeholder="Author"
                        value={editNews.author}
                        onChange={(e) =>
                            setEditNews({ ...editNews, author: e.target.value })
                        }
                        className="w-full border p-2 rounded"
                    />

                    <input
                        type="text"
                        placeholder="Image URL"
                        value={editNews.image}
                        onChange={(e) =>
                            setEditNews({ ...editNews, image: e.target.value })
                        }
                        className="w-full border p-2 rounded"
                    />

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
                        className="w-full border p-2 rounded"
                    />

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
                        className="w-full border p-2 rounded"
                    />

                    <div className="flex gap-3">
                        <button
                            type="submit"
                            className="bg-blue-600 text-white px-4 py-2 rounded">
                            Update
                        </button>

                        <button
                            type="button"
                            onClick={() => setEditNews(null)}
                            className="border px-4 py-2 rounded">
                            Cancel
                        </button>
                    </div>
                </form>
            )}

            {/* ================= NEWS LIST ================= */}
            {news.length === 0 && (
                <p className="text-gray-500">No pending news</p>
            )}

            {news.map(item => (
                <div
                    key={item._id}
                    className="md:flex justify-between items-center border border-gray-400 rounded p-3">

                    <span className="font-medium mb-5">{item.title}</span>

                    <div className="space-x-2">
                        <button
                            onClick={() => publishNews(item._id)}
                            className="bg-green-500 hover:bg-green-600 cursor-pointer text-white px-3 py-1 rounded">
                            Publish
                        </button>

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

export default PendingNews;
