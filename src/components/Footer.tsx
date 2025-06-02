import React from 'react';

interface Props {
    count: number;
    filter: 'all' | 'active' | 'completed';
    setFilter: (value: 'all' | 'active' | 'completed') => void;
    clearCompleted: () => void;
}

const Footer: React.FC<Props> = ({ count, filter, setFilter, clearCompleted }) => {
    return (
        <div>
            <span>{count} items left</span>
            <button onClick={() => setFilter('all')} disabled={filter === 'all'}>
                All
            </button>
            <button onClick={() => setFilter('active')} disabled={filter === 'active'}>
                Active
            </button>
            <button onClick={() => setFilter('completed')} disabled={filter === 'completed'}>
                Completed
            </button>
            <button onClick={clearCompleted}>Clear completed</button>
        </div>
    );
};

export default Footer;
