import './App.css';
import Form from './components/Form';
import React, { useState } from 'react';
import formSchema from './validations/formSchema';
import * as yup from 'yup';
import axios from 'axios';

const initialformValues = {
  fullname: '',
  password: '',
  email: '',
  tos: false
}
const initialFormErrors = {
  fullname: '',
  password: '',
  email: '',
  tos: '',
}

function App() {
  const [formValues, setFormValues] = useState(initialformValues);
  const [formErrors, setFormErrors] = useState(initialFormErrors);
  const [users, setUsers] = useState([])

const onChange = (name, value) => {
  validate(name, value);
  setFormValues({ ...formValues, [name]: value });
}

const submit = (evt) => {
  axios.post('https://reqres.in/api/users', formValues)
  .then(res => {
    console.log(res.data)
    setUsers([res.data, ...users])
  })
  .catch(err => console.log(err))
}

const validate = (name, value) => {
  yup.reach(formSchema, name)
  .validate(value)
  .then(() => setFormErrors({ ...formErrors, [name]: '' }))
  .catch(err => setFormErrors({ ...formErrors, [name]: err.errors[0] }))
}
  return (
    <div className="App">
      <h1>Advanced Forms</h1>
      <Form 
        formValues={formValues} 
        onChange={onChange} 
        errors={formErrors} 
        submit={submit}
        />
      {users.map(user => (
        <div>
          <h2>{user.fullname}</h2>
          <p>Email: {user.email}</p>
        </div>
      ))}
    </div>
  );
}

export default App;
