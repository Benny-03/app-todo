import React, { useState } from "react";
import { useStore } from "../state";

export const EditTodo = (props) => {
    const [task, setTask] = useState()
    const [isVisible, setIsVisible] = useState()
    const { dispatch } = useStore();

    return (
        <div className="edit-todo"> 
            {isVisible && 
                <input 
                    className="" 
                    type="text"
                    placeholder="Edit text..."
                    value={task}
                    onChange={(e) => setTask(e.target.value)} 
                    onKeyDown={(e) => {
                        if (e.key === "Enter" && task.length > 0) {
                            dispatch({type: "editTask", text: task, id: props.id});
                            setTask("");
                        }
                    }} 
                />
            }
            <button onClick={() => setIsVisible(!isVisible)}>
                <img src="./src/images/Edit.svg" />
            </button>
        </div>
    )
}
