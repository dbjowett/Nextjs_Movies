import classes from '../Auth/auth-form.module.css';
import { useState } from 'react';
import { FaSignInAlt, FaGoogle } from 'react-icons/fa';

export default function AuthForm() {
  const [isLoggedin, setIsLoggedin] = useState(true);
  function switchAuth() {
    setIsLoggedin((prevState) => !prevState);
  }

  function googleSignin() {
    alert('Sorry this is an upcoming feature');
  }

  return (
    <section className={classes.auth}>
      <div className={classes.headerContainer}>
        <FaSignInAlt size={40} />
        <h1>{isLoggedin ? 'Login' : 'Sign Up'}</h1>
        <div>{isLoggedin ? 'Sign in to your account' : 'Create a new account'}</div>
      </div>
      <form className={classes.form}>
        <div className={classes.inputContainer}>
          <input type='email' required id='email' placeholder='Email' />
        </div>
        <div className={classes.inputContainer}>
          <input type='password' required id='password' placeholder='Password' />
        </div>
        <div className={classes.buttonContainer}>
          <button className={classes.loginButton}>{isLoggedin ? 'Login' : 'Create Account'}</button>
          <div className={classes.optionsBtnContainer}>
            <button className={classes.toggle} type='button' onClick={switchAuth}>
              {isLoggedin ? 'Create New Account' : 'Login with existing account'}
            </button>
            <button onClick={googleSignin}>
              Login with Google
              <div>
                <FaGoogle size={13} />
              </div>
            </button>
          </div>
        </div>
      </form>
    </section>
  );
}
