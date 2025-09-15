import {useParams} from "react-router";
import {useContext} from "react";
import {TodoContext} from "../contexts/TodoContext";
import {TodoItem} from "../components/TodoItem";

export function TodoDetailPage() {
    const {id} = useParams()
    const {state} = useContext(TodoContext)
    const todo = state.filter((todo) => todo.id === id)

    if (todo.length === 0) {
        return <div>Not found Todo</div>
    }

    console.log(todo)

    return <div>
        <span>{todo[0].text}</span>
    </div>
}