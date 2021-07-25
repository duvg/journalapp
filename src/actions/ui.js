import { types } from "../types/types";


export const setErrorAction = ( err ) => {
    return (dispatch) => {
        dispatch( setError( err ) );
    }
}

export const unSetErrorAction = () => {
    return ( dispatch ) => {
        dispatch( unSetError() );
    }
}


export const setError = ( err ) => ({
    type: types.uiSetError,
    payload: err
});

export const unSetError = () => ({
    type: types.uiUnSetError
});

// Loading

export const startLoading = () => ({
    type: types.uiStartLoading
})

export const finishLoading = () => ({
    type: types.uiFinishLoading
})