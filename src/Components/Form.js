import React from 'react';
import { useGlobalContext } from '../context';
import Alert from './Alert';

const Form = () => {
  const {
    todo,
    setTodo,
    addTodo,
    explanation,
    urgency,
    setExp,
    isEditing,
    finishEdit,
    alert,
    setUrgency,
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
        <select
          name=''
          id=''
          className='number-input'
          value={urgency}
          onChange={(e) => setUrgency(parseInt(e.target.value))}
        >
          <option value='0' selected>
            0
          </option>
          <option value='1'>1</option>
          <option value='2'>2</option>
          <option value='3'>3</option>
          <option value='4'>4</option>
          <option value='5'>5</option>
        </select>
        <button
          className='btn'
          disabled={!explanation || !todo || !urgency}
          type='submit'
        >
          {isEditing ? 'Edit' : 'Add Todo'}
        </button>
      </form>
      {alert.show && <Alert />}
    </div>
  );
};

export default Form;
