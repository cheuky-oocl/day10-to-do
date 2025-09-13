import {useReducer} from "react";
import './App.css';
import {todoReducer} from "./reducers/TodoReducer";
import {TodoContext} from "./contexts/TodoContext";
import {TodoGroup} from "./components/TodoGroup";
import {TodoInput} from "./components/TodoInput";

export const initState = [
    {id: 1, text: "the first todo", done: false},
    {id: 2, text: "the second todo", done: true},
];

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