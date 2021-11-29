import firebase from 'firebase/compat';
import { auth } from '../config/firebase';

export const SignWithSocialMedia = (
    provider: firebase.auth.GoogleAuthProvider
) =>
    new Promise<firebase.auth.UserCredential>((resolve, reject) => {
        auth.signInWithPopup(provider)
            .then((result) => resolve(result))
            .catch((error) => reject(error));
    });
