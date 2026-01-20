import { useEffect, useState } from "react";
import axios from "axios";
import { Line, Doughnut } from "react-chartjs-2";

// ✅ ChartJS Register
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    ArcElement,
    Tooltip,
    Legend,
} from "chart.js";

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    ArcElement,
    Tooltip,
    Legend
);

function AdminDashboard( ) {
    const [stats, setStats] = useState(null);

    useEffect(() => {
        axios
            .get("https://news-website-server-three.vercel.app/api/news/api/dashboard/stats")
            .then((res) => setStats(res.data));
    }, []);

    if (!stats) return <p className="text-red-500 flex items-center justify-center min-h-screen text-xl">Loading...</p>;

    const lineData = {
        labels: stats.monthlyGrowth.map((m) => `Month ${m._id}`),
        datasets: [
            {
                label: "News Growth",
                data: stats.monthlyGrowth.map((m) => m.total),
                borderWidth: 2,
            },
        ],
    };

    const doughnutData = {
        labels: ["Published", "Pending"],
        datasets: [
            {
                data: [stats.publishedNews, stats.pendingNews],
            },
        ],
    };

    return (

        <div>
            <h1 className="text-xl md:text-2xl font-bold mb-4 text-gray-400">
                Dashboard
            </h1>
            <div className="space-y-6">
                {/* Cards */}
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    <Card title="Total News" value={stats.totalNews} />
                    <Card title="Published News" value={stats.publishedNews} />
                    <Card title="Pending News" value={stats.pendingNews} />
                    <Card title="Categories" value={stats.categories} />
                    <Card title="Users" value={stats.users} />
                    <Card title="Admins" value={stats.admins} />
                </div>

                {/* Charts */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div className="bg-gray-200 p-4 rounded-lg">
                        <h3 className="font-semibold mb-2">Monthly News Growth</h3>
                        <Line
                            key={`line-${stats.totalNews}`}
                            data={lineData}
                        />
                    </div>

                    <div className="bg-gray-200 p-4 rounded-lg">
                        <h3 className="font-semibold mb-2">News Status</h3>
                        <Doughnut
                            key={`doughnut-${stats.pendingNews}`}
                            data={doughnutData}
                        />
                    </div>
                </div>

                {/* Admin Activity */}
                <div className="bg-white p-4 rounded-lg">
                    You have <b>{stats.pendingNews}</b> pending news waiting for approval.
                </div>

            </div>
        </div>
    );
}

const Card = ({ title, value }) => (
    <div className="bg-white p-4 rounded-lg text-center shadow">
        <p className="text-green-500 text-sm">{title}</p>
        <h2 className="text-2xl font-bold text-blue-600">{value}</h2>
    </div>
);

export default AdminDashboard;
