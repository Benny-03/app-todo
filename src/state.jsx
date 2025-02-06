import React, { createContext, useState, useContext } from "react";

const initialTasks =  [{
    id: Math.random().toString(36).slice(2),
    title: "Task 1",
    completed: false,
}, {
    id: Math.random().toString(36).slice(2),
    title: "Task 2",
    completed: false,
}, {
    id: Math.random().toString(36).slice(2),
    title: "Task 3",
    completed: false,
}];

export const StoreContext = createContext({ 
    tasks: initialTasks,
    addTask: (text) => {},
    deleteTask: (id) => {},
    editTask: (id, text) => {},
});

export const Provider = ({ children }) => {
    // const [state, dispatch] = useReducer(reducer, initialState);
    const [tasks, setTasks] = useState(initialTasks);
    return (
        <StoreContext.Provider value={{
            tasks,
            addTask (text) {
                setTasks((prevTasks) => [...prevTasks, {
                    id: Math.random().toString(36).slice(2),
                    title: text,
                    completed: false,
                }]);
            }
        }}>
            {children}
        </StoreContext.Provider>
    )
}

export const useStore = () => useContext(StoreContext);