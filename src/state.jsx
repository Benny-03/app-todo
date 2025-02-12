import React, { createContext, useContext, useReducer } from "react";

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

const initialCategories =  [{
    id: Math.random().toString(36).slice(2),
    title: "Cat 1",
    color: "#FF6767",
}, {
    id: Math.random().toString(36).slice(2),
    title: "Cat 2",
    color: "#3ABEFF",
}];

const reducerTask = (tasks, action) => {
    switch (action.type){
        case "addTask": 
            return [...tasks, {
                id: Math.random().toString(36).slice(2),
                title: action.text,
                completed: false,
            }];
        case "deleteTask":
            const newTask = []
            tasks.forEach((task) => {
                if(task.id !== action.id){
                    newTask.push(task);
                }
            })
            return newTask;
        case "editTask":
            const editTask = [];
            tasks.forEach((task) => {
                if(task.id === action.id) { task.title = action.text } 
                editTask.push(task);
            })
            return editTask;
        default:
            return tasks;
    }

}

const reducerCat = (cat, action) => {
    switch(action.type) {
        case "addCat":
            return [...cat, {
                id: Math.random().toString(36).slice(2),
                title: action.text,
                color: action.color
            }];
        default:
            return cat;
    }

}

const reducerNotCompleted = (taskNotCompleted ,action) => {
    switch(action.type){
        case "completed":
            let notComp = 0;
            action.tasks.forEach((task) => {
                if(task.completed == false){
                    notComp += 1;
                }
            })
            return notComp;
        default:
            return action.tasks.lenght;
    }
}

export const StoreContext = createContext({ 
    tasks: initialTasks, 
    dispatch: () => {},
    category: initialCategories,
    dispatchCat: () => {},
    taskNotCompleted: 0,
    dispatchNotCompleted: () => {}
});

export const Provider = ({ children }) => {
    const [tasks, dispatch] = useReducer(reducerTask, initialTasks);
    const [category, dispatchCat] = useReducer(reducerCat, initialCategories);
    const [taskNotCompleted, dispatchNotCompleted] = useReducer(reducerNotCompleted, tasks.lenght)

    return (
        <StoreContext.Provider value={{
            tasks, 
            dispatch,
            category,
            dispatchCat,
            taskNotCompleted,
            dispatchNotCompleted
        }}>
            {children}
        </StoreContext.Provider>
    )
}

export const useStore = () => useContext(StoreContext);