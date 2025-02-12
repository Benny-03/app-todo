import React from "react";
import { useStore } from "../state";

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
                            {/* <EditTodo id={cat.id}/>
                            <RemoveTodo id={cat.id} />*/}
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    )
}