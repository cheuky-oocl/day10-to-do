import './App.css';
import {RouterProvider} from "react-router";
import {useEffect, useReducer} from "react";
import {TodoContext} from "./contexts/TodoContext";
import {todoReducer} from "./reducers/TodoReducer";
import {routes} from "./routes/Routes";
import {useTodoService} from "./useTodoService";
import '@ant-design/v5-patch-for-react-19';
import { unstableSetRender } from 'antd';
import { createRoot } from 'react-dom/client';

unstableSetRender((node, container) => {
    container._reactRoot ||= createRoot(container);
    const root = container._reactRoot;
    root.render(node);
    return async () => {
        await new Promise((resolve) => setTimeout(resolve, 0));
        root.unmount();
    };
});

function App() {
    const [state, dispatch] = useReducer(todoReducer, []);
    const {loadTodos} = useTodoService();

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