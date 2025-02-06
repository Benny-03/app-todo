import React, { useState } from "react";
import Sidebar from "./Sidebar";
import { InsertTodo } from "./InsertTodo";
import { TodoList } from "./TodoList";

const Home = () => {
    return (
        <div className="home-page">
            <div className="header">
                <h2><span style={{color: "#FF6767"}}>TO</span>-DO</h2>
                
            </div>
            <div className="site-content" style={{display: "flex", gap: "20px"}}>
                <Sidebar />
                <main className="main-content">
                    <TodoList />
                    <InsertTodo />
                </main>
            </div>
        </div>
    )
}

export default Home;