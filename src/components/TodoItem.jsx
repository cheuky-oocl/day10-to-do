import React, {useContext} from "react";
import {TodoContext} from "../contexts/TodoContext";
import {useNavigate} from "react-router";
import {useTodoService} from "../useTodoService";
import {Checkbox} from 'antd';
import {EditModal} from "./EditModal";


export function TodoItem(props) {
    const {dispatch} = useContext(TodoContext)
    const navigate = useNavigate()
    const {updateTodos, deleteTodos} = useTodoService();

    function makeAsDone() {
        props.todo.done = !props.todo.done
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
            {/*<span*/}
            {/*    className={props.todo.done ? "todo-done" : ""}*/}
            {/*    onClick={makeAsDone}*/}
            {/*>*/}
            {/*    {props.todo.text}*/}
            {/*</span>*/}
            <Checkbox className={props.todo.done ? "todo-done" : ""} onChange={makeAsDone}
                      checked={props.todo.done}>{props.todo.text}</Checkbox>
        </div>
        <button id={"delete-button"} onClick={deleteTodoItem}>X</button>
        <button id={"detail-button"} onClick={toDetailPage}>Detail</button>
        <EditModal todo={props.todo} key={props.todo.id}/>
    </div>
}

