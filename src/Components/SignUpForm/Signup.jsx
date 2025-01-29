import React, {useState} from 'react'

function Signup() {
  const [username,setUsername] = useState("");
  const [password,setPassword] = useState("");
  const [error,setError] = useState(null);
  
  return (
    <div>Signup</div>
  )
}

export default Signup