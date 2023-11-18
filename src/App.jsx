import { useState } from 'react';
import './App.css';
import SignUpForm from './components/SignUpForm';
import Authenticate from './components/Authenticate';

const App = () => {
  const [token, setToken] = useState(null);

  return (
    <>
      <main>
        <SignUpForm token={token} setToken={setToken} />
        <Authenticate token={token} setToken={setToken} />
      </main>
    </>
  )
}

export default App
