import {createBrowserRouter} from "react-router";
import {DefaultLayout} from "../layouts/DefaultLayout";
import {ErrorPage} from "../pages/ErrorPage";
import {HomePage} from "../pages/HomePage";
import {TodoDetailPage} from "../pages/TodoDetailPage";
import {DoneListPage} from "../pages/DoneListPage";
import {AboutUsPage} from "../pages/AboutUsPage";

export const routes = createBrowserRouter([
    {
        path: "/",
        element: <DefaultLayout/>,
        errorElement: <ErrorPage/>,
        children: [
            {
                path: "/",
                element: <HomePage/>
            },
            {
                path: "/todos/:id",
                element: <TodoDetailPage/>
            },
            {
                path: "/done",
                element: <DoneListPage/>
            },
            {
                path: "/aboutUs",
                element: <AboutUsPage/>
            }
        ]
    }
]);