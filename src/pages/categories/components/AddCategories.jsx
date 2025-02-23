import React, { useState } from "react";
import { useDispatch } from "react-redux";

export const AddCategories = () => {
    const [cat, setCat] = useState("");
    const [color, setColor] = useState("#FF6767")

    const dispatch = useDispatch()

    return (
        <div className="box-insert-todo">
            <input
                type="text"
                placeholder="Add a new category..."
                className="input-textCat"
                value={cat}
                onChange={(e) => setCat(e.target.value)} 
                onKeyDown={(e) => {
                    if (e.key === "Enter" && cat.length > 0 && color.length > 0) {
                        dispatch({type: "addCat", text: cat, color: color});
                        setCat("");
                        setColor("#FF6767")
                    }
                }} />
            <div className="insert-todo">
                <span>choose the color</span>
                <input 
                    type="color" 
                    value={color}
                    className="chooseColor"
                    onChange={(e) => setColor(e.target.value)} />

                <button 
                    type="button" 
                    onClick={() => {
                        if(cat.length > 0 && color.length > 0) { 
                            dispatch({type: "addCat", text: cat, color: color});
                            setCat("");
                            setColor("#FF6767")
                        }
                }} > <p>+</p> </button>
            </div>
            
        </div>
    );
}