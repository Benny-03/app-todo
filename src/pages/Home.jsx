import React from "react";
import Sidebar from "../components/Sidebar";
import { InsertTodo } from "../components/InsertTodo";
import { TodoList } from "../components/TodoList";
import { useStore } from "../state";

const Home = () => {
    const { tasks, taskNotCompleted } = useStore()

    return (
        <div className="home-page">
            <div className="header">
                <h2><span style={{color: "#FF6767"}}>TO</span>-DO</h2>
            </div>
            <div className="site-content">
                <Sidebar />
                <main className="main-content">
                    <TodoList />
                    <InsertTodo />
                    {taskNotCompleted(tasks)}
                </main>
            </div>
        </div>
    )
}

export default Home;