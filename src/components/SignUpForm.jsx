import { useState } from "react";

const signUpForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
   
        const response = await fetch("https://fsa-jwt-practice.herokuapp.com/signup", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            username: username, 
            password: password})
        });
        const data = await response.json();
        console.log(data);

      
    } catch (error) {
      setError(error.message);
    }
  }

  return (
    <>
      <h2>Sign Up</h2>

      {error && <p>{error}</p>}

      <form onSubmit={handleSubmit}>
        <label>Username: <input value={username} name="username" type="text"
          onChange={e => setUsername(e.target.value)
          }
        /></label><br></br>
        <label>Password: <input value={password} name="password" type="text"
          onChange={e => setPassword(e.target.value)}
        /></label><br></br>
        <button value="submit">Submit</button>
      </form>
    </>
  )
}

export default signUpForm;

