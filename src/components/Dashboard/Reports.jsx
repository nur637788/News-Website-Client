import axios from "axios";
import { useEffect, useState } from "react";

function Reports() {
    const [stats, setStats] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios
            .get("https://news-website-server-three.vercel.app/api/dashboard/stats")
            .then((res) => {
                setStats(res.data);
                setLoading(false);
            })
            .catch(() => setLoading(false));
    }, []);

    if (loading) {
        return <p className="text-gray-500">Loading reports...</p>;
    }

    return (
        <div className="p-3 bg-gray-200 rounded-md">

            <h1 className="text-xl md:text-2xl font-bold mb-4 text-gray-600">
                রিপোর্টস (Reports)
            </h1>

            {/* ===== SUMMARY CARDS ===== */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">

                <Card
                    title="মোট সংবাদ"
                    value={stats.totalNews}
                    color="bg-blue-800"
                />

                <Card
                    title="আজকের প্রকাশিত সংবাদ"
                    value={stats.todayPublished}
                    color="bg-green-800"
                />

                <Card
                    title="মোট ভিউস"
                    value={stats.totalViews}
                    color="bg-red-800"
                />

            </div>

            {/* ===== CATEGORY REPORT ===== */}
            <div className="bg-pink-400 text-black rounded-lg p-4 mb-6">
                <h2 className="font-semibold mb-3">
                    ক্যাটাগরি অনুযায়ী সংবাদ
                </h2>

                {/* <ul className="space-y-2 text-sm">
                    {stats.categories.map(cat => (
                        <li
                            key={cat._id}
                            className="flex justify-between">
                            <span>{cat._id}</span>
                            <span>{cat.totalNews} টি</span>
                        </li>
                    ))}
                </ul> */}
            </div>

            {/* ===== POPULAR NEWS ===== */}
            <div className="bg-purple-400 text-black rounded-lg p-4">
                <h2 className="text-lg font-semibold mb-3">
                    জনপ্রিয় সংবাদ
                </h2>

                <table className="w-full text-sm text-left">
                    <thead className="border-b border-slate-700">
                        <tr>
                            <th className="py-2">শিরোনাম</th>
                            <th>ক্যাটাগরি</th>
                            <th>ভিউস</th>
                        </tr>
                    </thead>

                    <tbody className="text-xs md:text-sm">
                        <tr className="border-b">
                            <td className="py-2">জাতীয় নির্বাচনের প্রস্তুতি</td>
                            <td>রাজনীতি</td> <td>১২,৩০০</td>
                        </tr>
                        <tr className="border-b">
                            <td className="py-2">বাংলাদেশ জয় পেল শেষ ওভারে</td>
                            <td>খেলা</td> <td>৯,৮৫০</td>
                        </tr>
                        <tr className="border-b">
                            <td className="py-2">নতুন সিনেমা মুক্তি পাচ্ছে শুক্রবার</td>
                            <td>বিনোদন</td> <td>৭,২০০</td>
                        </tr>

                    </tbody>
                </table>
            </div>
        </div>
    );
}

const Card = ({ title, value, color }) => (
    <div className={`${color} p-4 rounded-lg shadow text-white`}>
        <h3 className="text-sm">{title}</h3>
        <p className="text-2xl font-bold mt-1">{value}</p>
    </div>
);

export default Reports;
