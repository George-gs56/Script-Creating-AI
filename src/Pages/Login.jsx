import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css'

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  // Set default user on component load
  useEffect(() => {
    const defaultUser = {
      email: 'test@example.com',
      password: 'password123',
    };
    localStorage.setItem('user', JSON.stringify(defaultUser));
  }, []);

  const handleLogin = (e) => {
    e.preventDefault();

    const user = JSON.parse(localStorage.getItem('user'));
    if (user && user.email === email && user.password === password) {
      localStorage.setItem('token', 'demo-token');
      navigate('/dashboard');
    } else {
      alert('Invalid credentials');
    }
  };

  return (
    <div className="login-container">
      <h2 className="Login-title">Login</h2>
      <form onSubmit={handleLogin}>
        <div className="EP-label">
          <label>Email</label>
          <input
            className="login-input-credintial"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="EP-label">
          <label>Password</label>
          <input
            type="password"
            className="login-input-credintial"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button className="Login-btn">Login</button>
      </form>
    </div>
  );
};

export default Login;