const About = () => {
  return (
    <div style={containerStyle}>
      <div style={contentStyle}>
        <h1 style={titleStyle}>About Virtual Birthday Celebration</h1>
        
        <div style={sectionStyle}>
          <h2 style={subtitleStyle}>🎉 Our Mission</h2>
          <p style={textStyle}>
            We believe every birthday deserves to be celebrated, no matter the distance. 
            Our virtual birthday celebration platform brings joy, excitement, and memorable 
            moments to birthday celebrations worldwide.
          </p>
        </div>

        <div style={sectionStyle}>
          <h2 style={subtitleStyle}>✨ Features</h2>
          <div style={featuresStyle}>
            <div style={featureStyle}>
              <span style={iconStyle}>🎂</span>
              <h3>Interactive Celebrations</h3>
              <p>Personalized birthday experiences with animations and effects</p>
            </div>
            <div style={featureStyle}>
              <span style={iconStyle}>🎈</span>
              <h3>Virtual Decorations</h3>
              <p>Beautiful balloons, confetti, and birthday themes</p>
            </div>
            <div style={featureStyle}>
              <span style={iconStyle}>🎁</span>
              <h3>Digital Gifts</h3>
              <p>Send virtual gifts and birthday wishes</p>
            </div>
          </div>
        </div>

        <div style={sectionStyle}>
          <h2 style={subtitleStyle}>🌟 Why Choose Us?</h2>
          <ul style={listStyle}>
            <li>Easy to use interface</li>
            <li>Completely free platform</li>
            <li>No registration required</li>
            <li>Works on all devices</li>
            <li>Instant celebration setup</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

const containerStyle = {
  minHeight: '80vh',
  background: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
  padding: '2rem 0'
};

const contentStyle = {
  maxWidth: '1000px',
  margin: '0 auto',
  padding: '0 2rem',
  color: 'white'
};

const titleStyle = {
  fontSize: '3rem',
  textAlign: 'center',
  marginBottom: '3rem',
  textShadow: '2px 2px 4px rgba(0,0,0,0.3)'
};

const sectionStyle = {
  background: 'rgba(255,255,255,0.1)',
  padding: '2rem',
  borderRadius: '15px',
  marginBottom: '2rem',
  backdropFilter: 'blur(10px)'
};

const subtitleStyle = {
  fontSize: '2rem',
  marginBottom: '1rem',
  color: '#ffd700'
};

const textStyle = {
  fontSize: '1.2rem',
  lineHeight: '1.6',
  marginBottom: '1rem'
};

const featuresStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
  gap: '2rem',
  marginTop: '2rem'
};

const featureStyle = {
  textAlign: 'center',
  padding: '1.5rem',
  background: 'rgba(255,255,255,0.1)',
  borderRadius: '10px'
};

const iconStyle = {
  fontSize: '3rem',
  display: 'block',
  marginBottom: '1rem'
};

const listStyle = {
  fontSize: '1.2rem',
  lineHeight: '2',
  listStyle: 'none',
  padding: 0
};

export default About;