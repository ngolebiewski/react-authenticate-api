import { useState } from "react";

const signUpForm = ({token, setToken}) => {
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
            password: password
          })
        });
        const data = await response.json();
        setToken(data.token);
        console.log(token);      
    } catch (error) {
      setError(error.message);
    }
  }

  return (
    <>
      <section className="authbox">
      <h2>Sign Up</h2>

      {error && <p className="update-text">{error}</p>}
      {token && <p className="update-text">Sign up a success, {username}, now click Authenticate. </p>}

      <form onSubmit={handleSubmit}>
        <label>Username: <input required value={username} name="username" type="text"
          onChange={e => setUsername(e.target.value)
          }
        /></label><br></br>
        <label>Password: <input required minLength="6" value={password} name="password" type="text"
          onChange={e => setPassword(e.target.value)}
        /></label><br></br>
        <button value="submit">Submit</button>
      </form>
      </section>
    </>
  )
}

export default signUpForm;

