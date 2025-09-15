import {useReducer} from "react";
import {todoReducer} from "../reducers/TodoReducer";
import {TodoContext} from "../contexts/TodoContext";
import {TodoGroup} from "./TodoGroup";
import {TodoInput} from "./TodoInput";
import {initState} from "../App";

export function TodoList() {
    const [state, dispatch] = useReducer(todoReducer, initState);

    return <div>
        <h1>Todo List</h1>
        <div>
            <TodoContext.Provider value={{state, dispatch}}>
                <TodoGroup/>
                <TodoInput/>
            </TodoContext.Provider>
        </div>
    </div>
}