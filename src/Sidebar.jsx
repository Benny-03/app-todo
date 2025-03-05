import React from "react";
import { NavLink } from "react-router";

const Sidebar = () => {
    return (
        <div className="sidebar">
            <div className="sidebar-content">
                <NavLink to={'/app-todo'} className="page">
                    <p>My Task</p>
                </NavLink>
                <NavLink to={'/app-todo/task-categories'} className="page">
                    <p>Task Categories</p>
                </NavLink>
            </div>
        </div>
    )
}

export default Sidebar;