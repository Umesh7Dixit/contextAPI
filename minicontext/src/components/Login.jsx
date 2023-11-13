// userContext me data kaise bhejte hai

import React, {useState, useContext} from 'react'
import UserContext from '../context/UserContext.js'


const Login = () => {
     
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

// kese bhe context ko use krne ke leya useContext() use keya jata hai
    const {setUser} = useContext(UserContext);
// UserContext ne as a value le the User and setUser ko UserContextProvider file me
// hume contextProvider ko value provide karane the eslye setUser leya

    const handleSubmit = (e) => {
           e.preventDefault();
           setUser({username, password});
    }

  return (
    <div>
        <h2>Login</h2>
        <input type='text' value={username} onChange={(e)=>setUsername(e.target.value)} placeholder='username'/>
        <input type='text' value={password} onChange={(e)=>setPassword(e.target.value)} placeholder='password'/>
        <button onClick={handleSubmit}>Submit</button>
    </div>
  )
}

export default Login;