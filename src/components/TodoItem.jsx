import {useContext, useState} from "react";
import {TodoContext} from "../contexts/TodoContext";
import {useNavigate} from "react-router";
import {useTodoService} from "../useTodoService";
import React from 'react';
import {Checkbox} from 'antd';
import {Button, Modal} from 'antd';

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

    function EditModal() {
        const [isModalOpen, setIsModalOpen] = useState(false);
        const [inputValue, setInputValue] = useState("")

        const showModal = () => {
            setInputValue(props.todo.text)
            setIsModalOpen(true);
        };

        const handleOk = () => {
            if (inputValue.trim()) {
                props.todo.text = inputValue
                updateTodos(props)
                    .then(todo => dispatch({type: "UPDATE_TODO", payload: todo}))
                setInputValue("")
            }
            setIsModalOpen(false);
        };

        const handleCancel = () => {
            setIsModalOpen(false);
        };
        return <>
            <Button type="primary" onClick={showModal}>
                Edit
            </Button>
            <Modal
                title="Basic Modal"
                closable={{'aria-label': 'Custom Close Button'}}
                open={isModalOpen}
                onOk={handleOk}
                onCancel={handleCancel}
            >
                <input type={"text"} value={inputValue} onChange={(event) => setInputValue(event.target.value)}></input>
            </Modal>
        </>;
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
        <EditModal/>
    </div>
}

