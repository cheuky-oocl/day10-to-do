import {TodoGroup} from "./TodoGroup";
import {TodoInput} from "./TodoInput";

export function TodoList() {

    return <div>
        <h1>Todo List</h1>
        <div>
                <TodoGroup/>
                <TodoInput/>
        </div>
    </div>
}