import React, {useContext, useState} from "react";
import {Button, Modal} from "antd";
import {EditOutlined} from "@ant-design/icons";
import TextArea from "antd/es/input/TextArea";
import {useTodoService} from "../useTodoService";
import {TodoContext} from "../contexts/TodoContext";

export function EditModal(props) {
    const {dispatch} = useContext(TodoContext)
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [inputValue, setInputValue] = useState("")
    const {updateTodos} = useTodoService();

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
        <Button id={"edit-button"} type="primary" onClick={showModal}>
            <EditOutlined/>
        </Button>
        <Modal
            title="Edit Todo"
            closable={{'aria-label': 'Custom Close Button'}}
            open={isModalOpen}
            onOk={handleOk}
            onCancel={handleCancel}
        >
            <TextArea
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Controlled autosize"
                autoSize={{minRows: 3, maxRows: 5}}
            />
        </Modal>
    </>;
}