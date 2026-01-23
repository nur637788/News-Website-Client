import { useState } from "react";
import { NavLink, useNavigate } from "react-router";
import axios from "axios";

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();

        if (!email || !password) {
            return alert("Email & Password required");
        }

        try {
            setLoading(true);

            const res = await axios.post(
                "https://news-website-server-three.vercel.app/api/auth/login",
                { email, password }
            );

            // 🔐 Save token & user
            localStorage.setItem("token", res.data.token);
            localStorage.setItem(
                "user",
                JSON.stringify(res.data.user)
            );

            alert("Login successful 🎉");
            navigate("/");

        } catch (err) {
            alert(
                err.response?.data?.message ||
                "Invalid credentials"
            );
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50">
            <form
                onSubmit={handleLogin}
                className="bg-gray-100 p-8 rounded-md shadow w-96 border border-gray-300">
                <img src="./images/news.png" alt="News-Logo" className="w-20 m-auto" />
                <h2 className="text-2xl font-bold mb-6 text-center -mt-2 text-gray-700">
                    Login Form
                </h2>

                <input
                    type="email"
                    placeholder="Email"
                    className="w-full border border-gray-400 p-2 mb-4 rounded focus:bg-gray-200"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)} />

                <input
                    type="password"
                    placeholder="Password"
                    className="w-full border border-gray-400 p-2 mb-4 rounded focus:bg-gray-200"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)} />

                <button
                    disabled={loading}
                    className="w-full bg-blue-500 hover:bg-blue-600 hover:scale-95 duration-300 text-white py-2 rounded cursor-pointer">
                    {loading ? "Logging in..." : "Login"}
                </button>

                <p className="text-sm mt-4 text-center text-gray-700">
                    Don’t have an account?{" "}
                    <NavLink
                        to="/register"
                        className="text-blue-500 hover:font-semibold">
                        Register
                    </NavLink>
                </p>
            </form>
        </div>
    );
}

export default Login;
