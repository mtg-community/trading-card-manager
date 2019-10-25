import { auth } from 'firebase/app';
import { Email, User } from '../../domain/entities';

export async function signInWithEmailAndPassword(
  email: Email,
  password: string,
): Promise<User | void> {
  try {
    const { user } = await auth().signInWithEmailAndPassword(
      email.toString(),
      password,
    );
    return new User(user.uid, user.email, {
      emailVerified: user.emailVerified,
      name: user.displayName,
    });
  } catch (error) {
    console.log(error);
  }
}

export async function createUserWithEmailAndPassword(
  email: Email,
  password: string,
): Promise<User | void> {
  try {
    const { user } = await auth().createUserWithEmailAndPassword(
      email.toString(),
      password,
    );
    return new User(user.uid, user.email, {
      emailVerified: user.emailVerified,
      name: user.displayName,
    });
  } catch (error) {
    console.log(error);
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
): Promise<User | void> {
  try {
    const { user } = await auth().signInWithCredential(credential);
    return new User(user.uid, user.email, {
      emailVerified: user.emailVerified,
      name: user.displayName,
    });
  } catch (error) {
    console.log(error);
  }
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
