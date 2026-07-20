import "./Dashboard.css";
import {
  Calendar,
  Clock3,
  ChevronDown,
  ArrowLeft,
  Bot,
  Link2,
  AlertTriangle,
  Lightbulb
} from "lucide-react";

export default function ProgressNote() {

    return (

        <div className="progress-page">

            <div className="progress-header">

                <button className="back-link">
                    <ArrowLeft size={16}/>
                    Back to Client
                </button>

                <h1>Progress Note - John Doe</h1>

                <span className="draft-text">
                    Draft Saved 10:24 AM
                </span>

            </div>

            <div className="progress-container">

                <div className="progress-left">

                    <div className="top-fields">

                        <div className="field">

                            <label>
                                Service Date
                                <span>*</span>
                            </label>

                            <div className="input-icon">

                                <input
                                    type="text"
                                    value="05/20/2024"
                                    readOnly
                                />

                                <Calendar size={18}/>

                            </div>

                        </div>

                        <div className="field">

                            <label>
                                Start Time
                                <span>*</span>
                            </label>

                            <div className="input-icon">

                                <input
                                    type="text"
                                    value="9:00 AM"
                                    readOnly
                                />

                                <Clock3 size={18}/>

                            </div>

                        </div>

                        <div className="field">

                            <label>
                                End Time
                                <span>*</span>
                            </label>

                            <div className="input-icon">

                                <input
                                    type="text"
                                    value="10:00 AM"
                                    readOnly
                                />

                                <Clock3 size={18}/>

                            </div>

                        </div>

                        <div className="field">

                            <label>Service Type</label>

                            <div className="select-box">

                                MHSS

                                <ChevronDown size={18}/>

                            </div>

                        </div>

                        <div className="field">

                            <label>Location</label>

                            <div className="select-box">

                                Home

                                <ChevronDown size={18}/>

                            </div>

                        </div>

                        <div className="field">

                            <label>Duration</label>

                            <div className="select-box">

                                1 hour

                                <ChevronDown size={18}/>

                            </div>

                        </div>

                    </div>

                    <div className="field">

                        <label>Treatment Goal</label>

                        <div className="select-box">

                            Goal 2 - Reduce anxiety symptoms

                            <ChevronDown size={18}/>

                        </div>

                    </div>

                    <div className="field">

                        <label>
                            Intervention
                            <span>*</span>
                        </label>

                        <textarea
                            rows="3"
                            defaultValue="Discussed triggers for anxiety and practiced coping skills including deep breathing and positive self-talk."
                        />

                    </div>

                    <div className="field">

                        <label>
                            Client Response
                            <span>*</span>
                        </label>

                        <textarea
                            rows="3"
                            defaultValue="Client was engaged and participated in identifying triggers. Stated deep breathing was helpful."
                        />

                    </div>

                    <div className="field">

                        <label>Progress</label>

                        <textarea
                            rows="3"
                            defaultValue="Client is able to identify triggers with minimal prompts. Practicing coping skills independently."
                        />

                    </div>

                    <div className="field">

                        <label>Plan</label>

                        <textarea
                            rows="3"
                            defaultValue="Continue practicing coping skills. Next session focus on challenging negative thoughts."
                        />

                    </div>

                    <div className="button-row">

                        <button className="outline-btn">

                            Save Draft

                        </button>

                        <button className="primary-btn">

                            Submit for Review

                        </button>

                        <button className="primary-btn">

                            Sign Note

                        </button>

                    </div>

                </div>

                <div className="progress-right">

                    <div className="ai-panel">

                        <div className="ai-title">

                            <Bot size={20}/>

                            AI Suggestions

                        </div>

                        <div className="suggestion-card">

                            <div className="green-icon">

                                <Link2 size={18}/>

                            </div>

                            <div>

                                <h4>Link to Treatment Plan</h4>

                                <p>
                                    Goal 2 appears relevant to this note.
                                </p>

                                <button className="link-btn">

                                    Link Goal

                                </button>

                            </div>

                        </div>

                        <div className="suggestion-card">

                            <div className="red-icon">

                                <AlertTriangle size={18}/>

                            </div>

                            <div>

                                <h4>Missing Information</h4>

                                <p>
                                    Consider adding specific coping skills practiced.
                                </p>

                            </div>

                        </div>

                        <div className="suggestion-card">

                            <div className="green-icon">

                                <Lightbulb size={18}/>

                            </div>

                            <div>

                                <h4>Best Practice Tip</h4>

                                <p>
                                    Consider documenting measurable progress toward goal.
                                </p>

                            </div>

                        </div>

                        <button className="insert-btn">

                            Insert Suggestion

                        </button>

                    </div>

                </div>

            </div>

        </div>

    );

}