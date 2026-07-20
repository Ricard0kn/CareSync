export default function AuthorizationOverview() {
    return (
        <div className="dashboard-card authorization-card">

            <h3>Authorization Overview</h3>

            <div className="auth-overview-grid">

                <div>
                    <label>Auth #</label>
                    <strong>AUTH-2024-00125</strong>
                </div>

                <div>
                    <label>Start Date</label>
                    <strong>04/15/2024</strong>
                </div>

                <div>
                    <label>End Date</label>
                    <strong>06/15/2024</strong>
                </div>

                <div>
                    <label>Approved Units</label>
                    <strong>100</strong>
                </div>

                <div>
                    <label>Used Units</label>
                    <strong>62</strong>
                </div>

                <div>
                    <label>Remaining Units</label>
                    <strong className="green-text">
                        38
                    </strong>
                </div>

            </div>

            <div className="progress-wrapper">

                <div className="progress-bar">

                    <div
                        className="progress-fill"
                        style={{width:"62%"}}
                    />

                </div>

                <span>62% Used</span>

            </div>

        </div>
    );
}