import { NavLink, Outlet } from "react-router";
import Profile from "../Dashboard/Profile";
import Logout from "../Dashboard/Logout";


function AdminLayout() {


    return (
        <div className="max-w-6xl min-h-screen flex bg-slate-950 text-slate-200 mx-auto my-5 rounded">

            {/* Sidebar */}
            <aside className="w-30 lg:w-64 bg-slate-950 border-r border-slate-800 flex flex-col rounded-l">

                {/* Logo */}
                <div className="h-16 flex items-center px-4 text-xl font-bold text-blue-400">
                    Admin
                </div>

                {/* Menu */}
                <nav className="flex-1 space-y-1">
                    <MenuLink to="/adminDashboard" label="Dashboard" />
                    <MenuLink to="/adminDashboard/team" label="Team" />
                    <MenuLink to="/adminDashboard/projects" label="Projects" />
                    <MenuLink to="/adminDashboard/calendar" label="Calendar" />
                    <MenuLink to="/adminDashboard/documents" label="Documents" />
                    <MenuLink to="/adminDashboard/reports" label="Reports" />
                    <MenuLink to="/adminDashboard/addNews" label="Add News" />

                </nav>
                <div className="pl-4 mb-1">
                    <Logout />
                </div>
                <MenuLink to="/adminDashboard/profile" label={<Profile />} />

            </aside>

            {/* Main Content */}
            <main className="flex-1 p-2">
                <div className="h-full text-black border border-dashed border-slate-700 rounded-xl bg-slate-900/50">
                    <Outlet />

                </div>
            </main>

        </div>
    );
}

export default AdminLayout;

function MenuLink({ to, label }) {
    return (
        <NavLink
            to={to}
            end
            className={({ isActive }) =>
                `flex items-center px-4 py-2 text-sm font-medium
        ${isActive
                    ? "bg-slate-800 text-white"
                    : "text-slate-400 hover:bg-slate-800 hover:text-white"}`
            }
        >
            {label}
        </NavLink>
    );
}
