import { createStore } from "redux";

const initialState = {
    tasks: [{
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
    }],
    category: [{
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
    }],
    tasksNotCompleted: 3
}

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case "addTask":
            return {
                ...state,
                tasks: [
                    ...state.tasks,
                    {
                        id: Math.random().toString(36).slice(2),
                        title: action.text,
                        completed: false,
                        category: action.category
                    }
                ]
            };
        case "deleteTask":
            return {
                ...state,
                tasks: state.tasks.filter(task => task.id !== action.id)
            };
        case "editTask":
            return {
                ...state,
                tasks: state.tasks.map(task =>
                    task.id === action.id
                        ? { ...task, title: action.text, category: action.category }
                        : task
                )
            };
        case "addCat":
            return {
                ...state,
                category: [
                    ...state.category,
                    {
                        id: Math.random().toString(36).slice(2),
                        title: action.text,
                        color: action.color
                    }
                ]
            };
        case "editCat":
            return {
                ...state,
                category: state.category.map(c =>
                    c.id === action.id
                        ? { ...c, title: action.text, color: action.color }
                        : c
                )
            };
        case "deleteCat":
            return {
                ...state,
                category: state.category.filter(c => c.id !== action.id)
            };
        case "completed":
            return {
                ...state,
                tasksNotCompleted: state.tasks.filter(task => !task.completed).length
            };
        default:
            return state;
    }
};


export const store = createStore(rootReducer);