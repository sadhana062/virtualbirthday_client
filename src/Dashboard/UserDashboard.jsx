import { useAuth } from '../context/AuthContext';
import { Link } from 'react-router-dom';

const UserDashboard = () => {
  const { user, logout } = useAuth();

  return (
    <div style={containerStyle}>
      <div style={contentStyle}>
        <h1 style={titleStyle}>🎉 Welcome, {user?.name}!</h1>
        
        <div style={cardGridStyle}>
          <Link to="/home" style={cardStyle}>
            <span style={iconStyle}>🎂</span>
            <h3>Create Celebration</h3>
            <p>Start a birthday party</p>
          </Link>
          
          <Link to="/about" style={cardStyle}>
            <span style={iconStyle}>ℹ️</span>
            <h3>About Platform</h3>
            <p>Learn more about us</p>
          </Link>
          
          <Link to="/contact" style={cardStyle}>
            <span style={iconStyle}>📧</span>
            <h3>Contact Us</h3>
            <p>Get in touch</p>
          </Link>
        </div>
        
        <button onClick={logout} style={logoutStyle}>
          Logout
        </button>
      </div>
    </div>
  );
};

const containerStyle = {
  minHeight: '80vh',
  background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center'
};

const contentStyle = {
  background: 'rgba(255,255,255,0.9)',
  padding: '3rem',
  borderRadius: '20px',
  textAlign: 'center',
  maxWidth: '800px'
};

const titleStyle = {
  fontSize: '2.5rem',
  marginBottom: '2rem',
  color: '#e74c3c'
};

const cardGridStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
  gap: '2rem',
  marginBottom: '2rem'
};

const cardStyle = {
  background: '#f8f9fa',
  padding: '2rem',
  borderRadius: '15px',
  textDecoration: 'none',
  color: '#333',
  transition: 'transform 0.3s'
};

const iconStyle = {
  fontSize: '3rem',
  display: 'block',
  marginBottom: '1rem'
};

const logoutStyle = {
  padding: '1rem 2rem',
  background: '#e74c3c',
  color: 'white',
  border: 'none',
  borderRadius: '8px',
  cursor: 'pointer'
};

export default UserDashboard;