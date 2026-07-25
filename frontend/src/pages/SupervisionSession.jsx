import "../components/Dashboard.css";
import {
  ArrowLeft,
  Calendar,
  Clock3,
  ChevronDown,
  Users,
  FileCheck,
  ShieldAlert,
  MessageSquare
} from "lucide-react";

export default function SupervisionSession() {
  return (
    <div className="progress-page">

      <div className="progress-header">

        <button className="back-link">
          <ArrowLeft size={16}/>
          Back to Supervision
        </button>

        <h1>Supervision Session</h1>

        <span className="draft-text">
          Draft Saved 2:30 PM
        </span>

      </div>

      <div className="progress-container">

        {/* LEFT SIDE */}

        <div className="progress-left">

          <div className="top-fields">

            <div className="field">

              <label>Date <span>*</span></label>

              <div className="input-icon">

                <input
                  defaultValue="05/20/2024"
                  readOnly
                />

                <Calendar size={18}/>

              </div>

            </div>

            <div className="field">

              <label>Start Time <span>*</span></label>

              <div className="input-icon">

                <input
                  defaultValue="1:00 PM"
                  readOnly
                />

                <Clock3 size={18}/>

              </div>

            </div>

            <div className="field">

              <label>End Time <span>*</span></label>

              <div className="input-icon">

                <input
                  defaultValue="2:00 PM"
                  readOnly
                />

                <Clock3 size={18}/>

              </div>

            </div>

            <div className="field">

              <label>Clinician <span>*</span></label>

              <div className="select-box">

                Ricardo QMHP

                <ChevronDown size={18}/>

              </div>

            </div>

            <div className="field">

              <label>Supervisor <span>*</span></label>

              <div className="select-box">

                Alex Supervisor

                <ChevronDown size={18}/>

              </div>

            </div>

            <div className="field">

              <label>Service Type</label>

              <div className="select-box">

                MHSS

                <ChevronDown size={18}/>

              </div>

            </div>

          </div>

          <div className="field">

            <label>Topics Discussed <span>*</span></label>

            <textarea
              rows="9"
              defaultValue={`• Reviewed John Doe's progress and treatment goals.

• Discussed anxiety management interventions.

• Reviewed documentation and compliance.

• Discussed caseload and time management.`}
            />

          </div>

          <div className="field">

            <label>Action Items</label>

            <textarea
              rows="8"
              defaultValue={`• Ricardo to complete John Doe quarterly review by 6/15.

• Ricardo to follow up on Jane Smith SRA.

• Continue monitoring documentation timeliness.`}
            />

          </div>

          <div className="button-row">

            <button className="outline-btn">

              Save Draft

            </button>

            <button className="primary-btn">

              Sign Supervision

            </button>

          </div>

        </div>

        {/* RIGHT PANEL */}

        <div className="progress-right">

          <div className="ai-panel">

            <div className="ai-title">

              <Users size={20}/>

              AI Supervision Assistant

            </div>

            <div className="suggestion-card">

              <div className="green-icon">

                <FileCheck size={18}/>

              </div>

              <div>

                <h4>Documentation Review</h4>

                <ul>

                  <li>2 notes missing signature</li>

                  <li>1 note missing goal linkage</li>

                </ul>

              </div>

            </div>

            <div className="suggestion-card">

              <div className="red-icon">

                <ShieldAlert size={18}/>

              </div>

              <div>

                <h4>Compliance Alerts</h4>

                <ul>

                  <li>1 quarterly due in 10 days</li>

                  <li>1 authorization expiring</li>

                </ul>

              </div>

            </div>

            <div className="suggestion-card">

              <div className="green-icon">

                <MessageSquare size={18}/>

              </div>

              <div>

                <h4>Discussion Suggestions</h4>

                <ul>

                  <li>Discuss treatment plan updates</li>

                  <li>Review risk assessments</li>

                </ul>

              </div>

            </div>

          </div>

        </div>

      </div>

    </div>

  );
}