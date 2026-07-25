import "../components/Dashboard.css";

import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";

import AuthorizationOverview from "../components/AuthorizationOverview";
import UpcomingRequirements from "../components/UpcomingRequirements";
import RecentNotes from "../components/RecentNotes";

//import profilePic from "../assets/profile.jpg";

export default function ClientProfile() {

    const client = {
        name: "John Doe",
        dob: "01/01/2000 (24)",
        medicaid: "1234567890",
        phone: "(555) 123-4567",
        service: "MHSS",
        qmhp: "Ricardo QMHP",
        supervisor: "Alex Supervisor",
        risk: "Moderate"
    };

    return (

        <div className="dashboard">

            <Sidebar />

            <div className="dashboard-content">

                <Topbar title="Client Profile" />

                <button className="back-button">
                    ← Back to Clients
                </button>

                <div className="profile-card">

                    <div className="profile-left">

                        <img
                            //src={profilePic}
                            alt="Client"
                            className="profile-image"
                        />

                        <div>

                            <h2>{client.name}</h2>

                            <p>DOB: {client.dob}</p>

                            <p>Medicaid: {client.medicaid}</p>

                            <p>Phone: {client.phone}</p>

                        </div>

                    </div>

                    <div className="profile-right">

                        <div>

                            <label>Service Type</label>

                            <strong>{client.service}</strong>

                        </div>

                        <div>

                            <label>Assigned QMHP</label>

                            <strong>{client.qmhp}</strong>

                        </div>

                        <div>

                            <label>Supervisor</label>

                            <strong>{client.supervisor}</strong>

                        </div>

                        <div>

                            <label>Risk Level</label>

                            <span className="risk moderate">
                                {client.risk}
                            </span>

                        </div>

                    </div>

                </div>

                <AuthorizationOverview />

                <div className="two-column">

                    <UpcomingRequirements />

                    <RecentNotes />

                </div>

            </div>

        </div>

    );

}