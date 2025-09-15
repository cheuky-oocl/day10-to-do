import './App.css';
import {TodoList} from "./components/TodoList";
import {createBrowserRouter, RouterProvider} from "react-router";

export const initState = [];

const routes = createBrowserRouter([
    {
        path: "/",
        element: <TodoList/>
    }
    ]
)

function App() {

    return (
        <div>
            <RouterProvider router={routes}/>
        </div>
    );
}

export default App;