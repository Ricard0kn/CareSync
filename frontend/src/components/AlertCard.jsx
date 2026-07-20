import { AlertTriangle } from "lucide-react";

export default function AlertCard({

    title,
    items

}) {

    return (

        <div className="alert-card">

            <div className="card-header">

                <h3>{title}</h3>

                <button>View All</button>

            </div>

            {items.map((item, index) => (

                <div
                    className="alert-item"
                    key={index}
                >
                    <AlertTriangle
                        size={16}
                        color="#dc2626"
                    />

                    <span>{item}</span>

                </div>

            ))}

        </div>

    );

}