import { useState, useEffect } from "react";
import { useNavigate } from "react-router";

function AdminLogin() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    useEffect(() => {
        if (!localStorage.getItem("adminUser")) {
            localStorage.setItem(
                "adminUser",
                JSON.stringify({
                    email: "admin@email.com",
                    password: "1234"
                })
            );
        }
    }, []);

    const handleLogin = (e) => {
        e.preventDefault();

        const adminUser = JSON.parse(localStorage.getItem("adminUser"));

        if (
            email === adminUser.email &&
            password === adminUser.password
        ) {
            localStorage.setItem("admin", true);
            navigate("/adminDashboard");
        } else {
            alert("Invalid Admin Credentials");
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <form
                onSubmit={handleLogin}
                className="bg-white p-8 rounded-md shadow w-96 border border-gray-300">
                <img src="./images/news.png" alt="News-Logo" className="w-20 m-auto" />
                <h2 className="text-2xl font-bold mb-6 text-center -mt-2 text-gray-700">
                    Admin Login
                </h2>

                <input
                    type="email"
                    placeholder="Admin Email"
                    required
                    className="w-full border border-gray-500 p-2 mb-4 rounded focus:bg-gray-200"
                    onChange={(e) => setEmail(e.target.value)} />

                <input
                    type="password"
                    placeholder="Admin Password"
                    required
                    className="w-full border border-gray-500 p-2 mb-4 rounded focus:bg-gray-200"
                    onChange={(e) => setPassword(e.target.value)} />

                <button className="w-full bg-red-600 hover:bg-red-700 text-white py-2 rounded cursor-pointer">
                    Login
                </button>
            </form>
        </div>
    );
}

export default AdminLogin;
