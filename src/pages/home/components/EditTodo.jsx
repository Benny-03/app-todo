import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

export const EditTodo = (props) => {
    const [task, setTask] = useState(props.text)
    const [isVisible, setIsVisible] = useState()
    const [cat, setCat] = useState(props.cat)

    const dispatch = useDispatch()
    const category = useSelector((state) => state.category)

    return (
        <div className="edit-todo"> 
            <div className="details">
                {isVisible && 
                    <input 
                        className="" 
                        type="text"
                        placeholder="Edit text..."
                        value={task}
                        onChange={(e) => setTask(e.target.value)} 
                        onKeyDown={(e) => {
                            if (e.key === "Enter" && task.length > 0) {
                                dispatch({type: "editTask", text: task, id: props.id, category: cat});
                                setTask(task);
                                setIsVisible(!isVisible)
                            }
                        }} 
                    />
                }
                <div className="select-cat">
                    { isVisible &&
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
                    }
                    {isVisible &&
                        <button 
                            type="button" 
                            className="btn-editCat"
                            onClick={() => {
                                if(task.length > 0) { 
                                    dispatch({type: "editTask", text: task, id: props.id, category: cat});
                                    setTask(task);
                                }
                                if(task.length == 0 && cat){
                                    dispatch({type: "editTask", text: task, id: props.id, category: cat});
                                    setTask(task);
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
