import { useState, useEffect } from 'react';

const SplitText = ({ text, delay = 100 }) => {
  const [visibleChars, setVisibleChars] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setVisibleChars(prev => {
        if (prev < text.length) {
          return prev + 1;
        }
        clearInterval(timer);
        return prev;
      });
    }, delay);

    return () => clearInterval(timer);
  }, [text, delay]);

  return (
    <span style={containerStyle}>
      {text.split('').map((char, index) => (
        <span
          key={index}
          style={{
            ...charStyle,
            opacity: index < visibleChars ? 1 : 0,
            transform: index < visibleChars ? 'translateY(0)' : 'translateY(20px)'
          }}
        >
          {char === ' ' ? '\u00A0' : char}
        </span>
      ))}
    </span>
  );
};

const containerStyle = {
  display: 'inline-block'
};

const charStyle = {
  display: 'inline-block',
  transition: 'all 0.3s ease',
  color: '#ff6b6b'
};

export default SplitText;