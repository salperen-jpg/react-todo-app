import React from 'react';
import { useGlobalContext } from '../context';

const Todo = ({ id, title, exp, urgency }) => {
  const { deleteTodo, editTodo } = useGlobalContext();
  return (
    <div className={`${urgency > 2 ? 'todo border' : 'todo'} `}>
      <div className='todo-header'>
        <h3>{title}</h3>
        <div className='icons'>
          <button
            className='edit-btn'
            onClick={() => {
              editTodo(id);
            }}
          >
            <i className='fas fa-edit'></i>
          </button>
          <button
            className='delete-btn'
            onClick={() => {
              deleteTodo(id);
            }}
          >
            <i className='fas fa-trash-alt'></i>
          </button>
        </div>
      </div>
      <div className='todo-exp'>
        <span>{exp}</span>
      </div>
      <div
        className={`${urgency > 2 ? 'urgency urgency-animation' : 'urgency'} `}
      >
        <span>{urgency}</span>
      </div>
    </div>
  );
};

export default Todo;
