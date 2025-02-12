import React, { useState } from "react";
import { useStore } from "../state";

export const InsertTodo = () => {
    const [task, setTask] = useState("");
    const { dispatch } = useStore();

    return (
        <div className="insert-todo">
            <input
                type="text"
                placeholder="Add a new task..."
                value={task}
                onChange={(e) => setTask(e.target.value)} 
                onKeyDown={(e) => {
                    if (e.key === "Enter" && task.length > 0) {
                        dispatch({type: "addTask", text: task});
                        setTask("");
                    }
                }} />
            <button 
                type="button" 
                onClick={() => {
                    if(task.length > 0) { 
                        dispatch({type: "addTask"});
                        setTask("");
                    }
                }} > <p>+</p> </button>
        </div>
    );
};
