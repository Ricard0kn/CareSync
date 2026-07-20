import {
    AlertCircle,
    Clock,
    ClipboardCheck
} from "lucide-react";

export default function TasksCard(){

    const tasks=[
        {
            title:"John Doe - Quarterly Review",
            due:"Due 6/15",
            icon:<ClipboardCheck size={16}/>
        },
        {
            title:"Jane Smith - Weekly Supervision",
            due:"Due Today",
            icon:<Clock size={16}/>
        },
        {
            title:"Michael Brown - SRA",
            due:"Due Tomorrow",
            icon:<AlertCircle size={16}/>
        },
        {
            title:"Emily Johnson - Treatment Plan",
            due:"Due 6/20",
            icon:<ClipboardCheck size={16}/>
        }
    ];

    return(

        <div className="dashboard-card">

            <div className="card-header">

                <h3>Tasks Due</h3>

            </div>

            {tasks.map((task,index)=>(

                <div
                    className="task-item"
                    key={index}
                >

                    <div className="task-icon">
                        {task.icon}
                    </div>

                    <div>

                        <strong>
                            {task.title}
                        </strong>

                        <p>{task.due}</p>

                    </div>

                </div>

            ))}

        </div>

    );

}