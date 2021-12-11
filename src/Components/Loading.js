import React, { useEffect } from 'react';
import { useGlobalContext } from '../context';

const Loading = () => {
  const { closeLoading } = useGlobalContext();
  useEffect(() => {
    const timeout = setTimeout(() => {
      closeLoading();
    }, 1000);
    return () => clearTimeout(timeout);
  });
  return <div className='loading'></div>;
};

export default Loading;
