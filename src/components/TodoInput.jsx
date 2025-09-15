import {useContext, useState} from "react";
import {TodoContext} from "../contexts/TodoContext";
import {api} from "../api/mockApi";

const createTodo = (inputValue) => {
    return api.post("/todos", {
        text: inputValue.trim(),
        done: false
    }).then(res => res.data);
}

export function TodoInput() {
    const {state, dispatch} = useContext(TodoContext)
    const [inputValue, setInputValue] = useState("")

    function addTodoItem() {
        if (inputValue.trim()) {
            createTodo(inputValue)
                .then(todo => dispatch({type: "ADD_TODO", payload: todo}))
            setInputValue("")
        }
    }

    return <div className={"todo-input"}>
        <input type="text" value={inputValue} onChange={(event) => setInputValue(event.target.value)}
               id={"todo-input"}/>
        <button onClick={addTodoItem} id={"add-todo-button"}>add</button>
    </div>
}