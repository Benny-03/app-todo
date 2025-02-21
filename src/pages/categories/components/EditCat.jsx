import React from "react";
import { useState } from "react";
import { useStore } from "../../../state";

export const EditCat = (props) => {
    const [cat, setCat] = useState(props.text)
    const [color, setColor] = useState(props.color)
    const [isVisible, setIsVisible] = useState()
    const { dispatchCat } = useStore();

    return (
        <div className="edit-todo"> 
            <div className="details">
                {isVisible && 
                    <input 
                        className="" 
                        type="text"
                        placeholder="Edit text..."
                        value={cat}
                        onChange={(e) => setCat(e.target.value)} 
                        onKeyDown={(e) => {
                            if (e.key === "Enter" && cat.length > 0 || e.key === "Enter" && color.length > 0) {
                                dispatchCat({type: "editCat", text: cat, id: props.id, color: color});
                                setCat(cat);
                                setColor(color)
                                setIsVisible(!isVisible)
                            }
                        }} 
                    />
                }

                <div className="select-color">
                    { isVisible &&
                        <input 
                            type="color" 
                            value={color}
                            className="chooseColor"
                            onChange={(e) => setColor(e.target.value)} />
                    }
                    {isVisible &&
                        <button 
                            type="button" 
                            className="btn-editCat"
                            onClick={() => {
                                if(cat.length > 0 || color.length > 0) { 
                                    dispatchCat({type: "editCat", text: cat, id: props.id, color: color});
                                    setCat(cat);
                                    setColor(color)
                                }
                                setIsVisible(!isVisible)
                            }} > <p>+</p> </button>

                    }
                </div>
                
            </div>
            
            <button onClick={() => setIsVisible(!isVisible)}>
                <img src="./src/images/Edit.svg" />
            </button>
        </div>
    )
}