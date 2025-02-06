import React from "react";
import { NavLink } from "react-router";

const Sidebar = () => {
    return (
        <div className="sidebar">
            <div className="sidebar-content">
                <NavLink to={'/'} className="page">
                    <p>My Task</p>
                </NavLink>
                <NavLink to={'/task-categories'} className="page">
                    <p>Task Categories</p>
                </NavLink>
            </div>
        </div>
    )
}

export default Sidebar;