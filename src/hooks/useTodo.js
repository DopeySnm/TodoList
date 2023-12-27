import {useMutation, useQuery, useQueryClient} from "react-query";
import {TodoActions} from "../dataActions/Todo";

export const useTodoList = () => {
    const {data} = useQuery({
        queryKey: 'todoList',
        queryFn: TodoActions.getValue
    });
    return {
        todoList: data,
    }
}

export const useAddTodo = () => {
    const {todoList} = useTodoList()

    const queryClient = useQueryClient();
    const {mutate} = useMutation({
        mutationFn: (todo) => {
            if (todoList) {
                const newTodoArray = todoList.concat([todo])
                return TodoActions.saveValue(newTodoArray);
            }
        },
        onSuccess: () => {
            queryClient.invalidateQueries('todoList')
        }
    });

    return {
        addTodo: mutate
    }
}

export const useEditTodo = () => {
    const {todoList} = useTodoList()

    const queryClient = useQueryClient();
    const {mutate} = useMutation({
        mutationFn: (todo) => {
            if (todoList) {
                const newTodoArray = todoList.map((todo_item) => 
                {
                    if (todo_item === todo) {
                        todo_item = todo
                    }
                    return todo_item;
                })
                return TodoActions.saveValue(newTodoArray);
            }
        },
        onSuccess: () => {
            queryClient.invalidateQueries('todoList')
        }
    });

    return {
        editTodo: mutate
    }
}

export const useRemoveTodo = () => {
    const {todoList} = useTodoList()

    const queryClient = useQueryClient();
    const {mutate} = useMutation({
        mutationFn: (todo) => {
            if (todoList) {
                const newTodoArray = todoList.filter((todo_) => todo_ !== todo);
                return TodoActions.saveValue(newTodoArray);
            }
        },
        onSuccess: () => {
            queryClient.invalidateQueries('todoList')
        }
    });

    return {
        removeTodo: mutate
    }
}