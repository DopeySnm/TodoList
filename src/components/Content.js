import React from 'react';
import styled from 'styled-components'
import { AddTodo } from './todo/AddTodo';
import { TodoList } from './todo/TodoList';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 5px;
    border: solid 1px rgb(155, 155, 155);
    padding: 15px;
`;

export const Content = () => {
    return (
        <Container>
            <AddTodo />
            <TodoList />
        </Container>
    )
}