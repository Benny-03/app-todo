import React, {useState, useEffect} from "react";
import { useStore } from "../state";
import { RemoveTodo } from "../components/RemoveTodo";
import { EditTodo } from "../components/EditTodo"

export const TodoList = () => {
    const { tasks } = useStore();
    const [NotCompleted, setNotCompleted] = useState(tasks.length)

    const checkboxChange = (taskId) => {
        let index = 0;
        tasks.forEach((task) => {
            if (task.id === taskId) {
                task.completed = !task.completed;
            }
            if(!task.completed) { index++ };
        });
        setNotCompleted(index)
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
                        <EditTodo />
                        <RemoveTodo id={task.id} />
                    </li>
                ))}
            </ul>
        </div>
    );
};
