import { firebase ,googleAuthProvider } from "./firebase-config"

export const signInWithGoogle = async() => {
    try {
        
        const { user } = await firebase.auth().signInWithPopup(googleAuthProvider)

        return {
            uid: user.uid,
            displayName: user.displayName,
            photoURL: user.photoURL
        }

    } catch (error) {
        console.error(`Something went wrong ${ error }`);
    }
    
}

export const signOut = async(dispatch) => {
    try {
    await firebase.auth().signOut();
    dispatch({
        type: 'logout'
    });

    } catch (error) {
        console.error(`Something went wrong ${ error }`);
    }
}