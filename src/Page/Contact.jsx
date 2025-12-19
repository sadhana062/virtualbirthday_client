import { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div style={containerStyle}>
      <div style={contentStyle}>
        <h1 style={titleStyle}>Contact Us</h1>
        
        <div style={gridStyle}>
          <div style={infoSectionStyle}>
            <h2 style={subtitleStyle}>Get in Touch</h2>
            <p style={textStyle}>
              Have questions about our virtual birthday celebrations? 
              We'd love to hear from you!
            </p>
            
            <div style={contactInfoStyle}>
              <div style={contactItemStyle}>
                <span style={iconStyle}>📧</span>
                <span>birthday@virtualcelebration.com</span>
              </div>
              <div style={contactItemStyle}>
                <span style={iconStyle}>📞</span>
                <span>+1 (555) 123-PARTY</span>
              </div>
              <div style={contactItemStyle}>
                <span style={iconStyle}>🌍</span>
                <span>Available Worldwide</span>
              </div>
            </div>
          </div>

          <div style={formSectionStyle}>
            {submitted ? (
              <div style={successStyle}>
                <h3>🎉 Thank You!</h3>
                <p>Your message has been sent successfully. We'll get back to you soon!</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={formStyle}>
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  style={inputStyle}
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  style={inputStyle}
                />
                <textarea
                  name="message"
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  style={textareaStyle}
                />
                <button type="submit" style={buttonStyle}>
                  Send Message 🎈
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

const containerStyle = {
  minHeight: '80vh',
  background: 'linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)',
  padding: '2rem 0'
};

const contentStyle = {
  maxWidth: '1200px',
  margin: '0 auto',
  padding: '0 2rem'
};

const titleStyle = {
  fontSize: '3rem',
  textAlign: 'center',
  marginBottom: '3rem',
  color: '#2c3e50',
  textShadow: '2px 2px 4px rgba(0,0,0,0.1)'
};

const gridStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))',
  gap: '3rem'
};

const infoSectionStyle = {
  background: 'rgba(255,255,255,0.8)',
  padding: '2rem',
  borderRadius: '15px',
  backdropFilter: 'blur(10px)'
};

const formSectionStyle = {
  background: 'rgba(255,255,255,0.8)',
  padding: '2rem',
  borderRadius: '15px',
  backdropFilter: 'blur(10px)'
};

const subtitleStyle = {
  fontSize: '2rem',
  marginBottom: '1rem',
  color: '#e74c3c'
};

const textStyle = {
  fontSize: '1.2rem',
  lineHeight: '1.6',
  color: '#2c3e50',
  marginBottom: '2rem'
};

const contactInfoStyle = {
  display: 'flex',
  flexDirection: 'column',
  gap: '1rem'
};

const contactItemStyle = {
  display: 'flex',
  alignItems: 'center',
  gap: '1rem',
  fontSize: '1.1rem',
  color: '#2c3e50'
};

const iconStyle = {
  fontSize: '1.5rem'
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
  borderRadius: '8px',
  outline: 'none'
};

const textareaStyle = {
  padding: '1rem',
  fontSize: '1.1rem',
  border: '2px solid #ddd',
  borderRadius: '8px',
  outline: 'none',
  resize: 'vertical'
};

const buttonStyle = {
  padding: '1rem 2rem',
  fontSize: '1.2rem',
  background: '#e74c3c',
  color: 'white',
  border: 'none',
  borderRadius: '8px',
  cursor: 'pointer',
  transition: 'background 0.3s'
};

const successStyle = {
  textAlign: 'center',
  color: '#27ae60',
  padding: '2rem'
};

export default Contact;