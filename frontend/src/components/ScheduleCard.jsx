export default function ScheduleCard(){

    const visits=[
        {
            time:"9:00 AM",
            client:"John Doe",
            type:"Home Visit"
        },
        {
            time:"10:30 AM",
            client:"Jane Smith",
            type:"Family Session"
        },
        {
            time:"12:00 PM",
            client:"Michael Brown",
            type:"Home Visit"
        },
        {
            time:"2:00 PM",
            client:"Emily Johnson",
            type:"Telehealth"
        },
        {
            time:"3:30 PM",
            client:"Chris Davis",
            type:"Home Visit"
        }
    ];

    return(

        <div className="dashboard-card">

            <div className="card-header">

                <h3>My Schedule</h3>

                <button>
                    View Calendar
                </button>

            </div>

            {visits.map((visit,index)=>(
                <div
                    key={index}
                    className="schedule-item"
                >

                    <div className="schedule-time">
                        {visit.time}
                    </div>

                    <div className="schedule-client">
                        {visit.client}
                    </div>

                    <div className="schedule-type">
                        {visit.type}
                    </div>

                </div>
            ))}

        </div>

    );

}