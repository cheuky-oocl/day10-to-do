import {useContext} from "react";
import {TodoContext} from "../contexts/TodoContext";
import {TodoItem} from "../components/TodoItem";

export function DoneListPage() {
    const {state, dispatch} = useContext(TodoContext)
    const todo = state.filter((todo) => todo.done === true);

    if (todo.length === 0) {
        return <div>Not found done Todo</div>
    }

    return <div>
        {todo.map((item, index) => <TodoItem todo={item} index={index}/>)}
    </div>
}