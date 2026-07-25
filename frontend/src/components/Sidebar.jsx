import {
    LayoutDashboard,
    Users,
    UserRound,
    ClipboardCheck,
    FileBarChart,
    ShieldAlert,
    CreditCard,
    MessageSquare,
    Settings,
    LogOut
} from "lucide-react";

import { NavLink, useNavigate } from "react-router-dom";

export default function Sidebar({ isOpen = true }) {

    const navigate = useNavigate();

    const menuItems = [
        {
            title: "Dashboard",
            icon: <LayoutDashboard size={20} />,
            path: "/Dashboard"
        },
        {
            title: "Clients",
            icon: <Users size={20} />,
            path: "/ClientList"
        },
        {
            title: "Staff",
            icon: <UserRound size={20} />,
            path: "/ClientProfile"
        },
        {
            title: "Authorizations",
            icon: <ClipboardCheck size={20} />,
            path: "/Authorization"
        },
        {
            title: "Progress Notes",
            icon: <FileBarChart size={20} />,
            path: "/Notes"
        },
        {
            title: "Supervision",
            icon: <ShieldAlert size={20} />,
            path: "/Supervision"
        },
        {
            title: "Billing",
            icon: <CreditCard size={20} />,
            path: "/Billing"
        },
        {
            title: "Messages",
            icon: <MessageSquare size={20} />,
            path: "/Messages"
        },
        {
            title: "Settings",
            icon: <Settings size={20} />,
            path: "/Settings"
        }
    ];

    function logout() {
        localStorage.removeItem("token");
        navigate("/");
    }

    return (
        <aside className={`sidebar ${isOpen ? "" : "collapsed"}`}>

            <div className="logo">

                <h2>{isOpen ? "CareConnect" : "CC"}</h2>

                {isOpen && <span>EHR</span>}

            </div>

            <nav className="sidebar-nav">

                {menuItems.map((item) => (

                    <NavLink
                        key={item.title}
                        to={item.path}
                        className={({ isActive }) =>
                            isActive
                                ? "sidebar-link active"
                                : "sidebar-link"
                        }
                    >
                        {item.icon}

                        {isOpen && <span>{item.title}</span>}

                    </NavLink>

                ))}

            </nav>

            <div className="sidebar-footer">

                <button
                    className="logout-btn"
                    onClick={logout}
                >
                    <LogOut size={20} />

                    {isOpen && <span>Logout</span>}

                </button>

            </div>

        </aside>
    );
}