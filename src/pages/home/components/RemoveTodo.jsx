import React from "react"
import imgUrl from '../../../images/delete-white.svg'
import { useDispatch } from "react-redux"

export const RemoveTodo = (props) => {
    const dispatch = useDispatch()

    return (
        <div className="remove-todo"> 
            <button onClick={() => {
                dispatch({type: "deleteTask", id: props.id})
            }}>
                <img src={imgUrl} />
            </button>
        </div>
    )

}