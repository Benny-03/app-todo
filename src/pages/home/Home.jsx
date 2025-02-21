import React from "react";
import Sidebar from "../../Sidebar";
import { InsertTodo } from "./components/InsertTodo";
import { TodoList } from "./components/TodoList";
import { useDispatch } from "react-redux";

const Home = () => {
    const dispatch = useDispatch()
    
    dispatch({ type: "completed"})

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
                </main>
            </div>
        </div>
    )
}

export default Home;