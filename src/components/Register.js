import React, { useState } from "react";
import { Link } from "react-router-dom";

function Register({onSubmit}) {
 

  const [values, setValues] = useState({
    email: "",
    password: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setValues({ ...values, [name]: value });
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    onSubmit(values, setValues);
  }

  return (
    <div className='auth'>
      <h2 className='auth__title'>Sign up</h2>
      <form className='auth__form' onClick={handleSubmit}>
        <div className='auth__input-container'>
          <input
            type='email'
            placeholder='Email'
            id='new-email'
            name='email'
            autoComplete='new-email'
            className='auth__input'
            onChange={handleChange}
            value={values.email}
          />
          <input
            type='password'
            placeholder='Password'
            id='new-password'
            name='password'
            autoComplete='new-password'
            className='auth__input'
            onChange={handleChange}
            values={values.password}
          />
        </div>
        <button className='auth__button'>Sign up</button>
      </form>
      <Link to='/signin' className='auth__link'>
        Alredy a member? Log in here!
      </Link>
    </div>
  );
}

export default Register;
