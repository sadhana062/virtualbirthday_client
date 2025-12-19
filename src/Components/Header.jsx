import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const Header = () => {
  const { user, logout } = useAuth();
  
  return (
    <header style={headerStyle}>
      <div style={containerStyle}>
        <Link to="/dashboard" style={logoStyle}>🎉 Virtual Birthday</Link>
        <nav style={navStyle}>
          <Link to="/home" style={linkStyle}>Home</Link>
          <Link to="/about" style={linkStyle}>About</Link>
          <Link to="/contact" style={linkStyle}>Contact</Link>
          {user?.role === 'admin' && <Link to="/admin" style={linkStyle}>Admin</Link>}
          <button onClick={logout} style={logoutBtnStyle}>Logout</button>
        </nav>
      </div>
    </header>
  );
};

const headerStyle = {
  background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
  padding: '1rem 0',
  boxShadow: '0 2px 10px rgba(0,0,0,0.1)'
};

const containerStyle = {
  maxWidth: '1200px',
  margin: '0 auto',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '0 2rem'
};

const logoStyle = {
  color: 'white',
  margin: 0,
  fontSize: '1.8rem'
};

const navStyle = {
  display: 'flex',
  gap: '2rem'
};

const linkStyle = {
  color: 'white',
  textDecoration: 'none',
  fontWeight: '500',
  transition: 'opacity 0.3s'
};

const logoutBtnStyle = {
  background: 'rgba(255,255,255,0.2)',
  color: 'white',
  border: 'none',
  padding: '0.5rem 1rem',
  borderRadius: '5px',
  cursor: 'pointer',
  fontWeight: '500'
};

export default Header;