import './App.css';
import {RouterProvider} from "react-router";
import {useEffect, useReducer} from "react";
import {TodoContext} from "./contexts/TodoContext";
import {todoReducer} from "./reducers/TodoReducer";
import {routes} from "./routes/Routes";
import {api} from "./api/mockApi";

const loadTodos = () => {
    return api.get("/todos")
        .then(response => response.data);
}

function App() {
    const [state, dispatch] = useReducer(todoReducer, []);
    useEffect(() => {
        loadTodos()
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