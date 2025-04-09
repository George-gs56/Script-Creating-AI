import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="custom-navbar">
      <div className="nav-brand">Nolan AI</div>
      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/create-script">Create Script</Link></li>
        <li><Link to="/dashboard">Dashboard</Link></li>
        <li><Link to="/login">Login</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;