import './App.css';
import {TodoList} from "./components/TodoList";
import {createBrowserRouter, NavLink, Outlet, RouterProvider} from "react-router";

export const initState = [];

function DefaultLayout(){
    return <div>
        <header>
            <nav>
                <ul>
                    <li><NavLink to={"/"}>Home</NavLink></li>
                </ul>
            </nav>
        </header>
        <main>
            <Outlet/>
        </main>
    </div>
}

const routes = createBrowserRouter([
    {
        path: "/",
        element: <DefaultLayout/>,
        children: [
            {
                path: "/",
                element: <TodoList/>
            }
        ]
    }
    ]);

function App() {

    return (
        <div>
            <RouterProvider router={routes}/>
        </div>
    );
}

export default App;