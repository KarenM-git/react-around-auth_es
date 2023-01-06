import React, { useState } from 'react';
import { Link, useHistory } from "react-router-dom";

function Login({ onSubmit, setIsLoggedIn }) {

  const [values, setValues] = useState({
    email: "",
    password: "",
  });
  const history = useHistory();

  const handleChange = (event) => {
    
     
    const { name, value } = event.target;
    setValues({ ...values, [name]: value });
    
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    console.log(values);
    onSubmit(values);
  };

  React.useEffect(() => {
       setIsLoggedIn(true);
       history.push("/");
     }, [values]);

  React.useEffect(() => {
    setValues({})
  }, [setIsLoggedIn])

  
  return (
    <div className='auth'>
      <h2 className='auth__title'>Log in</h2>
      <form className='auth__form'>
        <div className='auth__input-container'>
          <input
            className='auth__input'
            type='email'
            placeholder='Email'
            id='current-email'
            name='email'
            autoComplete='current-email'
            onChange={handleChange}
            value={values.email || ''}
          />
          <input
            className='auth__input'
            type='password'
            placeholder='Password'
            id='current-password'
            name='password'
            autoComplete='current-password'
            onChange={handleChange}
            value={values.password || ''}
          />
        </div>
        <button onSubmit={handleSubmit} className='auth__button'>
          Log in
        </button>
      </form>
      <Link to='/signup' className='auth__link'>
        Not a member yet? Sign up here!
      </Link>
    </div>
  );
}

export default Login;

