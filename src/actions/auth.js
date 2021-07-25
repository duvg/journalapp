import { firebase, googleAuthProvider } from '../firebase/firebaseConfig';
import { types } from '../types/types';
import { finishLoading, startLoading } from './ui';



export const startLoginWithEmailPassword = ( email, password ) => {
    return ( dispatch ) => {
        
        dispatch( startLoading() );

        firebase.auth().signInWithEmailAndPassword( email, password)
            .then( ({ user }) => {
                dispatch( login(user.uid, user.displayName) );
                dispatch( finishLoading() );
            })
            .catch( e => {
                console.log(e);
                dispatch( finishLoading() );
            });

    }
}

export const startGoogleLogin = () => {
    return ( dispatch ) => {
       
        firebase.auth().signInWithPopup( googleAuthProvider )
            .then( ({user}) => {
                dispatch(
                    login( user.uid, user.displayName )
                );
            });
    }
}


export const startRegisterWithEmailPasswordName = ( name, email, password) => {
    return ( dispatch ) => {

        firebase.auth().createUserWithEmailAndPassword( email, password )
            .then(async ({ user }) => {

                await user.updateProfile({ displayName: name });
                console.log( user );

                dispatch(
                    login( user.uid, user.displayName )
                )
            })
            .catch( e => {
                console.log(e);
            })

        // dispatch( register(name, email, password) );
    }
}

export const login = (uid, displayName) => ({
    type: types.login,
    payload: {
        uid,
        displayName
    }
});

export const register = (name, email, password) => ({
    type: types.register,
    payload: {
        name,
        email,
        password
    }
});

export const startLogout = () => {
    return async ( dispatch ) => {
        await firebase.auth().signOut();

        dispatch( logout() );
    }
}

export const logout = () => ({
    type: types.logout
})
