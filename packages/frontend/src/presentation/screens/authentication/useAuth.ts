import { useDispatch } from 'react-redux';
import { useState } from 'react';
import {
  LoginCredentials,
  signIn,
} from '../../../domain/sagas/authenticationSaga';
import { Email } from '../../../domain/entities';

type UseAuthType = [
  string,
  string,
  (email: string) => void,
  (password: string) => void,
  {
    actions: {
      signIn: () => Promise<void>;
    };
  }
];

export function useAuth(): UseAuthType {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  async function handleSignIn(): Promise<void> {
    const userCredential: LoginCredentials = {
      password,
      email: new Email(email),
    };
    dispatch(signIn(userCredential));
  }

  return [
    email,
    password,
    setEmail,
    setPassword,
    {
      actions: {
        signIn: handleSignIn,
      },
    },
  ];
}
