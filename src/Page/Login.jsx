import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { api } from '../api/api';

const Login = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    name: ''
  });
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { login } = useAuth();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    
    try {
      let response, data;
      
      if (isLogin) {
        response = await fetch('http://localhost:5000/api/auth/login', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ email: formData.email, password: formData.password })
        });
      } else {
        response = await fetch('http://localhost:5000/api/auth/register', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(formData)
        });
      }
      
      data = await response.json();
      
      if (response.ok) {
        if (isLogin) {
          login(data.user, data.token);
          if (data.user.role === 'admin') {
            navigate('/admin');
          } else {
            navigate('/dashboard');
          }
        } else {
          alert('Registration successful! Please login.');
          setIsLogin(true);
          setFormData({ email: '', password: '', name: '' });
        }
      } else {
        alert(data.error || 'Authentication failed');
      }
    } catch (error) {
      alert('Server connection failed. Make sure backend is running on port 5000.');
    }
    
    setLoading(false);
  };



  return (
    <div style={containerStyle}>
      <div style={formContainerStyle}>
        <h1 style={titleStyle}>
          {isLogin ? '🎂 Login' : '🎉 Sign Up'}
        </h1>
        
        <form onSubmit={handleSubmit} style={formStyle}>
          {!isLogin && (
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              value={formData.name}
              onChange={handleChange}
              required
              style={inputStyle}
            />
          )}
          
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
            required
            style={inputStyle}
          />
          
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            required
            style={inputStyle}
          />
          
          <button type="submit" style={buttonStyle} disabled={loading}>
            {loading ? 'Please wait...' : (isLogin ? 'Login 🎈' : 'Sign Up 🎁')}
          </button>
        </form>
        
        <p style={switchStyle}>
          {isLogin ? "Don't have an account? " : "Already have an account? "}
          <button
            onClick={() => setIsLogin(!isLogin)}
            style={switchButtonStyle}
          >
            {isLogin ? 'Sign Up' : 'Login'}
          </button>
        </p>
        
        <div style={demoStyle}>
          <p>🎪 Demo Accounts:</p>
          <p><strong>Admin:</strong> admin@birthday.com / admin123</p>
          <p><strong>User:</strong> demo@birthday.com / user123</p>
        </div>
      </div>
    </div>
  );
};

const containerStyle = {
  minHeight: '80vh',
  background: 'linear-gradient(135deg, #ff9a9e 0%, #fecfef 50%, #fecfef 100%)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  padding: '2rem'
};

const formContainerStyle = {
  background: 'rgba(255,255,255,0.9)',
  padding: '3rem',
  borderRadius: '20px',
  backdropFilter: 'blur(10px)',
  boxShadow: '0 8px 32px rgba(0,0,0,0.1)',
  width: '100%',
  maxWidth: '400px'
};

const welcomeStyle = {
  background: 'rgba(255,255,255,0.9)',
  padding: '3rem',
  borderRadius: '20px',
  backdropFilter: 'blur(10px)',
  boxShadow: '0 8px 32px rgba(0,0,0,0.1)',
  width: '100%',
  maxWidth: '800px'
};

const titleStyle = {
  fontSize: '2.5rem',
  textAlign: 'center',
  marginBottom: '2rem',
  color: '#e74c3c'
};

const formStyle = {
  display: 'flex',
  flexDirection: 'column',
  gap: '1rem'
};

const inputStyle = {
  padding: '1rem',
  fontSize: '1.1rem',
  border: '2px solid #ddd',
  borderRadius: '10px',
  outline: 'none'
};

const buttonStyle = {
  padding: '1rem',
  fontSize: '1.2rem',
  background: '#e74c3c',
  color: 'white',
  border: 'none',
  borderRadius: '10px',
  cursor: 'pointer',
  transition: 'background 0.3s'
};

const switchStyle = {
  textAlign: 'center',
  marginTop: '1rem',
  color: '#666'
};

const switchButtonStyle = {
  background: 'none',
  border: 'none',
  color: '#e74c3c',
  cursor: 'pointer',
  textDecoration: 'underline'
};

const demoStyle = {
  background: '#f8f9fa',
  padding: '1rem',
  borderRadius: '8px',
  marginTop: '1rem',
  fontSize: '0.9rem',
  color: '#666',
  textAlign: 'center'
};

const dashboardStyle = {
  textAlign: 'center'
};

const featuresGridStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
  gap: '2rem',
  margin: '2rem 0'
};

const featureCardStyle = {
  background: 'rgba(231, 76, 60, 0.1)',
  padding: '2rem',
  borderRadius: '15px',
  textAlign: 'center'
};

const featureIconStyle = {
  fontSize: '3rem',
  display: 'block',
  marginBottom: '1rem'
};

const logoutButtonStyle = {
  padding: '0.8rem 2rem',
  fontSize: '1rem',
  background: '#95a5a6',
  color: 'white',
  border: 'none',
  borderRadius: '8px',
  cursor: 'pointer'
};

export default Login;