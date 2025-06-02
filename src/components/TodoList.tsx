import React from 'react';
import { Todo } from '../types/todo';
import TodoItem from './TodoItem';

interface Props {
    todos: Todo[];
    onToggle: (id: string) => void;
}

const TodoList: React.FC<Props> = ({ todos, onToggle }) => {
    return (
        <ul>
            {todos.map((todo) => (
                <TodoItem key={todo.id} todo={todo} onToggle={onToggle} />
            ))}
        </ul>
    );
};

export default TodoList;
