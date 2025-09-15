import {useContext} from "react";
import {TodoContext} from "../contexts/TodoContext";
import {useNavigate} from "react-router";
import {useTodoService} from "../useTodoService";

export function TodoItem(props) {
    const {dispatch} = useContext(TodoContext)
    const navigate = useNavigate()
    const {updateTodos, deleteTodos} = useTodoService();

    function makeAsDone() {
        updateTodos(props)
            .then(todo => dispatch({type: "UPDATE_TODO", payload: todo}))
    }

    function deleteTodoItem() {
        deleteTodos(props)
            .then(dispatch({type: "DELETE_TODO", payload: {id: props.todo.id}}))
    }

    function toDetailPage() {
        navigate("todos/" + props.todo.id)
    }

    return <div className={"todo-row"}>
        <div className={"todo-item"}>
            <span
                className={props.todo.done ? "todo-done" : ""}
                onClick={makeAsDone}
            >
                {props.todo.text}
            </span>
        </div>
        <button onClick={deleteTodoItem}>X</button>
        <button onClick={toDetailPage}>Detail</button>
    </div>
}

