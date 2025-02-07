import React from "react";
import { useStore } from "../state";

export const RemoveTodo = (props) => {
    const { deleteTask } = useStore();

    return (
        <div className="remove-todo"> 
            <button onClick={() => deleteTask(props.id)}>
                <img src="./src/images/delete-white.svg" />
            </button>
        </div>
    )

}