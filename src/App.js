import './App.css';
import {RouterProvider} from "react-router";
import {useReducer} from "react";
import {TodoContext} from "./contexts/TodoContext";
import {todoReducer} from "./reducers/TodoReducer";
import {routes} from "./routes/Routes";

export const initState = [];

function App() {
    const [state, dispatch] = useReducer(todoReducer, initState);

    return (
        <div>
            <TodoContext.Provider value={{state, dispatch}}>
                <RouterProvider router={routes}/>
            </TodoContext.Provider>
        </div>
    );
}

export default App;