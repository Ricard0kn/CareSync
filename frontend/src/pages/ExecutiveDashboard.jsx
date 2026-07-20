import "./Dashboard.css";
import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";
import StatCard from "../components/StatCard";
import AlertCard from "../components/AlertCard";

import {
    Users,
    FileClock,
    AlertCircle,
    GraduationCap
} from "lucide-react";

export default function ExecutiveDashboard() {

    return (
        <div className="dashboard">

            <Sidebar />

            <div className="dashboard-content">

                <Topbar title="Executive Dashboard" />

                <div className="stats">

                    <StatCard
                        icon={<Users size={26} />}
                        title="Active Clients"
                        value="324"
                        subtitle="+12 this week"
                    />

                    <StatCard
                        icon={<FileClock size={26} />}
                        title="Authorizations Expiring (30 days)"
                        value="14"
                    />

                    <StatCard
                        icon={<AlertCircle size={26} />}
                        title="Overdue Requirements"
                        value="11"
                    />

                    <StatCard
                        icon={<GraduationCap size={26} />}
                        title="Staff Certifications"
                        value="8"
                    />

                </div>

                <div className="dashboard-grid">

                    <AlertCard
                        title="Compliance Alerts"
                        items={[
                            "John Doe - Quarterly Review Due",
                            "Jane Smith - Authorization expires in 10 days",
                            "Michael Brown - SRA Overdue",
                            "Emily Johnson - Treatment Plan Due"
                        ]}
                    />

                    <AlertCard
                        title="Staff Alerts"
                        items={[
                            "Alex Rivera - CPR expires in 14 days",
                            "Sarah Lee - License expires in 30 days",
                            "David Wilson - Background check expires",
                        ]}
                    />

                </div>

            </div>

        </div>
    );
}