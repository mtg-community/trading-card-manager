import * as React from 'react';
import { useAuth } from '../hooks/useAuth';
import signInWallPaper from '../../../../assets/images/signInWallpaper.jpg';

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
    <div >
      <div>
        <div>
          <img
            src={signInWallPaper}
            alt='liliana'
          />
        </div>
        <div>
          <input
            value={email}
            autoCapitalize="none"
            placeholder="email"
            onChange={(event) => setEmail(event.target.value)}
          />
          <input
            value={password}
            autoCapitalize="none"
            placeholder="********"
            onChange={(event) => setPassword(event.target.value)}
          />
          <div onClick={signIn}>
            <p>Sign In</p>
          </div>
        </div>
      </div>
    </div>
  );
};
