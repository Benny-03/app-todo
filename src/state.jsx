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
    NotCompleted: 0,
    taskNotCompleted: (task) => {},
    addTask: (text) => {},
    deleteTask: (id) => {},
    editTask: (id, text) => {},
});

export const Provider = ({ children }) => {
    // const [state, dispatch] = useReducer(reducer, initialState);
    const [tasks, setTasks] = useState(initialTasks);
    const [NotCompleted, setNotCompleted] = useState(tasks.length)

    return (
        <StoreContext.Provider value={{
            tasks,
            NotCompleted,
            taskNotCompleted (tasks) {
                let notComp = 0;
                tasks.forEach((task) => {
                    if(task.completed == false){
                        notComp += 1;
                    }
                })
                setNotCompleted(notComp)
            },
            addTask (text) {
                setTasks((prevTasks) => [...prevTasks, {
                    id: Math.random().toString(36).slice(2),
                    title: text,
                    completed: false,
                }]);
            }, 
            deleteTask (id) {
                const newTask = []
                tasks.forEach((task) => {
                    if(task.id !== id){
                        newTask.push(task);
                    }
                })
                setTasks(newTask);
            },
            editTask (id, text) {
                const newTask = [];
                tasks.forEach((task) => {
                    if(task.id === id) { task.title = text } 
                    newTask.push(task);
                })
                setTasks(newTask)
            }
        }}>
            {children}
        </StoreContext.Provider>
    )
}

export const useStore = () => useContext(StoreContext);