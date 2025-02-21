import React from "react";
import { RemoveTodo } from "./RemoveTodo";
import { EditTodo } from "./EditTodo"

import { useSelector, useDispatch } from "react-redux";

export const TodoList = () => {
    const dispatch = useDispatch()
    const tasks = useSelector((state) => state.tasks)
    const category = useSelector((state) => state.category)
    const tasksNotCompleted = useSelector((state) => state.tasksNotCompleted)

    const checkboxChange = (taskId) => {
        tasks.forEach((task) => {
            if (task.id === taskId) {
                task.completed = !task.completed;
            }
        });
        dispatch({ type: "completed" })
    };

    dispatch({ type: "completed"})

    return (
        <div className="todo-list">
            <div className="title">
                <h3>My tasks</h3>
                <p>not completed: {tasksNotCompleted}</p>
            </div>
            <ul>
                {tasks.map((task) => (
                    <li key={task.id}>
                        <div style={{ display: "flex" }}>
                            <input
                                type="checkbox"
                                id={task.id}
                                value={task.title}
                                className="checkbox"
                                checked={task.completed}
                                onChange={() => checkboxChange(task.id)}
                            />
                            {task.title}
                            {task.category && category &&
                                <div className="color-cat" style={{ backgroundColor: category.find((c) => c.title === task.category)?.color }}></div>
                            }
                        </div>
                        <div className="buttons-edit">
                            <EditTodo id={task.id} cat={task.category} text={task.title} />
                            <RemoveTodo id={task.id} />
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};
