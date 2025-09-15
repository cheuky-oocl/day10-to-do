import './App.css';
import {RouterProvider} from "react-router";
import {useEffect, useReducer} from "react";
import {TodoContext} from "./contexts/TodoContext";
import {todoReducer} from "./reducers/TodoReducer";
import {routes} from "./routes/Routes";
import axios from "axios";

const api = axios.create({
    baseURL: "https://68c7ac8e5d8d9f51473287a1.mockapi.io/",
    headers: {"Content-Type": "application/json"},
    timeout: 10_000
})

function App() {
    const [state, dispatch] = useReducer(todoReducer, []);
    useEffect(() => {
        api.get("/todos")
            .then(response => response.data)
            .then(todos => dispatch({type: "LOAD_TODOS", payload: todos}))
    }, [dispatch]);

    return (
        <div>
            <TodoContext.Provider value={{state, dispatch}}>
                <RouterProvider router={routes}/>
            </TodoContext.Provider>
        </div>
    );
}

export default App;