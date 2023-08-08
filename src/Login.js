import React, { useState } from 'react';

const Login = ({ onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Perform login logic here, validate user credentials
    // For now, let's assume the login is successful
    // Call the onLogin function prop to update the login status
    onLogin();
  };

  return (
    <div>
      <h2>Login</h2>
      <form>
        <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} placeholder="Username" />
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
        <button onClick={handleLogin}>Login</button>
      </form>
    </div>
  );
}

export default Login;
