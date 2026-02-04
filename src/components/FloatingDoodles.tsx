import React from 'react';

interface DoodleProps {
  className?: string;
  style?: React.CSSProperties;
}

const Heart: React.FC<DoodleProps> = ({ className, style }) => (
  <svg className={className} style={style} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
  </svg>
);

const Star: React.FC<DoodleProps> = ({ className, style }) => (
  <svg className={className} style={style} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
  </svg>
);

const Flower: React.FC<DoodleProps> = ({ className, style }) => (
  <svg className={className} style={style} viewBox="0 0 24 24" fill="currentColor">
    <circle cx="12" cy="12" r="3"/>
    <ellipse cx="12" cy="5" rx="2" ry="4"/>
    <ellipse cx="12" cy="19" rx="2" ry="4"/>
    <ellipse cx="5" cy="12" rx="4" ry="2"/>
    <ellipse cx="19" cy="12" rx="4" ry="2"/>
    <ellipse cx="7" cy="7" rx="2" ry="3" transform="rotate(-45 7 7)"/>
    <ellipse cx="17" cy="17" rx="2" ry="3" transform="rotate(-45 17 17)"/>
    <ellipse cx="17" cy="7" rx="2" ry="3" transform="rotate(45 17 7)"/>
    <ellipse cx="7" cy="17" rx="2" ry="3" transform="rotate(45 7 17)"/>
  </svg>
);

const Smiley: React.FC<DoodleProps> = ({ className, style }) => (
  <svg className={className} style={style} viewBox="0 0 24 24" fill="currentColor">
    <circle cx="12" cy="12" r="10" fill="none" stroke="currentColor" strokeWidth="2"/>
    <circle cx="8" cy="10" r="1.5"/>
    <circle cx="16" cy="10" r="1.5"/>
    <path d="M8 14s1.5 3 4 3 4-3 4-3" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
  </svg>
);

const Sparkle: React.FC<DoodleProps> = ({ className, style }) => (
  <svg className={className} style={style} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2L13.5 8.5L20 10L13.5 11.5L12 18L10.5 11.5L4 10L10.5 8.5L12 2Z"/>
  </svg>
);

const FloatingDoodles: React.FC = () => {
  const doodles = [
    { Component: Heart, className: "text-valentine-rose w-8 h-8 animate-float opacity-60", style: { top: '10%', left: '5%', animationDelay: '0s' } },
    { Component: Star, className: "text-valentine-pink w-6 h-6 animate-float-delayed opacity-50", style: { top: '15%', right: '10%', animationDelay: '1s' } },
    { Component: Flower, className: "text-valentine-pink w-10 h-10 animate-float opacity-40", style: { top: '25%', left: '8%', animationDelay: '0.5s' } },
    { Component: Smiley, className: "text-valentine-rose w-7 h-7 animate-float-delayed opacity-50", style: { top: '20%', right: '15%', animationDelay: '2s' } },
    { Component: Heart, className: "text-valentine-heart w-6 h-6 animate-pulse-heart opacity-70", style: { top: '35%', left: '3%', animationDelay: '0.3s' } },
    { Component: Sparkle, className: "text-valentine-pink w-5 h-5 animate-sparkle opacity-60", style: { top: '8%', left: '25%', animationDelay: '0.7s' } },
    { Component: Heart, className: "text-valentine-pink w-5 h-5 animate-float opacity-50", style: { bottom: '30%', left: '5%', animationDelay: '1.5s' } },
    { Component: Star, className: "text-valentine-rose w-7 h-7 animate-float-delayed opacity-40", style: { bottom: '25%', right: '8%', animationDelay: '0.8s' } },
    { Component: Flower, className: "text-valentine-pink w-8 h-8 animate-float opacity-50", style: { bottom: '35%', right: '5%', animationDelay: '1.2s' } },
    { Component: Smiley, className: "text-valentine-rose w-6 h-6 animate-float-delayed opacity-60", style: { bottom: '20%', left: '12%', animationDelay: '2.2s' } },
    { Component: Heart, className: "text-valentine-heart w-9 h-9 animate-pulse-heart opacity-50", style: { bottom: '15%', right: '12%', animationDelay: '0.4s' } },
    { Component: Sparkle, className: "text-valentine-rose w-6 h-6 animate-sparkle opacity-50", style: { top: '45%', right: '3%', animationDelay: '1.8s' } },
    { Component: Heart, className: "text-valentine-pink w-4 h-4 animate-float opacity-40", style: { top: '60%', left: '2%', animationDelay: '2.5s' } },
    { Component: Star, className: "text-valentine-pink w-5 h-5 animate-float-delayed opacity-50", style: { top: '70%', right: '6%', animationDelay: '1.1s' } },
  ];

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {doodles.map((doodle, index) => (
        <doodle.Component
          key={index}
          className={`absolute ${doodle.className}`}
          style={doodle.style}
        />
      ))}
    </div>
  );
};

export default FloatingDoodles;
