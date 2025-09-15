import {useContext, useState} from "react";
import {TodoContext} from "../contexts/TodoContext";
import {useTodoService} from "../useTodoService";

export function TodoInput() {
    const {dispatch} = useContext(TodoContext)
    const [inputValue, setInputValue] = useState("")
    const {createTodos} = useTodoService();

    function addTodoItem() {
        if (inputValue.trim()) {
            createTodos(inputValue)
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