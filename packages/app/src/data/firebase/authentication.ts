import { auth } from 'firebase/app'
import { User } from '../../domain/entities'

export async function signInWithEmailAndPassword(email: string, password: string){
  try {
    const { user } = await auth().signInWithEmailAndPassword(
      email, password
      )
    return new User(user.uid, user.email, { emailVerified: user.emailVerified, name: user.displayName })
  } catch (error) {
    console.log(error)
  }
}
