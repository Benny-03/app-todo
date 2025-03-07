import React from "react";
import imgUrl from '../../../images/delete-white.svg'
import { useDispatch } from "react-redux";

export const RemoveCat = (props) => {
    const dispatch = useDispatch()

    return (
        <div className="remove-todo"> 
            <button onClick={() => {
                dispatch({type: "deleteCat", id: props.id})
            }}>
                <img src={imgUrl} />
            </button>
        </div>
    )
}