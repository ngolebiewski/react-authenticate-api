import { useState } from "react";

const signUpForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);

  const handleSubmit = async(e) => {
    e.preventDefault();
    console.log(`I'm handleSubmit and asyncronous`);
  }

  return (
    <>
      <h2>Sign Up</h2>
      <form onSubmit={handleSubmit}>
        <label>Username: <input value={username} name="username" type="text"
        onChange={e => {
          setUsername(e.target.value)
          console.log(e.target.value)}
        }
        /></label><br></br>
        <label>Password: <input value={password} name="password" type="text" 
        onChange={e => {
          setPassword(e.target.value)
          console.log(e.target.value)}}
        /></label><br></br>
        <button value="submit">Submit</button>
      </form>
    </>
  )
}

export default signUpForm;

