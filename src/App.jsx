import { useState } from 'react';
import './App.css';
import SignUpForm from './components/signUpForm';
import Authenticate from './components/Authenticate';

const App = () => {


  return (
    <>
      <SignUpForm />   
      <Authenticate />
    </>
  )
}

export default App
