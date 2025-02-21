import React from "react";
import Sidebar from "../../Sidebar";
import { CategoriesList } from "./components/CategoriesList";
import { AddCategories } from "./components/AddCategories";

function TaskCategories () {

    return (
        <div className="task-categories">
            <div className="header">
                <h2><span style={{color: "#FF6767"}}>TO</span>-DO</h2>
            </div>
            <div className="site-content">
                <Sidebar />
                <main className="main-content">
                    <CategoriesList /> 
                    <AddCategories />
                </main>
            </div>
        </div>
    )

}

export default TaskCategories;