import {
    ClipboardCheck,
    CalendarClock,
    AlertTriangle
} from "lucide-react";

export default function UpcomingRequirements(){

    const requirements=[

        {
            icon:<ClipboardCheck size={16}/>,
            title:"Quarterly Review",
            due:"Due 06/15/2024"
        },

        {
            icon:<AlertTriangle size={16}/>,
            title:"SRA",
            due:"Due 06/18/2024"
        },

        {
            icon:<CalendarClock size={16}/>,
            title:"Monthly Supervision",
            due:"Due 06/25/2024"
        }

    ];

    return(

        <div className="dashboard-card">

            <h3>Upcoming Requirements</h3>

            {requirements.map((item,index)=>(

                <div
                    key={index}
                    className="requirement-row"
                >

                    <div className="requirement-left">

                        <div className="icon-circle">

                            {item.icon}

                        </div>

                        <span>{item.title}</span>

                    </div>

                    <span className="due-text">

                        {item.due}

                    </span>

                </div>

            ))}

        </div>

    );

}