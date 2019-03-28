import { useState } from 'react';

export const useCredentialsHook = (onSubmit, onError) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async event => {
    event.preventDefault();
    await onSubmit(email, password, onError);
    setEmail('');
    setPassword('');
  };

  return {
    email,
    setEmail,
    password,
    setPassword,
    handleSubmit,
  };
};
