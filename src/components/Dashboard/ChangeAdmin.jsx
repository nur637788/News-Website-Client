import { useState, useEffect } from "react";
import { useNavigate } from "react-router";

function ChangeAdmin() {
    const navigate = useNavigate()
    // 🔹 State for admin info
    const [adminInfo, setAdminInfo] = useState({
        name: "Abdun Nur",
        email: "admin@email.com",
        password: "1234",
        avatar: "https://i.pravatar.cc/40" // default avatar
    });

    // 🔹 Load existing info from localStorage
    useEffect(() => {
        const stored = JSON.parse(localStorage.getItem("adminUser"));
        if (stored) {
            setAdminInfo(stored);
        } else {
            localStorage.setItem("adminUser", JSON.stringify(adminInfo));
        }
    }, []);

    // 🔹 Handle file upload and convert to base64
    const handleAvatarChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setAdminInfo({ ...adminInfo, avatar: reader.result });
            };
            reader.readAsDataURL(file); // convert image to base64
        }
    };

    // 🔹 Update handler
    const handleUpdate = () => {
        const { name, email, password, avatar } = adminInfo;
        if (!name || !email || !password || !avatar) {
            alert("All fields are required");
            return;
        }

        localStorage.setItem("adminUser", JSON.stringify(adminInfo));
        alert("Admin info updated successfully!");
        navigate('/adminDashboard')
    };

    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 rounded-md">
            <div className="bg-gray-200 max-w-md m-auto px-4 pb-6 pt-2 rounded-md shadow-sm border border-gray-300">

                {/* Back Button */}
                {/* <button
                    onClick={() => navigate(-1)}
                    className="flex items-center gap-1 text-sm font-medium my-2 text-blue-600 hover:text-blue-800">
                    <IoArrowBack size={18} /> Back </button> */}
                <img src="http://localhost:5173/images/news.png" alt="News-Logo" className="w-20 m-auto" />
                <h2 className="text-xl md:text-2xl text-gray-700 font-bold mb-4 -mt-2 text-center">
                    Change Admin Info </h2>

                {/* Name */}
                <input
                    type="text"
                    placeholder="Name"
                    className="w-full border border-gray-400 p-2 mb-3 rounded"
                    value={adminInfo.name}
                    onChange={(e) =>
                        setAdminInfo({ ...adminInfo, name: e.target.value })
                    } />

                {/* Email */}
                <input
                    type="email"
                    placeholder="Email"
                    className="w-full border border-gray-400 p-2 mb-3 rounded"
                    value={adminInfo.email}
                    onChange={(e) =>
                        setAdminInfo({ ...adminInfo, email: e.target.value })
                    } />

                {/* Password */}
                <input
                    type="password"
                    placeholder="Password"
                    className="w-full border border-gray-400 p-2 mb-3 rounded"
                    value={adminInfo.password}
                    onChange={(e) =>
                        setAdminInfo({ ...adminInfo, password: e.target.value })
                    } />

                {/* Avatar / File Upload */}
                <input
                    type="file"
                    accept="image/*"
                    className="w-full border border-gray-400 p-2 mb-3 rounded cursor-pointer hover:text-gray-600"
                    onChange={handleAvatarChange} />

                {/* Live Preview */}
                <div className="flex items-center gap-2 mb-3 mt-2">
                    <img
                        src={adminInfo.avatar || "./images/nur-logo.png"}
                        alt="Avatar Preview"
                        className="w-12 h-12 rounded-full ring-1 ring-blue-400 object-cover" />
                    <p className="font-semibold">{adminInfo.name || 'Abdun Nur'}</p>
                </div>

                {/* Update Button */}
                <button
                    onClick={handleUpdate}
                    className="w-full bg-green-600 hover:bg-green-700 text-white py-2 rounded cursor-pointer">
                    Update
                </button>
            </div>
        </div>
    );
}

export default ChangeAdmin;
