import React from 'react';
import { Todo } from '../types/todo';

interface Props {
    todo: Todo;
    onToggle: (id: string) => void;
}

const TodoItem: React.FC<Props> = ({ todo, onToggle }) => {
    return (
        <li>
            <label style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
                <input
                    type="checkbox"
                    checked={todo.completed}
                    onChange={() => onToggle(todo.id)}
                />
                {todo.text}
            </label>
        </li>
    );
};

export default TodoItem;
