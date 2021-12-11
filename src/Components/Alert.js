import React, { useEffect } from 'react';
import { useGlobalContext } from '../context';

const Alert = () => {
  const { alert, closeModal } = useGlobalContext();
  useEffect(() => {
    const timeout = setTimeout(() => {
      closeModal();
    }, 2000);
    return () => clearTimeout(timeout);
  });

  return (
    <div className={`alert ${alert.status}`}>
      <p>{alert.msg}</p>
    </div>
  );
};

export default Alert;
