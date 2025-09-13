import {useReducer} from "react";
import './App.css';
import {todoReducer} from "./reducers/TodoReducer";
import {TodoContext} from "./contexts/TodoContext";
import {TodoGroup} from "./components/TodoGroup";
import {TodoInput} from "./components/TodoInput";

export const initState = [];

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