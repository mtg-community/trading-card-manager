import { auth } from 'firebase/app';
import { Email, User } from '../../domain/entities';
import { ErrorReporter } from '../../domain/ErrorReporter';
import { NOT_LOGGED_IN_USER } from '../../domain/entities/user';

function mapFirebaseUserToUserDomain(user: firebase.User | null): User {
  if (!user || !user.email || !user.uid) {
    throw new Error('Invalid Firebase User');
  }

  return new User(user.uid, user.email, {
    emailVerified: Boolean(user.emailVerified),
    name: user.displayName || undefined,
  });
}

async function setPersistence(): Promise<void> {
  return auth().setPersistence(auth.Auth.Persistence.LOCAL);
}

export async function signInWithEmailAndPassword(
  email: Email,
  password: string,
): Promise<User> {
  try {
    await setPersistence()
    const { user } = await auth().signInWithEmailAndPassword(
      email.toString(),
      password,
    );
    return mapFirebaseUserToUserDomain(user);
  } catch (error) {
    ErrorReporter.report(error);
    return NOT_LOGGED_IN_USER;
  }
}

export async function createUserWithEmailAndPassword(
  email: Email,
  password: string,
): Promise<User> {
  try {
    await setPersistence()
    const { user } = await auth().createUserWithEmailAndPassword(
      email.toString(),
      password,
    );
    return mapFirebaseUserToUserDomain(user);
  } catch (error) {
    ErrorReporter.report(error);
    return NOT_LOGGED_IN_USER;
  }
}

export async function sendPasswordResetEmail(email: string): Promise<void> {
  return auth().sendPasswordResetEmail(email);
}

export async function signOut(): Promise<void> {
  return auth().signOut();
}

export async function signInWithCredential(
  credential: auth.AuthCredential,
): Promise<User> {
  try {
    const { user } = await auth().signInWithCredential(credential);
    return mapFirebaseUserToUserDomain(user);
  } catch (e) {
    ErrorReporter.report(e);
    return NOT_LOGGED_IN_USER;
  }
}

export async function createGoogleCredential(
  idToken: string,
): Promise<auth.OAuthCredential | void> {
  try {
    return await auth.GoogleAuthProvider.credential(idToken);
  } catch (error) {
    ErrorReporter.report(error);
  }
}
