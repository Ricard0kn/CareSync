import { Bell, Menu } from "lucide-react";

export default function Topbar({ title }) {

    return (

        <header className="topbar">

            <div className="left">

                <Menu size={22} />

                <h1>{title}</h1>

            </div>

            <div className="right">

                <Bell size={20} />

                <div className="avatar"></div>

                <div>

                    <strong>Maria Admin</strong>

                    <p>Administrator</p>

                </div>

            </div>

        </header>

    );

}