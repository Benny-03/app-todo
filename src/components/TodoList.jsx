import React, {useState, useEffect} from "react";
import { useStore } from "../state";
import { RemoveTodo } from "../components/RemoveTodo";
import { EditTodo } from "../components/EditTodo"

export const TodoList = () => {
    const { tasks, NotCompleted, taskNotCompleted } = useStore();

    const checkboxChange = (taskId) => {
        tasks.forEach((task) => {
            if (task.id === taskId) {
                task.completed = !task.completed;
            }
        });
        taskNotCompleted(tasks)
    };

    

    return (
        <div className="todo-list">
            <div className="title">
                <h3>My tasks</h3>
                <p>not completed: {NotCompleted}</p>
            </div>
            <ul>
                {tasks.map((task) => (
                    <li key={task.id}>
                        <div>
                            <input 
                                type="checkbox" 
                                id={task.id} 
                                value={task.title} 
                                className="checkbox"
                                checked={task.completed}
                                onChange={() => checkboxChange(task.id)}
                                />
                            {task.title}
                        </div>
                        <div className="buttons-edit">
                            <EditTodo id={task.id}/>
                            <RemoveTodo id={task.id} />
                            { taskNotCompleted(tasks) }
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};
