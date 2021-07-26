import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import validator from 'validator';

import { Link } from 'react-router-dom';
import { useForm } from '../../hooks/useForm';

import { startGoogleLogin, startLoginWithEmailPassword } from '../../actions/auth';
import { setErrorAction, unSetErrorAction } from '../../actions/ui';


export const LoginScreen = () => {

    const dispatch = useDispatch();
    const { msgError, loading } = useSelector(state => state.ui);
    

    const [ formValues, handleInputChange ] = useForm({
        email: 'userr@mail.com',
        password: '123456'
    });

    const { email, password } = formValues;

    const handleLogin = (e) => {
        e.preventDefault();
        
        if ( isFormValid() ) {
            dispatch( startLoginWithEmailPassword(email, password) );
        }
    }

    const handleGoogleLogin = () => {
        
        dispatch( startGoogleLogin() );
    }


    const isFormValid = () => {
        if( ! validator.isEmail( email ) ) {

            dispatch( setErrorAction('email is not valid') );
            return  false;

        } else if ( password.trim().length === 0) {
            dispatch( setErrorAction('Password is requried') );
            return false;
        }

        dispatch( unSetErrorAction() );
        return true;
    }
   

    return (
        <>
            <h3 className="auth__title">Login</h3>

            <form
                onSubmit={ handleLogin }
                className="animate__animated animate__fadeIn animate__faster"
            >

                {
                    msgError && 
                    (
                        <div className="auth__alert-error">
                            { msgError }
                        </div>
                    )
                }
                <input
                    type="email"
                    placeholder="email"
                    name="email"
                    className="auth__input"
                    autoComplete="off"
                    value={ email }
                    onChange={ handleInputChange }
                />

                <input
                    type="password"
                    placeholder="password"
                    name="password"
                    className="auth__input"
                    value={ password }
                    onChange={ handleInputChange }
                />

                <button
                    type="submit"
                    className="btn btn-primary btn-block"
                    disabled={ loading }
                >
                    Login
                </button>

               
                <div className="auth__social-network">
                    <p>Login with social networks</p>

                    <div 
                        className="google-btn"
                        onClick={ handleGoogleLogin }
                    >
                        <div className="google-icon-wrapper">
                            <img className="google-icon" src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" alt="google button" />
                        </div>
                        <p className="btn-text">
                            <b>Sign in with google</b>
                        </p>
                    </div>

                </div>
                <Link
                    to="/auth/register"
                    className="link"
                >
                    Create new account
                </Link>
            </form>
        </>
    )
}
