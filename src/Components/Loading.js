import React, { useEffect } from 'react';
import { useGlobalContext } from '../context';

const Loading = () => {
  const { closeLoading, todos } = useGlobalContext();
  useEffect(() => {
    const timeout = setTimeout(() => {
      closeLoading();
    }, 2000);
    return () => clearTimeout(timeout);
  }, [todos]);
  return <div className='loading'></div>;
};

export default Loading;
