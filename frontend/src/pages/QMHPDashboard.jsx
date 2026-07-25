import "../components/Dashboard.css";

import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";
import StatCard from "../components/StatCard";

import ScheduleCard from "../components/ScheduleCard";
import TasksCard from "../components/TasksCard";
import QuickActions from "../components/QuickActions";
import { useState } from "react";

import {
    Calendar,
    ClipboardList,
    FileText,
    Users
} from "lucide-react";

export default function QMHPDashboard() {

    const [sidebarOpen, setSidebarOpen] = useState(true);

    return (
        <div
            className="dashboard-content"
            style={{
                marginLeft: sidebarOpen ? "260px" : "80px"
            }}
        >

        <Sidebar isOpen={sidebarOpen} />

        <div className="dashboard-content">

            <Topbar
                title="QMHP Dashboard"
                toggleSidebar={() => setSidebarOpen(!sidebarOpen)}
            />

                <h2 className="welcome-title">
                    Welcome back, Ricardo!
                </h2>

                <div className="stats">

                    <StatCard
                        icon={<Calendar size={24}/>}
                        title="Visits Today"
                        value="5"
                    />

                    <StatCard
                        icon={<FileText size={24}/>}
                        title="Notes Due"
                        value="2"
                    />

                    <StatCard
                        icon={<ClipboardList size={24}/>}
                        title="Quarterlies Due"
                        value="1"
                    />

                    <StatCard
                        icon={<Users size={24}/>}
                        title="Supervisions Due"
                        value="1"
                    />

                </div>

                <div className="dashboard-grid">

                    <ScheduleCard />

                    <TasksCard />

                </div>

                <QuickActions />

            </div>

        </div>
    );
}