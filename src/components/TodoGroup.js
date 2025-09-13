import {useContext} from "react";
import {TodoContext} from "../contexts/TodoContext";
import {TodoItem} from "./TodoItem";

export function TodoGroup() {
    const {state} = useContext(TodoContext)

    if (state.length === 0) {
        return <div>
            <h3>Add things you need to do today...</h3>
        </div>
    }
    return <div>
        {
            state.map((item, index) => {
                return <TodoItem todo={item} key={index}/>
            })
        }
    </div>
}