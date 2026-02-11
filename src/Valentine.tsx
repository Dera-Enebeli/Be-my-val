import React, { useState, useEffect } from 'react';
import './Valentine.css';

const Valentine: React.FC = () => {
  const [noButtonPosition, setNoButtonPosition] = useState({ x: 0, y: 0 });
  const [showMessage, setShowMessage] = useState(false);
  const [hearts, setHearts] = useState<Array<{id: number, left: number, top: number, emoji?: string}>>([]);
  const [clickCount, setClickCount] = useState(0);
  const [noButtonSize, setNoButtonSize] = useState(1);
  const [noButtonText, setNoButtonText] = useState('No 💔');
  const [isMobile, setIsMobile] = useState(false);
  const [noButtonVisible, setNoButtonVisible] = useState(true);

  // Bold colors for different attempts
  const messageColors = [
    '#FF0000', // Red
    '#FF6B00', // Orange
    '#FFB800', // Amber
    '#FFD700', // Yellow
    '#ADFF2F', // Lime
    '#00FF00', // Green
    '#00FF7F', // Teal
    '#00FFFF', // Cyan
    '#007FFF', // Sky Blue
    '#0000FF', // Blue
    '#7F00FF', // Purple
    '#FF00FF', // Magenta
    '#FF1493', // Deep Pink
  ];

  // Personalized names mix for emotional impact
  const names = [
    "Smallie",
    "ihotu kum", 
    "my baby",
    "joy",
    "joyyyy", 
    "joyyyyyyyyy"
  ];
  
  const messages = [
    "Are you sure, Smallie? 🥺",
    "But why not, ihotu kum? 💔", 
    "Don't break my heart, my baby! 😢",
    "I'll be sad forever, joy! 💔",
    "Please say yes, joyyyy! 🥰",
    "I'll make you happy, joyyyyyyyyy! 💕",
    "Just one chance, Smallie! 🌹",
    "I know you want to, ihotu kum! 😉",
    "You're breaking my heart, my baby! 💔",
    "Please don't do this, joy! 😭",
    "My heart can't take it, joyyyy! 💔",
    "I'll cry forever, joyyyyyyyyy! 😭",
    "Why are you doing this to me, Smallie? 😭",
    "Stop breaking my heart, ihotu kum! 😢",
    "Have mercy on me, my baby! 🥺",
    "I'm begging you, joy! 🙏",
    "Please stop, joyyyy! 💔",
    "You're killing me, joyyyyyyyyy! 💀",
    "Final chance, Smallie... ⚠️",
    "I give up, ihotu kum... 💔",
    "My heart is broken, my baby... 😭"
  ];

  const noButtonTexts = [
    'No 💔',
    'Smallie please! 💔', 
    'ihotu kum why? 💔',
    'Don\'t hurt me, my baby! 💔',
    'Have mercy, joy! 💔',
    'Pretty please, joyyyy! 💔',
    'I\'m begging, joyyyyyyyyy! 💔',
    'Stop it, Smallie! 😈',
    'Have mercy, ihotu kum! 🥺',
    'Why are you so mean, my baby? 😭',
    'You\'re breaking my heart, joy! 💔',
    'I\'ll cry forever, joyyyy! 😢',
    'Please say yes, Smallie! 🙏',
    'Don\'t do this, joyyyyyyyyy! 💀',
    'Final warning, ihotu kum! ⚠️',
    'I give up, my baby... 💔'
  ];

  useEffect(() => {
    setIsMobile(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent));
  }, []);

  // Mathematically IMPOSSIBLE button positioning - device-specific calculations
  const getSafePosition = (buttonWidth: number, buttonHeight: number) => {
    // Detect device type
    const isIPhoneXR = isMobile && window.innerWidth === 414 && window.innerHeight === 896;
    const isStandardLaptop = !isMobile && window.innerWidth >= 1366 && window.innerHeight >= 768;
    
    let viewportWidth, viewportHeight, safePadding;
    
    if (isIPhoneXR) {
      // iPhone XR specific: 414x896px
      viewportWidth = 414;
      viewportHeight = 896;
      safePadding = 60; // Safe for small screen
    } else if (isStandardLaptop) {
      // Standard laptop: 1366x768px minimum
      viewportWidth = Math.min(window.innerWidth, 1920); // Cap at 1920 for performance
      viewportHeight = Math.min(window.innerHeight, 1080); // Cap at 1080 for performance
      safePadding = 150; // Larger safe zone for desktop
    } else {
      // Other devices - safe fallback
      viewportWidth = window.innerWidth;
      viewportHeight = window.innerHeight;
      safePadding = 100;
    }
    
    // Calculate mathematically safe boundaries
    const minX = safePadding;
    const minY = safePadding;
    const maxX = Math.max(minX, viewportWidth - buttonWidth - safePadding);
    const maxY = Math.max(minY, viewportHeight - buttonHeight - safePadding);
    
    // Generate position within safe bounds
    const safeX = minX + Math.random() * (maxX - minX);
    const safeY = minY + Math.random() * (maxY - minY);
    
    const position = { x: safeX, y: safeY };
    
    console.log('Device:', isIPhoneXR ? 'iPhone XR' : isStandardLaptop ? 'Standard Laptop' : 'Other', 'Position:', position, 'Viewport:', {width: viewportWidth, height: viewportHeight});
    
    // Double-check bounds (mathematical guarantee)
    if (position.x < 0 || position.y < 0 || 
        position.x + buttonWidth > viewportWidth || 
        position.y + buttonHeight > viewportHeight) {
      console.error('POSITION OUTSIDE BOUNDS - applying emergency fix');
      return {
        x: safePadding,
        y: safePadding
      };
    }
    
    return position;
  };

  const handleNoButton = (e: React.MouseEvent) => {
    e.preventDefault();
    setClickCount(prev => prev + 1);
    const attempt = clickCount + 1;
    setHearts(prev => [...prev, newHeart]);
    
    setTimeout(() => {
      setHearts(prev => prev.filter(h => h.id !== newHeart.id));
    }, 3000);

    // Mathematically IMPOSSIBLE button positioning - device-specific calculations
    const getSafePosition = (buttonWidth: number, buttonHeight: number) => {
      // Detect device type
      const isIPhoneXR = isMobile && window.innerWidth === 414 && window.innerHeight === 896;
      const isStandardLaptop = !isMobile && window.innerWidth >= 1366 && window.innerHeight >= 768;
      
      let viewportWidth, viewportHeight, safePadding;
      
      if (isIPhoneXR) {
        // iPhone XR specific: 414x896px
        viewportWidth = 414;
        viewportHeight = 896;
        safePadding = 60; // Safe for small screen
      } else if (isStandardLaptop) {
        // Standard laptop: 1366x768px minimum
        viewportWidth = Math.min(window.innerWidth, 1920); // Cap at 1920 for performance
        viewportHeight = Math.min(window.innerHeight, 1080); // Cap at 1080 for performance
        safePadding = 150; // Larger safe zone for desktop
      } else {
        // Other devices - safe fallback
        viewportWidth = window.innerWidth;
        viewportHeight = window.innerHeight;
        safePadding = 100;
      }
      
      // Calculate mathematically safe boundaries
      const minX = safePadding;
      const minY = safePadding;
      const maxX = Math.max(minX, viewportWidth - buttonWidth - safePadding);
      const maxY = Math.max(minY, viewportHeight - buttonHeight - safePadding);
      
      // Generate position within safe bounds
      const safeX = minX + Math.random() * (maxX - minX);
      const safeY = minY + Math.random() * (maxY - minY);
      
      const position = { x: safeX, y: safeY };
      
      console.log('Device:', isIPhoneXR ? 'iPhone XR' : isStandardLaptop ? 'Standard Laptop' : 'Other', 'Position:', position, 'Viewport:', {width: viewportWidth, height: viewportHeight});
      
      // Double-check bounds (mathematical guarantee)
      if (position.x < 0 || position.y < 0 || 
          position.x + buttonWidth > viewportWidth || 
          position.y + buttonHeight > viewportHeight) {
        console.error('POSITION OUTSIDE BOUNDS - applying emergency fix');
        return {
          x: safePadding,
          y: safePadding
        };
      }
      
      return position;
    };

    if (attempt <= 3) {
      // Simple teleport - GUARANTEED in bounds
      const pos = getSafePosition(150, 60);
      console.log('Attempt 1-3 position:', pos);
      setNoButtonPosition(pos);
      setNoButtonSize(0.8 + Math.random() * 0.4);
    } else if (attempt <= 6) {
      // Move and shrink - GUARANTEED in bounds
      const pos = getSafePosition(120, 50);
      console.log('Attempt 4-6 position:', pos);
      setNoButtonPosition(pos);
      setNoButtonSize(0.5 + Math.random() * 0.3);
    } else if (attempt <= 9) {
      // Make tiny but GUARANTEED visible
      const pos = getSafePosition(80, 40);
      console.log('Attempt 7-9 position:', pos);
      setNoButtonPosition(pos);
      setNoButtonSize(0.3 + Math.random() * 0.2);
    } else {
      // Make it tiny but GUARANTEED visible
      const pos = getSafePosition(100, 40);
      console.log('Final attempt position:', pos);
      setNoButtonPosition(pos);
      setNoButtonSize(0.1);
      setNoButtonText('🆘️ GIVE UP');
    }
    
    // Update button text
    if (attempt < noButtonTexts.length) {
      setNoButtonText(noButtonTexts[attempt]);
    }
  };

  const handleNoButtonHover = (e: React.MouseEvent) => {
    // Random escape on hover for mobile and desktop - GUARANTEED in bounds
    if (isMobile) {
      // On mobile, escape immediately
      handleNoButton(e);
    } else {
      // On desktop, quick teleport - USE SAFE POSITION
      const pos = getSafePosition(150, 60);
      setNoButtonPosition(pos);
    }
  };

  const handleNoButtonTouch = (e: React.TouchEvent) => {
    e.preventDefault();
    handleNoButton(e as any);
  };

  const handleYesButton = () => {
    setShowMessage(true);
    // Create massive celebration
    for (let i = 0; i < 30; i++) {
      setTimeout(() => {
        const celebrationEmoji = ['💖', '💕', '💘', '💝', '💗', '💓', '💞', '❤️', '🌹', '✨'];
        const celebrationHeart = {
          id: Date.now() + i,
          left: Math.random() * 100,
          top: 100 + Math.random() * 20,
          emoji: celebrationEmoji[Math.floor(Math.random() * celebrationEmoji.length)]
        };
        setHearts(prev => [...prev, celebrationHeart]);
      }, i * 50);
    }
  };

  useEffect(() => {
    // Background floating elements
    const interval = setInterval(() => {
      const emojis = ['💕', '💖', '🌹', '✨', '💗', '💌'];
      const bgHeart = {
        id: Date.now(),
        left: Math.random() * 100,
        top: 110,
        emoji: emojis[Math.floor(Math.random() * emojis.length)]
      };
      setHearts(prev => [...prev, bgHeart]);
      setTimeout(() => {
        setHearts(prev => prev.filter(h => h.id !== bgHeart.id));
      }, 8000);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="valentine-container">
      {/* Mobile warning */}
      {isMobile && (
        <div className="mobile-warning">
          💋 Perfect for mobile! Touch the buttons! 💋
        </div>
      )}

      {/* Animated Background */}
      <div className="background-hearts">
        {hearts.map(heart => (
          <div
            key={heart.id}
            className="floating-heart"
            style={{ left: `${heart.left}%`, top: `${heart.top}%` }}
          >
            {heart.emoji || '💕'}
          </div>
        ))}
      </div>

      {/* Main Content */}
      {!showMessage ? (
        <div className="proposal-content">
          <div className="question-container">
            <h1 className="valentine-question">
              Smallie m, would you be my Valentine? 💕
            </h1>
            
            <div className="fun-message" style={{ 
              opacity: clickCount > 0 ? 1 : 0,
              color: messageColors[Math.min(clickCount - 1, messageColors.length - 1)],
              fontWeight: 'bold',
              textShadow: '2px 2px 0 rgba(0,0,0,0.3)',
              fontSize: isMobile ? '1.3rem' : '1.6rem', // Bigger for emotional impact
            }}>
              {messages[Math.min(clickCount - 1, messages.length - 1)]}
            </div>
          </div>

          <div className="buttons-container">
            <button 
              className="yes-button"
              onClick={handleYesButton}
            >
              <span className="button-text">YES! 💖</span>
            </button>

            <button 
              className="no-button"
              onClick={handleNoButton}
              onMouseEnter={handleNoButtonHover}
              onTouchStart={handleNoButtonTouch}
              style={{
                position: clickCount > 0 ? 'fixed' : 'static',
                left: clickCount > 0 ? `${Math.max(0, Math.min(noButtonPosition.x, window.innerWidth - 150))}px` : 'auto',
                top: clickCount > 0 ? `${Math.max(0, Math.min(noButtonPosition.y, window.innerHeight - 80))}px` : 'auto',
                transform: `scale(${noButtonSize})`,
                transition: 'all 0.2s ease-out',
                opacity: 1,
                zIndex: 9999,
                display: 'block',
                minWidth: `${120 * noButtonSize}px`,
                minHeight: `${40 * noButtonSize}px`,
              }}
            >
                <span className="button-text" style={{
                  color: messageColors[Math.min(clickCount, messageColors.length - 1)],
                  fontWeight: 'bold',
                  textShadow: '1px 1px 0 rgba(0,0,0,0.5)',
                }}>
                  {noButtonText}
                </span>
            </button>
          </div>

          <div className="progress-message" style={{ opacity: Math.min(clickCount * 0.15, 1) }}>
            <div>Attempts: {clickCount} 💔</div>
            <div style={{ fontSize: isMobile ? '1rem' : '1.2rem', marginTop: '0.5rem' }}>
              {clickCount === 0 && "💭 Make her happy!"}
              {clickCount > 0 && clickCount <= 3 && "🥺 Don't hurt me!"}
              {clickCount > 3 && clickCount <= 6 && "😭 Why are you so mean?"}
              {clickCount > 6 && clickCount <= 9 && "💀 You're killing me!"}
              {clickCount > 9 && clickCount <= 12 && "🆘️ Just say YES!"}
              {clickCount > 12 && "🔫 I give up..."}
            </div>
          </div>
        </div>
      ) : (
        <div className="success-message">
          <h1 className="celebration-text">
            Thats my baby, 831 mama! 🎉💕
          </h1>
          <div className="love-animation">
            <span className="big-heart">💖</span>
            <span className="big-heart">💕</span>
            <span className="big-heart">💖</span>
          </div>
          <p className="final-message">
            I promise to love you forever, my baby! 🌹
          </p>
        </div>
      )}

      {/* Extra floating decorations */}
      <div className="corner-decoration top-left">🌹</div>
      <div className="corner-decoration top-right">💕</div>
      <div className="corner-decoration bottom-left">🌹</div>
      <div className="corner-decoration bottom-right">💕</div>

      {/* Funny torture messages that follow no button */}
      {clickCount > 5 && (
        <div 
          className="torture-message"
          style={{
            position: 'absolute',
            left: `${noButtonPosition.x}px`,
            top: `${noButtonPosition.y + 60}px`,
            opacity: 0.8,
            fontSize: '0.9rem'
          }}
        >
          {clickCount === 6 && "You can't escape! 😈"}
          {clickCount === 7 && "Muahaha! 🤡"}
          {clickCount === 8 && "Running won't help! 🏃‍♂️"}
          {clickCount === 9 && "I'm everywhere! 👻"}
          {clickCount === 10 && "Give up already! 🏳️"}
          {clickCount === 11 && "Please stop! 🙏"}
          {clickCount >= 12 && "You broke me! 💔"}
        </div>
      )}
    </div>
  );
};

export default Valentine;