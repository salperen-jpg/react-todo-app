import React from 'react';
import { useGlobalContext } from '../context';
import Todo from './Todo';

const Todos = () => {
  const { todos } = useGlobalContext();
  return (
    <article className='todos'>
      {todos.map((todo) => {
        return <Todo key={todo.id} {...todo} />;
      })}
    </article>
  );
};

export default Todos;
