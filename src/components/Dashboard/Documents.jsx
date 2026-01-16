import { useEffect, useState } from "react";

function Documents() {
    const [documents, setDocuments] = useState([]);
    const [title, setTitle] = useState("");
    const [file, setFile] = useState(null);
    const [editId, setEditId] = useState(null);

    // 🔹 Load from localStorage
    useEffect(() => {
        const stored = JSON.parse(localStorage.getItem("adminDocuments"));
        if (stored) setDocuments(stored);
    }, []);

    // 🔹 Save to localStorage
    useEffect(() => {
        localStorage.setItem("adminDocuments", JSON.stringify(documents));
    }, [documents]);

    // 🔹 Upload / Update
    const handleUpload = () => {
        if (!title || (!file && editId === null)) {
            alert("ডকুমেন্ট নাম ও ফাইল দিন");
            return;
        }

        // Edit
        if (editId) {
            setDocuments(
                documents.map((doc) =>
                    doc.id === editId ? { ...doc, title } : doc
                )
            );
            setEditId(null);
        }
        // Upload
        else {
            const newDoc = {
                id: Date.now(),
                title,
                type: file.type.split("/")[1]?.toUpperCase(),
                date: new Date().toISOString().split("T")[0],
                url: URL.createObjectURL(file),
            };
            setDocuments([...documents, newDoc]);
        }

        setTitle("");
        setFile(null);
    };

    // 🔹 Delete
    const handleDelete = (id) => {
        if (window.confirm("ডকুমেন্টটি মুছে ফেলবেন?")) {
            setDocuments(documents.filter((d) => d.id !== id));
        }
    };

    // 🔹 Edit
    const handleEdit = (doc) => {
        setTitle(doc.title);
        setEditId(doc.id);
    };

    return (
        <div className="p-5 bg-white text-slate-200 rounded-md">
            <h1 className="text-xl md:text-2xl font-bold mb-4 text-gray-700">
                ডকুমেন্টস ম্যানেজমেন্ট
            </h1>

            {/* Upload Section */}
            <div className="bg-green-900 p-4 rounded-lg mb-6">
                <h2 className="text-lg font-semibold mb-3">
                    {editId ? "ডকুমেন্ট এডিট করুন" : "নতুন ডকুমেন্ট আপলোড"}
                </h2>

                <div className="flex flex-col md:flex-row gap-3">
                    <input
                        type="text"
                        placeholder="ডকুমেন্টের নাম"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        className="flex-1 p-2 rounded bg-slate-900 border border-slate-700"
                    />

                    {!editId && (
                        <input
                            type="file"
                            onChange={(e) => setFile(e.target.files[0])}
                            className="flex-1 p-2 rounded bg-slate-900 border border-slate-700"
                        />
                    )}

                    <button
                        onClick={handleUpload}
                        className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded"
                    >
                        {editId ? "Update" : "Upload"}
                    </button>
                </div>
            </div>

            {/* Documents Table */}
            <div className="bg-blue-900 rounded-lg p-4">
                <h2 className="text-lg font-semibold mb-3">
                    ডকুমেন্ট তালিকা
                </h2>

                <table className="w-full text-sm">
                    <thead className="text-slate-400 border-b border-slate-600">
                        <tr>
                            <th className="py-2 text-left">নাম</th>
                            <th>টাইপ</th>
                            <th>তারিখ</th>
                            <th className="text-right">একশন</th>
                        </tr>
                    </thead>
                    <tbody>
                        {documents.map((doc) => (
                            <tr
                                key={doc.id}
                                className="border-b border-slate-600"
                            >
                                <td className="py-2">{doc.title}</td>
                                <td>{doc.type}</td>
                                <td>{doc.date}</td>
                                <td className="text-right space-x-2">
                                    <a
                                        href={doc.url}
                                        download
                                        className="text-blue-400 hover:underline"
                                    >
                                        Download
                                    </a>

                                    <button
                                        onClick={() => handleEdit(doc)}
                                        className="text-yellow-400 hover:underline"
                                    >
                                        Edit
                                    </button>

                                    <button
                                        onClick={() => handleDelete(doc.id)}
                                        className="text-red-400 hover:underline"
                                    >
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))}

                        {documents.length === 0 && (
                            <tr>
                                <td
                                    colSpan="4"
                                    className="text-center py-4 text-slate-400"
                                >
                                    কোনো ডকুমেন্ট নেই
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default Documents;
