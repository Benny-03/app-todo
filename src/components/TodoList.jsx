import React from "react";
import { useStore } from "../state";

export const TodoList = () => {
     const { tasks } = useStore();
    return (
        <div className="todo-list">
            <h3>Tasks</h3>
            <ul>
                {tasks.map((task) => (
                    <li key={task.id}>{task.title}</li>
                ))}
            </ul>
        </div>
    );
};
