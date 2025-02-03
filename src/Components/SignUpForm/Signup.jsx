import React, {useState} from 'react';
import axios from "axios";

function Signup({setToken}) {
  const [username,setUsername] = useState("");
  const [password,setPassword] = useState("");
  const [error,setError] = useState(null);
  const [success, setSuccess] = useState(false);
  console.log(username);

  async function handleSubmit(e) {
    e.preventDefault();
    try{
      const data = await axios.post("https://fsa-jwt-practice.herokuapp.com/signup", {username,password});
      console.log(data.data);
      if(data.data.success) {setSuccess(true);} 
      setToken(data.data.token);
      setUsername("");
      setPassword("");
    }catch(err){
      console.error(err.message)}
  }
  
  return (
    <div>
      <h2>Signup</h2>
      {error?.message && <p> Error Signing Up</p>}
      {success && <p>Signed Up Successfully</p>}
    <form onSubmit={handleSubmit}>
      <label>Username:
        <input 
        type="text" 
        value={username}
        onChange={(e) => setUsername(e.target.value)}/>
      </label>
      <label>Password:
        <input 
        type="password" 
        value={password}
        onChange={(e) => setPassword(e.target.value)}/>
      </label>
      <button>Submit</button>
    </form>
    </div>
  )
}

export default Signup