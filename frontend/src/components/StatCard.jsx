export default function StatCard({

    icon,
    title,
    value,
    subtitle

}) {

    return (

        <div className="stat-card">

            <div className="stat-icon">
                {icon}
            </div>

            <p>{title}</p>

            <h2>{value}</h2>

            {subtitle && <span>{subtitle}</span>}

        </div>

    );

}