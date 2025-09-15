import {api} from "./api/mockApi";

export function useTodoService() {
    const loadTodos = () => {
        return api.get("/todos")
            .then(res => res.data);
    }

    const createTodos = (inputValue) => {
        return api.post("/todos", {
            text: inputValue.trim(),
            done: false
        }).then(res => res.data);
    }

    const updateTodos = (props) => {
        return api.put("/todos/" + props.todo.id, {
            text: props.todo.text,
            done: !props.todo.done
        }).then(res => res.data);
    }

    const deleteTodos = (props) => {
        return api.delete("/todos/" + props.todo.id);
    }

    return {loadTodos, createTodos, updateTodos, deleteTodos}
}