import { Link, useNavigate } from 'react-router-dom';
import './Dashboard.css';

const Dashboard = () => {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem('token');
    navigate('/login');
  };

  return (
    <div className="dashboard-container">
      <div className="dashboard-header">
        <h2>Dashboard</h2>
        <button className="logout-btn" onClick={logout}>Logout</button>
      </div>
      <p className="dashboard-description">
       Hai Buddy, Welcome back! Manage your AI scripts here.
      </p>
      <Link to="/create-script" className="create-script-btn">Create Script</Link>
    </div>
  );
};

export default Dashboard;