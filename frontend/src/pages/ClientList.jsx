import "../components/Dashboard.css";
import Topbar from "../components/Topbar";
import ClientTable from "../components/ClientTable";

import {
  Plus,
  Download,
  Search,
  Filter
} from "lucide-react";

export default function ClientList() {
  return (
    <div className="page">

      <Topbar />

      <main className="page-content">

        <div className="page-header">

          <div>
            <h1>Clients</h1>

            <div className="tabs">
              <button className="active">All Clients</button>
              <button>My Caseload</button>
              <button>Discharged</button>
            </div>
          </div>

          <div className="header-buttons">

            <button className="primary-btn">
              <Plus size={16}/>
              Add Client
            </button>

            <button className="secondary-btn">
              <Download size={16}/>
              Export
            </button>

          </div>

        </div>

        <div className="filters">

          <div className="search">

            <Search size={18}/>

            <input
              placeholder="Search clients..."
            />

          </div>

          <select>
            <option>QMHP</option>
          </select>

          <select>
            <option>Service Type</option>
          </select>

          <select>
            <option>Authorization Status</option>
          </select>

          <select>
            <option>Risk Level</option>
          </select>

          <button className="filter-btn">
            <Filter size={16}/>
            Filters
          </button>

        </div>

        <ClientTable/>

      </main>

    </div>
  );
}