import {useState} from "react";
import {useAddTodo} from "../../hooks/useTodo";
import { AddTodoAlert } from "../alerts/AddTodoAlert";

export const AddTodo = () => {
    const {addTodo: addTodoToList} = useAddTodo()
    const [name, setName] = useState('');

    const onInputChange = (event) => {
        setName(event.nativeEvent.target.value);
    }

    const addTodo = () => {
        addTodoToList({
            name,
            isDone: false,
        });
    }

    return (
        <div>
            <AddTodoAlert value={name} onChange={onInputChange} onClick={addTodo}/>
            {/* <input value={name} onChange={onInputChange} placeholder={'Todo Name'} /> */}
            {/* <button onClick={addTodo}>Добавить</button> */}
        </div>
    )
}