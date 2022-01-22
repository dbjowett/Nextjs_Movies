import classes from '../Auth/auth-form.module.css';
import { useState, useRef } from 'react';
import { FaSignInAlt, FaGoogle } from 'react-icons/fa';

async function createUser(email, password) {
  const config = {
    method: 'POST',
    body: JSON.stringify({ email, password }),
    headers: {
      'Content-Type': 'application/json'
    }
  };

  const res = await fetch('/api/auth/signup', config);
  console.log(res);
  const data = await res.json();

  if (!res.ok) {
    throw new Error('Something went wrong');
  }
}

export default function AuthForm() {
  const [isLogin, setIsLogin] = useState(true);
  const emailInputRef = useRef();
  const passwordInputRef = useRef();

  function switchAuth() {
    setIsLogin((prevState) => !prevState);
  }

  function googleSignin() {
    alert('Sorry this is an upcoming feature');
  }

  async function submitHandler(e) {
    e.preventDefault();

    const currentEmail = emailInputRef.current.value;
    const currentPassword = passwordInputRef.current.value;

    if (isLogin) {
      // Log user in
    } else {
      try {
        const result = await createUser(currentEmail, currentPassword);
        console.log(result);
      } catch (err) {
        console.log('error: ', err);
      }
    }
  }

  return (
    <section className={classes.auth}>
      <div className={classes.headerContainer}>
        <FaSignInAlt size={40} />
        <h1>{isLogin ? 'Login' : 'Sign Up'}</h1>
        <div>{isLogin ? 'Sign in to your account' : 'Create a new account'}</div>
      </div>
      <form className={classes.form} onSubmit={submitHandler}>
        <div className={classes.inputContainer}>
          <input type='email' required id='email' placeholder='Email' ref={emailInputRef} />
        </div>
        <div className={classes.inputContainer}>
          <input type='password' required id='password' placeholder='Password' ref={passwordInputRef} />
        </div>
        <div className={classes.buttonContainer}>
          <button className={classes.loginButton}>{isLogin ? 'Login' : 'Create Account'}</button>
          <div className={classes.optionsBtnContainer}>
            <button className={classes.toggle} type='button' onClick={switchAuth}>
              {isLogin ? 'Create New Account' : 'Login with existing account'}
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
