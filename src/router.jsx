import { createBrowserRouter } from "react-router";
import App from "./App";
// Main Pages
import Home from "./pages/Home";
import CategoryPage from "./pages/CategoryPage";
import PrivacyPolocy from "./pages/PrivacyPolocy";
import NewsDetails from "./pages/NewsDetails";
import Login from "./pages/Login";
import Register from "./pages/Register";
import ErrorPage from "./pages/ErrorPage";
import AdminLogin from "./components/admin/AdminLogin";
// Admin Pages
import AdminLayout from "./components/admin/AdminLayout";
import ChangeAdmin from "./components/Dashboard/ChangeAdmin";
import AdminDashboard from "./components/Dashboard/AdminDashboard";
import Team from "./components/Dashboard/Team";
import Calender from "./components/Dashboard/Calender";
import Reports from "./components/Dashboard/Reports";
import UplodeNews from "./components/Dashboard/UplodeNews";
import Documents from "./components/Dashboard/Documents";
import TermsOfUse from "./components/Footer/TermsOfUse";
import CookiePolicy from "./components/Footer/CookiePolicy";
import PressKit from "./components/Footer/PressKit";
import Jobs from "./components/Footer/Jobs";
import Contact from "./components/Footer/Contact";
import About from "./components/Footer/About";
import Branding from "./components/Footer/Branding";
import Design from "./components/Footer/Design";
import Marketing from "./components/Footer/Marketing";
import Advertisement from "./components/Footer/Advertisement";
// footer page





const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        errorElement: <ErrorPage />,
        children: [
            { index: true, element: <Home /> },
            { path: "category/:slug", element: <CategoryPage /> },
            { path: "news/:slug", element: <NewsDetails /> },
            { path: "privacy", element: <PrivacyPolocy /> },
            { path: "login", element: <Login /> },
            { path: "register", element: <Register /> },
            { path: "adminLogin", element: <AdminLogin /> },

            { path: "termsOfUse", element: <TermsOfUse /> },
            { path: "cookiePolicy", element: <CookiePolicy /> },
            { path: "pressKit", element: <PressKit /> },
            { path: "jobs", element: <Jobs /> },
            { path: "contact", element: <Contact /> },
            { path: "about", element: <About /> },
            { path: "branding", element: <Branding /> },
            { path: "design", element: <Design /> },
            { path: "marketing", element: <Marketing /> },
            { path: "advertisement", element: <Advertisement /> },

        ],
    },

    // 🔐 Admin Dashboard Routing
    {
        path: "/adminDashboard",
        element: <AdminLayout />,
        children: [
            { index: true, element: <AdminDashboard /> }, // /admin
            { path: "team", element: <Team /> },
            // { path: "projects", element: <Projects /> },
            { path: "calendar", element: <Calender /> },
            { path: "documents", element: <Documents /> },
            { path: "reports", element: <Reports /> },
            { path: "profile", element: <ChangeAdmin /> },
            { path: "AddNews", element: <UplodeNews /> },

        ],
    },
]);

export default router;
