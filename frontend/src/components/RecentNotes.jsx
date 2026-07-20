import { FileText } from "lucide-react";

export default function RecentNotes(){

    const notes=[

        {
            date:"05/20/2024",
            type:"Progress Note",
            author:"Ricardo QMHP"
        },

        {
            date:"05/13/2024",
            type:"Progress Note",
            author:"Ricardo QMHP"
        },

        {
            date:"05/06/2024",
            type:"Progress Note",
            author:"Ricardo QMHP"
        }

    ];

    return(

        <div className="dashboard-card">

            <div className="card-header">

                <h3>Recent Notes</h3>

                <button>View All Notes</button>

            </div>

            {notes.map((note,index)=>(

                <div
                    className="note-row"
                    key={index}
                >

                    <div className="note-left">

                        <div className="icon-circle purple">

                            <FileText size={16}/>

                        </div>

                        <div>

                            <strong>{note.type}</strong>

                            <p>{note.date}</p>

                        </div>

                    </div>

                    <span>

                        {note.author}

                    </span>

                </div>

            ))}

        </div>

    );

}