import React, { useState, useCallback } from 'react';
import FloatingDoodles from './FloatingDoodles';
import ValentineButtons from './ValentineButtons';
import CelebrationScreen from './CelebrationScreen';

const NO_PHRASES = [
  "No 😢",
  "Are you sure? 🥺",
  "Really sure? 😔",
  "Think again... 💭",
  "Last chance! 🙏",
  "Have a heart 🥺",
  "Don't do this to me 💔",
  "I'll be sad 😭",
  "Pretty please? 🌸",
  "I'll cry... 😿",
  "Nooo don't 🥀",
  "You're breaking my heart 💔",
];

const ValentineProposal: React.FC = () => {
  const [noClickCount, setNoClickCount] = useState(0);
  const [showCelebration, setShowCelebration] = useState(false);

  // Calculate button scales based on NO click count
  const yesScale = Math.min(1 + noClickCount * 0.15, 2.5);
  const noScale = Math.max(1 - noClickCount * 0.08, 0.3);

  // Get current NO button text
  const noButtonText = NO_PHRASES[Math.min(noClickCount, NO_PHRASES.length - 1)];

  const handleYesClick = useCallback(() => {
    setShowCelebration(true);
  }, []);

  const handleNoClick = useCallback(() => {
    setNoClickCount((prev) => prev + 1);
  }, []);

  if (showCelebration) {
    return <CelebrationScreen />;
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 py-8 relative overflow-hidden">
      <FloatingDoodles />
      
      {/* Main content container */}
      <div className="relative z-10 text-center max-w-2xl mx-auto">
        {/* Decorative top hearts */}
        <div className="flex justify-center gap-3 mb-6 text-2xl sm:text-3xl">
          <span className="animate-float" style={{ animationDelay: '0s' }}>💕</span>
          <span className="animate-pulse-heart">💖</span>
          <span className="animate-float-delayed" style={{ animationDelay: '0.5s' }}>💗</span>
        </div>

        {/* Main headline */}
        <h1 className="font-pacifico text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-valentine-gradient mb-2 leading-tight drop-shadow-sm">
          Will You Be
        </h1>
        <h1 className="font-pacifico text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-valentine-gradient mb-6 leading-tight drop-shadow-sm">
          My Valentine?
        </h1>

        {/* Subtitle with heart */}
        <p className="font-quicksand text-lg sm:text-xl text-muted-foreground mb-2 flex items-center justify-center gap-2">
          <span className="animate-pulse-heart">💘</span>
          <span>Please say yes...</span>
          <span className="animate-pulse-heart">💘</span>
        </p>

        {/* Buttons */}
        <ValentineButtons
          onYesClick={handleYesClick}
          onNoClick={handleNoClick}
          noClickCount={noClickCount}
          yesScale={yesScale}
          noScale={noScale}
          noButtonText={noButtonText}
        />

        {/* Hint text that appears after some NO clicks */}
        {noClickCount >= 3 && (
          <p className="mt-8 text-sm text-muted-foreground animate-bounce-in font-quicksand">
            Psst... the YES button is looking pretty good right now 👀
          </p>
        )}

        {noClickCount >= 6 && (
          <p className="mt-4 text-xs text-muted-foreground animate-bounce-in font-quicksand">
            (There's no escape... just say yes! 🥰)
          </p>
        )}

        {/* Decorative bottom flowers */}
        <div className="flex justify-center gap-4 mt-10 text-xl sm:text-2xl">
          <span className="animate-float-delayed">🌸</span>
          <span className="animate-float">🌷</span>
          <span className="animate-float-delayed" style={{ animationDelay: '0.3s' }}>🌺</span>
        </div>
      </div>
    </div>
  );
};

export default ValentineProposal;
