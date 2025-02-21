import React from "react";
import { useStore } from "../../../state";

export const RemoveTodo = (props) => {
    const { dispatch } = useStore();

    return (
        <div className="remove-todo"> 
            <button onClick={() => {
                dispatch({type: "deleteTask", id: props.id})
            }}>
                <img src="./src/images/delete-white.svg" />
            </button>
        </div>
    )

}