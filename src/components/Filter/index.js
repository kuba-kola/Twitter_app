import React from 'react';

import './style.module.css'
    
const PostStatusFilter = ({
    filter,
    onFilterSelect,
}) => {
const defaultButtons = [
    { name: 'all', label: 'Усе' },
    { name: 'like', label: 'Спадабалася' }
];
        
const buttons = defaultButtons.map(({ name, label }) => {
    const active = filter === name;
    const style = active ? 'btn-info' : 'btn-outline-secondary'
    return (
        <button type='button'
            className={`btn ${style}`}
            key={name}
            onClick={() => onFilterSelect(name)}
        >
            {label}
        </button>
    )
});

return (
    <div className="btn-group">
        {buttons}
    </div>
)
};

export default PostStatusFilter;
