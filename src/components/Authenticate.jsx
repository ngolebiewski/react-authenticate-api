import { useState } from "react";


const Authenticate = ({ token, setToken }) => {
  const [error, setError] = useState(null);
  const [auth, setAuth] = useState({});
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
      setAuth(data);
      setSuccessMessage(data.message);
      // console.log(data.data.username)
    } catch (error) {
      setError(error.message);
    }
  }

  return (
    <>
      <h2>Authenticate! </h2>
      {error && <p>{error}</p>}
      {successMessage && <p>{successMessage}</p>}
      <button onClick={handleClick} >Authenticate Token</button>
    </>
  )
}

export default Authenticate;