import React, { useState } from "react";
import { useStore } from "../state";

export const InsertTodo = () => {
    const [task, setTask] = useState("");
    const { addTask } = useStore();
    return (
        <div className="insert-todo">
            <input
                type="text"
                placeholder="Add a new task..."
                value={task}
                onChange={(e) => setTask(e.target.value)} />
            <button onClick={() => {
                addTask(task);
                setTask("");
            }}>Add</button>
        </div>
    );
};
