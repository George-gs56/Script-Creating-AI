import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  return (
    <div className="home-wrapper">
      <h1 className="home-title">Welcome to NolanAI</h1>
      <p className="home-description">
        Create intelligent scripts with AI-powered tools. Start writing your next big idea today!
      </p>
      <div className="home-buttons">
        <Link to="/create-script" className="home-btn primary">
          Create Script
        </Link>
        <Link to="/dashboard" className="home-btn secondary">
          Dashboard
        </Link>
      </div>
    </div>
  );
};

export default Home;
