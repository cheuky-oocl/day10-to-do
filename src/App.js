import {useContext, useReducer, useState} from "react";
import './App.css';
import {todoReducer} from "./reducers/TodoReducer";
import {TodoContext} from "./contexts/TodoContext";
import {TodoGroup} from "./components/TodoGroup";

export const initState = [
    {id: 1, text: "the first todo", done: false},
    {id: 2, text: "the second todo", done: true},
];

function TodoInput() {
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
        <input type="text" value = {inputValue} onChange={(event) => setInputValue(event.target.value)}/>
        <button onClick={addTodoItem}>add</button>
    </div>
}

function App() {
    const [state, dispatch] = useReducer(todoReducer, initState);
    return (
        <div>
            <h1>Todo List</h1>
            <div>
                <TodoContext.Provider value={{state, dispatch}}>
                    <TodoGroup/>
                    <TodoInput/>
                </TodoContext.Provider>
            </div>
        </div>
    );
}

export default App;