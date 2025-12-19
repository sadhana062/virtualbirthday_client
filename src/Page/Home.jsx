import { useState } from 'react';
import SplitText from '../Components/SplitText';

const Home = () => {
  const [birthdayName, setBirthdayName] = useState('');
  const [showCelebration, setShowCelebration] = useState(false);
  const [balloons, setBalloons] = useState([]);

  const startCelebration = () => {
    if (birthdayName.trim()) {
      setShowCelebration(true);
      createBalloons();
    }
  };

  const createBalloons = () => {
    const newBalloons = [];
    for (let i = 0; i < 10; i++) {
      newBalloons.push({
        id: i,
        left: Math.random() * 90,
        delay: Math.random() * 2,
        color: ['#ff6b6b', '#4ecdc4', '#45b7d1', '#96ceb4', '#feca57'][Math.floor(Math.random() * 5)]
      });
    }
    setBalloons(newBalloons);
  };

  return (
    <div style={containerStyle}>
      <div style={heroStyle}>
        <h1 style={titleStyle}>
          <SplitText text="🎉 Virtual Birthday Celebration 🎉" />
        </h1>
        
        {!showCelebration ? (
          <div style={inputSectionStyle}>
            <h2 style={subtitleStyle}>Who's celebrating today?</h2>
            <input
              type="text"
              placeholder="Enter birthday person's name"
              value={birthdayName}
              onChange={(e) => setBirthdayName(e.target.value)}
              style={inputStyle}
            />
            <button onClick={startCelebration} style={buttonStyle}>
              Start Celebration! 🎂
            </button>
          </div>
        ) : (
          <div style={celebrationStyle}>
            <h2 style={celebrationTitleStyle}>
              Happy Birthday, {birthdayName}! 🎈
            </h2>
            <div style={cakeStyle}>🎂</div>
            <p style={wishStyle}>
              Wishing you a day filled with happiness and a year filled with joy!
            </p>
            <button 
              onClick={() => setShowCelebration(false)} 
              style={resetButtonStyle}
            >
              Celebrate Another Birthday
            </button>
          </div>
        )}

        {showCelebration && (
          <div style={balloonsContainerStyle}>
            {balloons.map(balloon => (
              <div
                key={balloon.id}
                style={{
                  ...balloonStyle,
                  left: `${balloon.left}%`,
                  backgroundColor: balloon.color,
                  animationDelay: `${balloon.delay}s`
                }}
              >
                🎈
              </div>
            ))}
          </div>
        )}
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

const heroStyle = {
  textAlign: 'center',
  color: 'white',
  position: 'relative',
  zIndex: 1
};

const titleStyle = {
  fontSize: '3rem',
  marginBottom: '2rem',
  textShadow: '2px 2px 4px rgba(0,0,0,0.3)'
};

const inputSectionStyle = {
  background: 'rgba(255,255,255,0.1)',
  padding: '2rem',
  borderRadius: '15px',
  backdropFilter: 'blur(10px)'
};

const subtitleStyle = {
  fontSize: '1.5rem',
  marginBottom: '1rem'
};

const inputStyle = {
  padding: '1rem',
  fontSize: '1.2rem',
  border: 'none',
  borderRadius: '10px',
  marginRight: '1rem',
  minWidth: '250px'
};

const buttonStyle = {
  padding: '1rem 2rem',
  fontSize: '1.2rem',
  background: '#ff6b6b',
  color: 'white',
  border: 'none',
  borderRadius: '10px',
  cursor: 'pointer',
  transition: 'transform 0.3s'
};

const celebrationStyle = {
  background: 'rgba(255,255,255,0.1)',
  padding: '3rem',
  borderRadius: '20px',
  backdropFilter: 'blur(10px)'
};

const celebrationTitleStyle = {
  fontSize: '2.5rem',
  marginBottom: '1rem',
  color: '#ffd700'
};

const cakeStyle = {
  fontSize: '5rem',
  margin: '1rem 0',
  animation: 'bounce 2s infinite'
};

const wishStyle = {
  fontSize: '1.3rem',
  marginBottom: '2rem',
  fontStyle: 'italic'
};

const resetButtonStyle = {
  padding: '0.8rem 1.5rem',
  fontSize: '1rem',
  background: '#4ecdc4',
  color: 'white',
  border: 'none',
  borderRadius: '8px',
  cursor: 'pointer'
};

const balloonsContainerStyle = {
  position: 'fixed',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  pointerEvents: 'none',
  zIndex: 0
};

const balloonStyle = {
  position: 'absolute',
  fontSize: '2rem',
  animation: 'float 3s ease-in-out infinite',
  top: '100%'
};

export default Home;