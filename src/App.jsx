import { useState } from 'react';
import './App.css';
import SignUpForm from './components/signUpForm';
import Authenticate from './components/Authenticate';

const App = () => {
  const [token, setToken] = useState(null);

  return (
    <>
      <SignUpForm token={token} setToken={setToken} />   
      <Authenticate token={token} setToken={setToken}/>
    </>
  )
}

export default App
