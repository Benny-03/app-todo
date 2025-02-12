import React from "react";
import { useStore } from "../state";
import { EditCat } from "./EditCat";
import { RemoveCat } from "./RemoveCat";

export const CategoriesList = () => {
    const { category } = useStore()

    return (
        <div className="categories-list">
            <h3>My categories</h3>
            <ul>
                {category.map((cat) => (
                    <li key={cat.id}>
                        <div style={{display: "flex"}}>
                            <div className="color-cat" style={{backgroundColor: cat.color}}></div>
                            {cat.title}
                        </div>
                        <div className="buttons-edit">
                            <EditCat id={cat.id} color={cat.color}/>
                            <RemoveCat id={cat.id} />
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    )
}