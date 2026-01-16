import StatBox from "./StatBox";
import {
    LineChart,
    Line,
    PieChart,
    Pie,
    Cell,
    Tooltip,
    ResponsiveContainer
} from "recharts";

function AdminDashboard() {

    // 📊 Line Chart Data (News Growth)
    const newsData = [
        { month: "Jan", news: 20 },
        { month: "Feb", news: 35 },
        { month: "Mar", news: 55 },
        { month: "Apr", news: 80 },
        { month: "May", news: 120 },
    ];

    // 🥧 Pie Chart Data (News Status)
    const statusData = [
        { name: "Published", value: 95 },
        { name: "Pending", value: 25 },
    ];

    const COLORS = ["#22c55e", "#f97316"];

    return (
        <div className="min-h-screen bg-gray-200 rounded-md p-2">

            <h1 className="text-xl md:text-3xl font-bold mb-8 text-pink-950">
                Admin Dashboard
            </h1>

            {/* Stats */}
            <div className="grid md:grid-cols-3 gap-6 mb-10">
                <StatBox title="Total News" value="120" />
                <StatBox title="Published News" value="95" />
                <StatBox title="Pending News" value="25" />
                <StatBox title="Categories" value="12" />
                <StatBox title="Users" value="350" />
                <StatBox title="Admins" value="2" />
            </div>

            {/* Charts Section */}
            <div className="grid md:grid-cols-2 gap-6 mb-10">

                {/* Line Chart */}
                <div className="bg-white p-5 rounded-lg shadow">
                    <h2 className="font-semibold mb-4">
                        Monthly News Growth
                    </h2>

                    <ResponsiveContainer width="100%" height={250}>
                        <LineChart data={newsData}>
                            <Tooltip />
                            <Line
                                type="monotone"
                                dataKey="news"
                                stroke="#2563eb"
                                strokeWidth={3}
                            />
                        </LineChart>
                    </ResponsiveContainer>
                </div>

                {/* Pie Chart */}
                <div className="bg-white p-5 rounded-lg shadow">
                    <h2 className="font-semibold mb-4">
                        News Status
                    </h2>

                    <ResponsiveContainer width="100%" height={250}>
                        <PieChart>
                            <Pie
                                data={statusData}
                                dataKey="value"
                                nameKey="name"
                                innerRadius={50}
                                outerRadius={90}
                            >
                                {statusData.map((_, index) => (
                                    <Cell
                                        key={index}
                                        fill={COLORS[index]}
                                    />
                                ))}
                            </Pie>
                            <Tooltip />
                        </PieChart>
                    </ResponsiveContainer>

                    <div className="flex justify-center gap-4 mt-3 text-sm">
                        <span className="flex items-center gap-1">
                            <span className="w-3 h-3 bg-green-500 inline-block"></span>
                            Published
                        </span>
                        <span className="flex items-center gap-1">
                            <span className="w-3 h-3 bg-orange-500 inline-block"></span>
                            Pending
                        </span>
                    </div>
                </div>
            </div>

            {/* Admin Info */}
            <div className="bg-white p-6 rounded-lg shadow">
                <h2 className="font-semibold text-lg mb-3">
                    Admin Activity
                </h2>
                <p className="text-gray-600">
                    You have <b>5 pending news</b> waiting for approval.
                </p>
            </div>
        </div>
    );
}

export default AdminDashboard;
