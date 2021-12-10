import React from 'react';
import { useGlobalContext } from '../context';
import Loading from './Loading';
import Todo from './Todo';

const Todos = () => {
  const { todos, isLoading } = useGlobalContext();

  if (isLoading) {
    return (
      <div className='center'>
        <Loading />
      </div>
    );
  }

  if (todos.length < 1) {
    return (
      <div className='center'>
        <h1>There is nothing to do ....</h1>
      </div>
    );
  }

  return (
    <article className='todos'>
      {todos.map((todo) => {
        return <Todo key={todo.id} {...todo} />;
      })}
    </article>
  );
};

export default Todos;
