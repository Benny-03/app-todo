import React from "react";
import { useStore } from "../../../state";

export const RemoveCat = (props) => {
    const { dispatchCat } = useStore();

    return (
        <div className="remove-todo"> 
            <button onClick={() => {
                dispatchCat({type: "deleteCat", id: props.id})
            }}>
                <img src="./src/images/delete-white.svg" />
            </button>
        </div>
    )
}