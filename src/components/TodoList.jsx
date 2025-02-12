import React, { useEffect } from "react";
import { useStore } from "../state";
import { RemoveTodo } from "./RemoveTodo";
import { EditTodo } from "./EditTodo"

export const TodoList = () => {
    const { tasks, taskNotCompleted, dispatchNotCompleted } = useStore();

    const checkboxChange = (taskId) => {
        tasks.forEach((task) => {
            if (task.id === taskId) {
                task.completed = !task.completed;
            }
        });
        dispatchNotCompleted({type: "completed", tasks: tasks})
    };

    useEffect(() => {
        dispatchNotCompleted({ type: "completed", tasks: tasks });
    }, [tasks, dispatchNotCompleted]); 

    return (
        <div className="todo-list">
            <div className="title">
                <h3>My tasks</h3>
                <p>not completed: {taskNotCompleted}</p>
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
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};
