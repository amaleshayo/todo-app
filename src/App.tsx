import React, { useState } from 'react';
import { Todo } from './types/todo';
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';
import Footer from './components/Footer';
import './App.css';

function App() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [newTodoText, setNewTodoText] = useState('');
  const [filter, setFilter] = useState<'all' | 'active' | 'completed'>('all');

  const addTodo = () => {
    if (!newTodoText.trim()) return;
    const newTodo: Todo = {
      id: crypto.randomUUID(),
      text: newTodoText.trim(),
      completed: false,
    };
    setTodos([...todos, newTodo]);
    setNewTodoText('');
  };

  const toggleTodo = (id: string) => {
    setTodos(
        todos.map((t) => (t.id === id ? { ...t, completed: !t.completed } : t))
    );
  };

  const filteredTodos = todos.filter((todo) => {
    if (filter === 'active') return !todo.completed;
    if (filter === 'completed') return todo.completed;
    return true;
  });

  const clearCompleted = () => {
    setTodos(todos.filter((todo) => !todo.completed));
  };

  return (
      <div className="App">
        <h1>todos</h1>
        <TodoInput value={newTodoText} onChange={setNewTodoText} onAdd={addTodo} />
        <TodoList todos={filteredTodos} onToggle={toggleTodo} />
        <Footer
            count={todos.filter((t) => !t.completed).length}
            filter={filter}
            setFilter={setFilter}
            clearCompleted={clearCompleted}
        />
      </div>
  );
}

export default App;
