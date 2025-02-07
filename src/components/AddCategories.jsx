import React, { useState } from "react";
import { useStore } from "../state";

export const AddCategories = () => {
    const [cat, setCat] = useState("");
    const { addCat } = useStore();

    return (
        <div className="insert-todo">
            <input
                type="text"
                placeholder="Add a new category..."
                value={cat}
                onChange={(e) => setCat(e.target.value)} 
                onKeyDown={(e) => {
                    if (e.key === "Enter" && cat.length > 0) {
                        addCat(cat, "#FF6767");
                        setCat("");
                    }
                }} />
            <button 
                type="button" 
                onClick={() => {
                    if(cat.length > 0) { 
                        addCat(cat, "#FF6767");
                        setCat("");
                    }
                }} > <p>+</p> </button>
        </div>
    );
}