import {
    FilePlus,
    ClipboardPen,
    Upload,
    Send
} from "lucide-react";

export default function QuickActions(){

    return(

        <div className="quick-actions">

            <h3>Quick Actions</h3>

            <div className="action-grid">

                <button className="action-btn">
                    <FilePlus size={20}/>
                    <span>New Progress Note</span>
                </button>

                <button className="action-btn">
                    <ClipboardPen size={20}/>
                    <span>Complete Assessment</span>
                </button>

                <button className="action-btn">
                    <Upload size={20}/>
                    <span>Upload Document</span>
                </button>

                <button className="action-btn">
                    <Send size={20}/>
                    <span>Send Message</span>
                </button>

            </div>

        </div>

    );

}