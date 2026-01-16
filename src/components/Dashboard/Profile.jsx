import React, { useEffect, useState } from 'react'
import { useNavigate } from "react-router";

function Profile() {
    const navigate = useNavigate();

    // 🔹 State for user info
    const [user, setUser] = useState({
        name: "Abdun Nur",
        role: "Admin",
        avatar: "https://i.pravatar.cc/40",
    });

    // 🔹 Load user info from localStorage
    useEffect(() => {
        const storedUser = JSON.parse(localStorage.getItem("adminUser"));
        if (storedUser) {
            setUser(storedUser);
        }
    }, []);

    // 🔹 When sidebar clicked → go to profile/change page
    const handleUserClick = () => {
        navigate("/profile");
    };
    return (
        <div>
            {/* User */}
            <div
                onClick={handleUserClick}
                className="py-2 border-t border-slate-800 flex items-center gap-2 cursor-pointer">
                <img
                    src={user.avatar || "./images/nur-logo.png"}
                    alt="User Iamge"
                    className="w-6 md:w-10 h-6 md:h-10 rounded-full ring-1 ring-blue-400 object-cover" />
                <div>
                    <p className="text-[7px] md:text-sm font-semibold">{user.name || 'Abdun Nur'}</p>
                    <p className="text-[6px] md:text-xs text-slate-400">Admin</p>
                </div>
            </div>
        </div>
    )
}

export default Profile
