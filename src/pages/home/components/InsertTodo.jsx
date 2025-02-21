import React, { useState } from "react";
import { useStore } from "../../../state";

export const InsertTodo = () => {
    const [task, setTask] = useState("");
    const { category, dispatch } = useStore();
    const [cat, setCat] = useState((category.length !== 0)? category[0].title : '')

    return (
        <div className="box-insert-todo">
            Add new task:
            <div className="insert-todo">
                <div className="select-cat">
                    category
                    <select 
                        value={cat} 
                        className="select-cat"
                        onChange={(e) => setCat(e.target.value)} 
                    >
                        {category.map((c) => {
                            return (
                                <option value={c.title} key={c.id}>
                                    {c.title}
                                </option>
                            )
                        })}
                    </select>
                </div>

                <div className="text-todo">
                    <input
                    type="text"
                    placeholder="text..."
                    value={task}
                    onChange={(e) => setTask(e.target.value)} 
                    onKeyDown={(e) => {
                        if (e.key === "Enter" && task.length > 0) {
                            dispatch({type: "addTask", text: task, category: cat});
                            setTask("");
                        }
                    }} />
                    <button 
                        type="button" 
                        onClick={() => {
                            if(task.length > 0) { 
                                dispatch({type: "addTask", text: task, category: cat});
                                setTask("");
                            }
                    }} > <p>+</p> </button>
                </div>
            </div>
        </div>
    );
};
