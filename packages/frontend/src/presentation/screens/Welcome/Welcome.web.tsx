import * as React from 'react';
import { useAuth } from '../../hooks/useAuth';

export const Welcome: React.FC = () => {
  const [
    email,
    password,
    setEmail,
    setPassword,
    {
      actions: { signIn },
    },
  ] = useAuth();

  return (
    <div>
      <form onSubmit={signIn}>
        <input
          value={email}
          autoCapitalize="none"
          placeholder="email"
          onChange={(event): void => setEmail(event.target.value)}
          required
        />
        <input
          value={password}
          autoCapitalize="none"
          placeholder="********"
          onChange={(event): void => setPassword(event.target.value)}
          required
        />
        <button type="submit">Sign In</button>
      </form>
    </div>
  );
};
