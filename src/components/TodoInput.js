import {useContext, useState} from "react";
import {TodoContext} from "../contexts/TodoContext";

export function TodoInput() {
    const {state, dispatch} = useContext(TodoContext)
    const [inputValue, setInputValue] = useState("")

    function addTodoItem() {
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

    return <div>
        <input type="text" value={inputValue} onChange={(event) => setInputValue(event.target.value)}/>
        <button onClick={addTodoItem}>add</button>
    </div>
}