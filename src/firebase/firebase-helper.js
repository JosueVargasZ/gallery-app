import Swal from "sweetalert2";
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
        // console.error(`Something went wrong ${ error }`);
        Swal.fire('Error', error.message, 'error' );

    }
    
}

export const signInWithEmailPass = async( email, password ) => {
    try {
        
        const { user } = await firebase.auth().signInWithEmailAndPassword( email, password );

        return {
            uid: user.uid,
            displayName: user.displayName,
            photoURL: user.photoURL
        }

    } catch (error) {
        // console.error(`Something went wrong ${ error }`);
        Swal.fire('Error', error.message, 'error' );

    }
    
}


export const RegisterWithEmailPassName = ( email, password, name ) => {
        
        return firebase.auth().createUserWithEmailAndPassword(email, password )
            .then( async({user}) => {
                await user.updateProfile({displayName: name});
                
                return {
                    uid: user.uid,
                    displayName: user.displayName,
                    photoURL: user.photoURL
                }
            })
            .catch( e => {
                Swal.fire('Error',e.message, 'error');
            })

    
}


export const signOut = async(dispatch) => {
    try {
    await firebase.auth().signOut();
    dispatch({
        type: 'logout'
    });

    } catch (error) {
        // console.error(`Something went wrong ${ error }`);
        Swal.fire('Error', error.message, 'error' );

    }
}