import { useState } from "react";


const Authenticate = ({ token, setToken }) => {
  const [error, setError] = useState(null);
  const [authMessage, setAuthMessage] = useState({});
  const [tokenUsername, setTokenUsername] = useState('');
  const [successMessage, setSuccessMessage] = useState(null);

  const handleClick = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("https://fsa-jwt-practice.herokuapp.com/authenticate", {
        method: "GET",
        headers:  { "Content-Type": "application/json",
        Authorization: `Bearer ${token}`
       },
      });
      const data = await response.json();
      setAuthMessage(data);
      setSuccessMessage(data.message);
      setTokenUsername(data.data.username);
      console.log(tokenUsername);
      console.log(data)
      
    } catch (error) {
      setError(error.message);
    }
  }
  


  return (
    <>
      <section className="authbox" >
      <h2>Authenticate! </h2>
      {error && <p className="update-text">Try again! {error}</p>}
      {successMessage && <p className="update-text">{successMessage}</p>}
      {/* <p>{authMessage.date.name}</p> */}
      <button onClick={handleClick} >Authenticate Token</button>
      </section>
    </>
  )
}

export default Authenticate;