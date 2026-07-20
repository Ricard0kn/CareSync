import "./Dashboard.css";
import {
  ArrowLeft,
  ChevronDown,
  Sparkles
} from "lucide-react";

export default function QuarterlyReview() {
  return (
    <div className="progress-page">

      {/* Header */}

      <div className="progress-header">

        <button className="back-link">
          <ArrowLeft size={16}/>
          Back to Client
        </button>

        <h1>Quarterly Review - John Doe</h1>

        <div className="quarter-select">

          <label>Quarter:</label>

          <div className="select-box">

            Q2 2024 (Apr - Jun)

            <ChevronDown size={18}/>

          </div>

        </div>

        <span className="draft-text">
          Draft Saved 11:15 AM
        </span>

      </div>

      <div className="progress-container">

        {/* LEFT */}

        <div className="progress-left">

          {/* GOALS */}

          <div className="dashboard-card">

            <h3>Goal Progress</h3>

            <div className="goal-card">

              <h4>Goal 1: Improve emotional regulation</h4>

              <p>
                John has shown moderate progress in identifying emotions and
                using coping skills. Continues to need support during times
                of high stress.
              </p>

            </div>

            <div className="goal-card">

              <h4>Goal 2: Reduce anxiety symptoms</h4>

              <p>
                John reports using coping skills daily. Anxiety symptoms
                have decreased from a 7/10 to a 4/10.
              </p>

            </div>

            <div className="goal-card">

              <h4>Goal 3: Improve social skills</h4>

              <p>
                John has attended two community activities this quarter
                and is showing increased comfort in group settings.
              </p>

            </div>

          </div>

          {/* ATTENDANCE */}

          <div className="dashboard-card">

            <h3>Attendance Summary</h3>

            <div className="attendance-grid">

              <div className="attendance-box">

                <small>Total Sessions</small>

                <h2>12</h2>

              </div>

              <div className="attendance-box green">

                <small>Attended</small>

                <h2>10</h2>

              </div>

              <div className="attendance-box red">

                <small>Canceled</small>

                <h2>1</h2>

              </div>

              <div className="attendance-box orange">

                <small>No Show</small>

                <h2>1</h2>

              </div>

              <div className="attendance-circle">

                <div className="circle">

                  <span>83%</span>

                </div>

                <p>Attendance Rate</p>

              </div>

            </div>

          </div>

          <div className="button-row">

            <button className="outline-btn">

              Save Draft

            </button>

            <button className="primary-btn">

              Submit For Review

            </button>

          </div>

        </div>

        {/* RIGHT */}

        <div className="progress-right">

          <div className="ai-panel">

            <div className="ai-title">

              <Sparkles size={20}/>

              AI Generated Summary

            </div>

            <div className="summary-card">

              <p>

                John has demonstrated consistent engagement in treatment
                during this quarter. Significant progress noted in anxiety
                management skills and emotional regulation. Continues to
                work on social skills and applying coping strategies during
                high stress situations.

              </p>

            </div>

            <button className="primary-btn full">

              Use This Summary

            </button>

            <button className="outline-btn full">

              Edit Summary

            </button>

          </div>

        </div>

      </div>

    </div>

  );
}