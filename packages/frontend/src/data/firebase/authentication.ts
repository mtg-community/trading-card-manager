import { auth } from 'firebase/app';
import { Email, User } from '../../domain/entities';

function mapFirebaseUserToUserDomain(user: firebase.User | null): User {
  if (!user || !user.email || !user.uid) {
    throw new Error('Invalid Firebase User');
  }

  return new User(user.uid, user.email, {
    emailVerified: Boolean(user.emailVerified),
    name: user.displayName || undefined,
  });
}

export async function signInWithEmailAndPassword(
  email: Email,
  password: string,
): Promise<User | void> {
  const { user } = await auth().signInWithEmailAndPassword(
    email.toString(),
    password,
  );
  return mapFirebaseUserToUserDomain(user);
}

export async function createUserWithEmailAndPassword(
  email: Email,
  password: string,
): Promise<User | void> {
  const { user } = await auth().createUserWithEmailAndPassword(
    email.toString(),
    password,
  );
  return mapFirebaseUserToUserDomain(user);
}

export async function sendPasswordResetEmail(email: string): Promise<void> {
  return auth().sendPasswordResetEmail(email);
}

export async function signOut(): Promise<void> {
  return auth().signOut();
}

export async function signInWithCredential(
  credential: auth.AuthCredential,
): Promise<User | void> {
  const { user } = await auth().signInWithCredential(credential);
  return mapFirebaseUserToUserDomain(user);
}

export async function createGoogleCredential(
  idToken: string,
): Promise<auth.OAuthCredential | void> {
  try {
    const res = await auth.GoogleAuthProvider.credential(idToken);
    console.log('credential', res);
    return res;
  } catch (error) {
    console.log(error);
  }
}
