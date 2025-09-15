import {useContext} from "react";
import {TodoContext} from "../contexts/TodoContext";
import {useNavigate} from "react-router";
import {api} from "../api/mockApi";

const updateTodo = (props) => {
    return api.put("/todos/" + props.todo.id, {
        text: props.todo.text,
        done: !props.todo.done
    }).then(res => res.data);
}

const deleteTodo = (props) => {
    return api.delete("/todos/" + props.todo.id);
}

export function TodoItem(props) {
    const {dispatch} = useContext(TodoContext)
    const navigate = useNavigate()

    function makeAsDone() {
        updateTodo(props)
            .then(todo => dispatch({type: "UPDATE_TODO", payload: todo}))
    }

    function deleteTodoItem() {
        deleteTodo(props)
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

