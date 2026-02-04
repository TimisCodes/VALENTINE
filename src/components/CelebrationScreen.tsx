import React from 'react';
import Confetti from './Confetti';

const CelebrationScreen: React.FC = () => {
  return (
    <div className="fixed inset-0 z-40 flex items-center justify-center"
         style={{ background: 'var(--gradient-celebration)' }}>
      <Confetti />
      
      <div className="text-center px-6 animate-bounce-in relative z-50">
        {/* Decorative hearts around the text */}
        <div className="absolute -top-8 left-1/2 -translate-x-1/2 text-4xl animate-pulse-heart">
          💕
        </div>
        <div className="absolute -left-4 top-1/2 -translate-y-1/2 text-2xl animate-float">
          💖
        </div>
        <div className="absolute -right-4 top-1/2 -translate-y-1/2 text-2xl animate-float-delayed">
          💗
        </div>
        
        {/* Main celebration text */}
        <h1 className="font-pacifico text-6xl sm:text-8xl md:text-9xl text-valentine-gradient mb-6 drop-shadow-lg">
          YAY!!
        </h1>
        
        <div className="text-5xl sm:text-6xl mb-6 animate-pulse-heart">
          💘
        </div>
        
        <p className="font-quicksand text-xl sm:text-2xl md:text-3xl text-foreground font-medium mb-4">
          I knew you'd say yes 😍
        </p>
        
        <p className="font-quicksand text-lg sm:text-xl text-muted-foreground">
          You've made me the happiest person! 🥰
        </p>

        <p className="font-pacifico text-4xl sm:text-5xl md:text-6xl text-valentine-gradient mt-6 drop-shadow-lg">
          I LOVE YOU
        </p>
        
        {/* Floating hearts at bottom */}
        <div className="mt-8 flex justify-center gap-4 text-3xl">
          <span className="animate-float" style={{ animationDelay: '0s' }}>💕</span>
          <span className="animate-float-delayed" style={{ animationDelay: '0.3s' }}>💖</span>
          <span className="animate-float" style={{ animationDelay: '0.6s' }}>💗</span>
          <span className="animate-float-delayed" style={{ animationDelay: '0.9s' }}>💕</span>
        </div>
      </div>
    </div>
  );
};

export default CelebrationScreen;
