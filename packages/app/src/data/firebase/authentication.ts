import { auth } from 'firebase/app';
import { User } from '../../domain/entities';

export async function signInWithEmailAndPassword(
  email: string,
  password: string,
): Promise<User> {
  try {
    const { user } = await auth().signInWithEmailAndPassword(email, password);
    return new User(user.uid, user.email, {
      emailVerified: user.emailVerified,
      name: user.displayName,
    });
  } catch (error) {
    console.log(error);
  }
}

export async function createUserWithEmailAndPassword(
  email: string,
  password: string,
): Promise<User> {
  try {
    const { user } = await auth().createUserWithEmailAndPassword(
      email,
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

export async function sendPasswordResetEmail(email: string)
  : Promise<void> {
  return auth().sendPasswordResetEmail(email)
}

export async function signOut(): Promise<void> {
  return auth().signOut()
}

export async function signInWithCredential(
  credential: auth.AuthCredential,
): Promise<User> {
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
): Promise<auth.OAuthCredential> {
  try {
    const res = await auth.GoogleAuthProvider.credential(idToken);
    console.log('credential', res);
    return res;
  } catch (error) {
    console.log(error);
  }
}
