import {useContext, createContext} from "react"

export const ToDoContext = createContext({
    todos:[
        {
            id: 1,
            todo: "todo msg",
            completed: false
        } 
    ],
    add: (todo) => {},
})


export const useToDo = () => {
    return useContext(ToDoContext)
}

export const toDoProvider = ToDoContext.Provider