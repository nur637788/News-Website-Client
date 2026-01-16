import { useNavigate } from "react-router";

function Logout() {
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem("admin");
        navigate("/");
    };

    return (
        <button
            onClick={handleLogout}
            className="bg-red-500 hover:bg-red-600 text-white px-4 py-1 rounded cursor-pointer">
            Logout
        </button>
    );
}

export default Logout;
