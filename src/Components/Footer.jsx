const Footer = () => {
  return (
    <footer style={footerStyle}>
      <div style={containerStyle}>
        <p style={textStyle}>© 2024 Virtual Birthday Celebration. Made with ❤️</p>
        <div style={socialStyle}>
          <span>🎂 🎈 🎁</span>
        </div>
      </div>
    </footer>
  );
};

const footerStyle = {
  background: '#2c3e50',
  color: 'white',
  padding: '2rem 0',
  marginTop: 'auto'
};

const containerStyle = {
  maxWidth: '1200px',
  margin: '0 auto',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '0 2rem'
};

const textStyle = {
  margin: 0
};

const socialStyle = {
  fontSize: '1.5rem'
};

export default Footer;