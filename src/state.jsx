import React, { createContext, useContext, useReducer } from "react";

const initialTasks =  [{
    id: Math.random().toString(36).slice(2),
    title: "Wash the dishes",
    completed: false,
    category: "Home"
}, {
    id: Math.random().toString(36).slice(2),
    title: "Study",
    completed: false,
    category: "University"
}, {
    id: Math.random().toString(36).slice(2),
    title: "Take the dog out",
    completed: false,
    category: "Dog"
}];

const initialCategories =  [{
    id: Math.random().toString(36).slice(2),
    title: "Home",
    color: "#FF6767",
}, {
    id: Math.random().toString(36).slice(2),
    title: "University",
    color: "#3ABEFF",
}, {
    id: Math.random().toString(36).slice(2),
    title: "Dog",
    color: "green",
}];

const reducerTask = (tasks, action) => {
    switch (action.type){
        case "addTask": 
            return [...tasks, {
                id: Math.random().toString(36).slice(2),
                title: action.text,
                completed: false,
                category: action.category
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
                if(task.id === action.id) { 
                    task.title = action.text 
                    task.category = action.category
                } 
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
        case "editCat":
            const editCat = [];
            cat.forEach((c) => {
                if(c.id === action.id) { 
                    c.title = action.text
                    c.color = action.color
                } 
                editCat.push(c);
            })
            return editCat;
        case "deleteCat":
            const newCat = []
            cat.forEach((c) => {
                if(c.id !== action.id){
                    newCat.push(c);
                }
            })
            return newCat;
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