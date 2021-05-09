import React, { useState } from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth';

const initialFormValue = {
  name: '',
  age: '',
  email: '',
};

const Form = ({ setFriends }) => {
  const [formValue, setFormValue] = useState({ initialFormValue });

  const handleChanges = (e) => {
    setFormValue({ ...formValue, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axiosWithAuth()
      .post('/api/friends', formValue)
      .then((res) => {
        console.log('works:', res.data);
        setFriends(res.data);
      })
      .catch((err) => console.log('error:', err));
  };

  return (
    <div>
      <h2>These are my friends...</h2>
      <form onSubmit={handleSubmit}>
        <input
          placeholder='Name'
          type='text'
          name='name'
          value={formValue.name}
          onChange={handleChanges}
        />
        <input
          placeholder='Age'
          type='text'
          name='age'
          value={formValue.age}
          onChange={handleChanges}
        />
        <input
          placeholder='email@domain.com'
          type='text'
          name='email'
          value={formValue.email}
          onChange={handleChanges}
        />

        <button type='submit'>CLICK TO SUBMIT</button>
      </form>
    </div>
  );
};

export default Form;
