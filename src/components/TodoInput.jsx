import {useContext, useState} from "react";
import {TodoContext} from "../contexts/TodoContext";

export function TodoInput() {
    const {state, dispatch} = useContext(TodoContext)
    const [inputValue, setInputValue] = useState("")

    function addTodoItem() {
        if (inputValue.trim()){
            const newTodo = {
                id: state.length + 1,
                text: inputValue,
                done: false
            }
            dispatch({
                type: "ADD_TODO",
                payload: {todo: newTodo}
            })
            setInputValue("")
        }
    }

    return <div className={"todo-input"}>
        <input type="text" value={inputValue} onChange={(event) => setInputValue(event.target.value)}
               id={"todo-input"}/>
        <button onClick={addTodoItem} id={"add-todo-button"}>add</button>
    </div>
}