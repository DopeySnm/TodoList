import {useTodoList, useRemoveTodo, useEditTodo} from '../../hooks/useTodo';
import {useState} from "react";
import styled from 'styled-components'
import {EditNameTodoAlert} from '../alerts/EditNameTodoAlert';

const ButtonContainer = styled.div`
    display: flex;
    gap: 5px;
    flex-direction: row;
    justify-content: flex-end;
`;

const Container = styled.div`
    display: flex;
    gap: 5px;
    flex-direction: column;
`;

const TodoListContainer = styled.div`
    display: flex;
    gap: 5px;
    flex-direction: column;
`;

const TodoItemContainer = styled.div`
    display: flex;
    border-radius: 5px;
    background-color: #808080;
    gap: 15px;
    color: #fff;
    flex-direction: row;
    border: solid 1px rgb(0, 0, 0);
    padding: 10px;
    justify-content: space-between;
    align-items: center;
`;

const Button = styled.button`
    background-color: #333;
    border-radius: 5px;
    color: #fff;
    padding: 5px;
`;

export const TodoList = () => {
    const {todoList} = useTodoList()
    const [searchValue, setSearchValue] = useState('')
    const {removeTodo: removeTodo} = useRemoveTodo()
    const {editTodo: editTodoInList} = useEditTodo()
    const [name, setName] = useState('')

    if (!todoList) {
        return null;
    }

    const onChangeStateTodo = (todo) => {
        todo.isDone = !todo.isDone
        editTodoInList(todo);
    }

    const onSearchInputChange = (event) => {
        setSearchValue(event.nativeEvent.target.value);
    }

    const onClickDeleteTodo = (todo) => {
        removeTodo(todo);
    }

    const onClickEditNameTodo = (todo) => {
        todo.name = name
        editTodoInList(todo);
    }

    const onInputChange = (event) => {
        setName(event.nativeEvent.target.value);
    }

    const filteredTodo = filterTodo(todoList, searchValue);

    return (
        <Container>
            <input value={searchValue} onChange={onSearchInputChange} />
            <TodoListContainer>
                {filteredTodo.map((todo) => {
                    return (
                        <TodoItemContainer> 
                            <input type="checkbox" checked={todo.isDone} onChange={() => onChangeStateTodo(todo)}/>
                            <p>{todo.name}</p>
                            <ButtonContainer>
                                <EditNameTodoAlert value={name} onChange={onInputChange} onClick={() => onClickEditNameTodo(todo)}/>
                                <Button onClick={() => onClickDeleteTodo(todo)}>Удалить</Button>
                            </ButtonContainer>
                        </TodoItemContainer>
                    )
                })}
            </TodoListContainer>
        </Container>
    )
}

const filterTodo = (todoList, searchValue) => {
    return todoList.filter((el) => {
        const isNameMatch = el.name.toLowerCase().indexOf(searchValue.toLowerCase()) >= 0;
        return isNameMatch;
    });
}