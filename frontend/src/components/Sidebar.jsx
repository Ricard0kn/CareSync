import {
    LayoutDashboard,
    Users,
    UserRound,
    ClipboardCheck,
    FileBarChart,
    ShieldAlert,
    CreditCard,
    MessageSquare,
    Settings
} from "lucide-react";

export default function Sidebar() {

    return (

        <aside className="sidebar">

            <div className="logo">
                <h2>CareConnect</h2>
                <span>EHR</span>
            </div>

            <nav>

                <a className="active">
                    <LayoutDashboard size={18}/>
                    Dashboard
                </a>

                <a>
                    <Users size={18}/>
                    Clients
                </a>

                <a>
                    <UserRound size={18}/>
                    Staff
                </a>

                <a>
                    <ClipboardCheck size={18}/>
                    Authorizations
                </a>

                <a>
                    <FileBarChart size={18}/>
                    Reports
                </a>

                <a>
                    <ShieldAlert size={18}/>
                    Compliance
                </a>

                <a>
                    <CreditCard size={18}/>
                    Billing
                </a>

                <a>
                    <MessageSquare size={18}/>
                    Messages
                </a>

                <a>
                    <Settings size={18}/>
                    Settings
                </a>

            </nav>

        </aside>

    );
}