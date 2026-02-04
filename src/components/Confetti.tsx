import React from 'react';

const Confetti: React.FC = () => {
  const confettiPieces = Array.from({ length: 50 }, (_, i) => {
    const colors = [
      'hsl(350, 80%, 65%)',
      'hsl(350, 70%, 75%)',
      'hsl(0, 75%, 60%)',
      'hsl(350, 100%, 85%)',
      'hsl(40, 100%, 70%)',
      'hsl(350, 60%, 80%)',
    ];
    
    const shapes = ['heart', 'circle', 'star'];
    const shape = shapes[Math.floor(Math.random() * shapes.length)];
    
    return {
      id: i,
      left: `${Math.random() * 100}%`,
      delay: `${Math.random() * 3}s`,
      duration: `${2 + Math.random() * 2}s`,
      color: colors[Math.floor(Math.random() * colors.length)],
      size: 8 + Math.random() * 12,
      shape,
    };
  });

  const renderShape = (piece: typeof confettiPieces[0]) => {
    if (piece.shape === 'heart') {
      return (
        <svg 
          width={piece.size} 
          height={piece.size} 
          viewBox="0 0 24 24" 
          fill={piece.color}
        >
          <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
        </svg>
      );
    } else if (piece.shape === 'star') {
      return (
        <svg 
          width={piece.size} 
          height={piece.size} 
          viewBox="0 0 24 24" 
          fill={piece.color}
        >
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
        </svg>
      );
    }
    return (
      <div
        style={{
          width: piece.size,
          height: piece.size,
          backgroundColor: piece.color,
          borderRadius: '50%',
        }}
      />
    );
  };

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-50">
      {confettiPieces.map((piece) => (
        <div
          key={piece.id}
          className="absolute confetti"
          style={{
            left: piece.left,
            top: '-20px',
            animationDelay: piece.delay,
            animationDuration: piece.duration,
          }}
        >
          {renderShape(piece)}
        </div>
      ))}
    </div>
  );
};

export default Confetti;
