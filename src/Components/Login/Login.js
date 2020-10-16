import React, { useContext } from 'react';
import * as firebase from "firebase/app";
import firebaseConfig from './firebase.config'
import "firebase/auth";
import './Login.css'
import { useHistory, useLocation } from 'react-router-dom';
import { UserContext } from '../../App';

if (firebase.apps.length == 0) {
    firebase.initializeApp(firebaseConfig)
}

const Login = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    const [user, setUser] = useContext(UserContext)
    const history = useHistory()
    const location = useLocation()
    const { from } = location.state || { from: { pathname: '/' } }

    const handleClick = () => {
        firebase.auth().signInWithPopup(provider)
            .then(result => {
                const createdUser = result.user;
                setUser({ name: createdUser.displayName, email: createdUser.email, photo: createdUser.photoURL })
                storeAuthToken()
            })
            .catch(error => {
                const errorMessage = error.message;
                console.log(errorMessage)
            });
    }
    const storeAuthToken = () => {
        firebase.auth().currentUser.getIdToken(/* forceRefresh */ true)
            .then(idToken => {
                sessionStorage.setItem('token', idToken);
                history.replace(from);
            })
            .catch(error => {
                console.log(error)
            });
    }
    return (
        <section className='text-center p-4'>
            <img className='m-5 login-logo' src='https://i.ibb.co/d4Rvw1y/logo.png' alt="" />
            <div className='m-auto login-container'>
                <div className="my-5 py-5 px-3">
                    <h2 className='login-title mt-3'>Login With</h2>
                    <div onClick={handleClick} className="button_box my-4" >
                        <p>Continue with Google</p>
                    </div>
                    <p>Don’t have an account? <span onClick={handleClick} style={{ color: '#3F90FC', textDecoration: 'underline', cursor: 'pointer' }}>Create an account</span></p>
                </div>
            </div>
        </section >
    );
};

export default Login;
