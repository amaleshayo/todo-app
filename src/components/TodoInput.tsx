import React from 'react';

interface Props {
    value: string;
    onChange: (value: string) => void;
    onAdd: () => void;
}

const TodoInput: React.FC<Props> = ({ value, onChange, onAdd }) => {
    return (
        <input
            type="text"
            placeholder="What needs to be done?"
            value={value}
            onChange={(e) => onChange(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && onAdd()}
        />
    );
};

export default TodoInput;
