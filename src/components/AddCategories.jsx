import React, { useState } from "react";
import { useStore } from "../state";

export const AddCategories = () => {
    const [cat, setCat] = useState("");
    const { dispatchCat } = useStore();

    return (
        <div className="insert-todo">
            <input
                type="text"
                placeholder="Add a new category..."
                value={cat}
                onChange={(e) => setCat(e.target.value)} 
                onKeyDown={(e) => {
                    if (e.key === "Enter" && cat.length > 0) {
                        dispatchCat({type: "addCat", text: cat, color: "#FF6767"});
                        setCat("");
                    }
                }} />
            <button 
                type="button" 
                onClick={() => {
                    if(cat.length > 0) { 
                        dispatchCat({type: "addCat", text: cat, color: "#FF6767"});
                        setCat("");
                    }
                }} > <p>+</p> </button>
        </div>
    );
}