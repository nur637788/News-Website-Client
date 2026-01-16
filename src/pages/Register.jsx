import { useState } from "react";
import { NavLink, useNavigate } from "react-router";
import axios from "axios";

function Register() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const handleRegister = async (e) => {
        e.preventDefault();

        if (!name || !email || !password) {
            return alert("All fields required");
        }

        try {
            setLoading(true);

            const res = await axios.post(
                "https://news-website-server-three.vercel.app/api/auth/register",
                { name, email, password }
            );

            // 🔐 save token
            localStorage.setItem("token", res.data.token);
            localStorage.setItem(
                "user",
                JSON.stringify(res.data.user)
            );

            alert("Registration successful 🎉");
            navigate("/login");

        } catch (err) {
            alert(
                err.response?.data?.message ||
                "Registration failed"
            );
        }
        finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50">
            <form onSubmit={handleRegister}
                className="bg-gray-100 p-8 rounded-md shadow w-96 border border-gray-300">
                <img src="./images/news.png" alt="News-Logo" className="w-20 m-auto" />
                <h2 className="text-2xl font-bold mb-6 text-center -mt-2 text-gray-700">
                    Register Form
                </h2>

                <input
                    type="text"
                    placeholder="Full Name"
                    className="w-full border border-gray-400 p-2 mb-4 rounded focus:bg-gray-200"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />

                <input
                    type="email"
                    placeholder="Email"
                    className="w-full border border-gray-400 p-2 mb-4 rounded focus:bg-gray-200"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />

                <input
                    type="password"
                    placeholder="Password"
                    className="w-full border border-gray-400 p-2 mb-4 rounded focus:bg-gray-200"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />

                <button
                    disabled={loading}
                    className="w-full bg-green-500 hover:bg-green-600 hover:scale-95 duration-300 text-white py-2 rounded cursor-pointer"
                >
                    {loading ? "Registering..." : "Register"}
                </button>

                <p className="text-sm mt-4 text-center text-gray-700">
                    Already have an account?{" "}
                    <NavLink
                        to="/login"
                        className="text-blue-500 hover:font-semibold"
                    >
                        Login
                    </NavLink>
                </p>
            </form>
        </div>
    );
}

export default Register;
