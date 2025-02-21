import React from "react"
import { useDispatch } from "react-redux"

export const RemoveTodo = (props) => {
    const dispatch = useDispatch()

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