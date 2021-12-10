import React from 'react';
import { useGlobalContext } from '../context';
import Alert from './Alert';

const Form = () => {
  const {
    todo,
    setTodo,
    addTodo,
    explanation,
    setExp,
    isEditing,
    finishEdit,
    alert,
  } = useGlobalContext();

  const submitHandler = (e) => {
    e.preventDefault();
    if (isEditing && todo && explanation) {
      finishEdit();
    } else if (todo && explanation) {
      addTodo();
    }
  };

  return (
    <div className='todo-form'>
      <form action='' className='my-form' onSubmit={submitHandler}>
        <input
          type='text'
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
          placeholder='Add Todo...'
          className='todo-input'
        />

        <input
          type='text'
          value={explanation}
          onChange={(e) => setExp(e.target.value)}
          placeholder='Add Exp....'
          className='todo-input exp'
        />
        <button className='btn' disabled={!explanation || !todo} type='submit'>
          {isEditing ? 'Edit' : 'Add Todo'}
        </button>
        {alert.show && <Alert />}
      </form>
    </div>
  );
};

export default Form;
