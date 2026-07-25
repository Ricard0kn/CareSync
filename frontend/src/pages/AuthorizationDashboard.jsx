import "../components/Dashboard.css";

import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";
import StatCard from "../components/StatCard";

import {
    FileCheck,
    CalendarClock,
    AlertTriangle,
    XCircle,
    Search,
    Filter,
    Download
} from "lucide-react";
import { useState } from "react";

export default function AuthorizationDashboard() {
    
    const authorizations = [
        {
            client: "John Doe",
            auth: "AUTH-2024-00125",
            service: "MHSS",
            end: "06/15/2024",
            approved: 100,
            used: 62,
            remaining: 38,
            status: "Yellow"
        },
        {
            client: "Jane Smith",
            auth: "AUTH-2024-00126",
            service: "IIH",
            end: "05/30/2024",
            approved: 80,
            used: 72,
            remaining: 8,
            status: "Red"
        },
        {
            client: "Michael Brown",
            auth: "AUTH-2024-00127",
            service: "MHSS",
            end: "07/10/2024",
            approved: 120,
            used: 45,
            remaining: 75,
            status: "Green"
        },
        {
            client: "Emily Johnson",
            auth: "AUTH-2024-00128",
            service: "IIH",
            end: "06/20/2024",
            approved: 90,
            used: 60,
            remaining: 30,
            status: "Yellow"
        },
        {
            client: "Chris Davis",
            auth: "AUTH-2024-00129",
            service: "MHSS",
            end: "07/05/2024",
            approved: 100,
            used: 20,
            remaining: 80,
            status: "Green"
        }
    ];

    return (

        <div className="dashboard">

            <Sidebar />

            <div className="dashboard-content">

                <Topbar title="Authorization Dashboard" />

                <div className="stats">

                    <StatCard
                        icon={<FileCheck size={24}/>}
                        title="Total Authorizations"
                        value="128"
                    />

                    <StatCard
                        icon={<CalendarClock size={24}/>}
                        title="Expiring in 30 Days"
                        value="14"
                    />

                    <StatCard
                        icon={<AlertTriangle size={24}/>}
                        title="Expiring in 14 Days"
                        value="6"
                    />

                    <StatCard
                        icon={<XCircle size={24}/>}
                        title="Expired"
                        value="3"
                    />

                </div>

                <div className="dashboard-card">

                    <div className="table-toolbar">

                        <div className="search-box">
                            <Search size={18}/>
                            <input
                                placeholder="Search authorizations..."
                            />
                        </div>

                        <select>
                            <option>Status</option>
                        </select>

                        <select>
                            <option>Service Type</option>
                        </select>

                        <select>
                            <option>QMHP</option>
                        </select>

                        <button className="filter-btn">
                            <Filter size={16}/>
                            Filters
                        </button>

                        <button className="export-btn">
                            <Download size={16}/>
                            Export
                        </button>

                    </div>

                    <table className="auth-table">

                        <thead>

                            <tr>
                                <th>Client</th>
                                <th>Auth #</th>
                                <th>Service</th>
                                <th>Auth End Date</th>
                                <th>Approved</th>
                                <th>Used</th>
                                <th>Remaining</th>
                                <th>Status</th>
                            </tr>

                        </thead>

                        <tbody>

                            {authorizations.map((item,index)=>(

                                <tr key={index}>

                                    <td>{item.client}</td>
                                    <td>{item.auth}</td>
                                    <td>{item.service}</td>
                                    <td>{item.end}</td>
                                    <td>{item.approved}</td>
                                    <td>{item.used}</td>
                                    <td>{item.remaining}</td>

                                    <td>
                                        <span className={`status ${item.status.toLowerCase()}`}>
                                            {item.status}
                                        </span>
                                    </td>

                                </tr>

                            ))}

                        </tbody>

                    </table>

                </div>

            </div>

        </div>

    );

}