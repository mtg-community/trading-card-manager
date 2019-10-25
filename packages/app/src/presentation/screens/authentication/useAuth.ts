import { useDispatch } from 'react-redux';
import { useState } from 'react';
import {
  ILoginCredentials,
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
      signIn: () => Promise<void>,
    },
  },
];

export function useAuth(): UseAuthType {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const handleSignIn = async () => {
    const userCredential: ILoginCredentials = {
      password,
      email: new Email(email),
    };
    dispatch(signIn(userCredential));
  };

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
