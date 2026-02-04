import React from 'react';

interface ValentineButtonsProps {
  onYesClick: () => void;
  onNoClick: () => void;
  noClickCount: number;
  yesScale: number;
  noScale: number;
  noButtonText: string;
}

const ValentineButtons: React.FC<ValentineButtonsProps> = ({
  onYesClick,
  onNoClick,
  noClickCount,
  yesScale,
  noScale,
  noButtonText,
}) => {
  return (
    <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 mt-8 sm:mt-10">
      {/* YES Button */}
      <button
        onClick={onYesClick}
        style={{ transform: `scale(${yesScale})` }}
        className="btn-yes-gradient text-primary-foreground font-bold text-lg sm:text-xl 
                   px-8 sm:px-12 py-4 sm:py-5 rounded-full shadow-valentine-lg
                   hover:shadow-valentine transition-all duration-300 ease-out
                   hover:brightness-110 active:scale-95
                   min-w-[120px] sm:min-w-[150px]"
      >
        YES 💖
      </button>

      {/* NO Button */}
      <button
        onClick={onNoClick}
        style={{ 
          transform: `scale(${noScale})`,
          opacity: Math.max(0.4, noScale),
        }}
        className={`btn-no-gradient text-secondary-foreground font-semibold text-base sm:text-lg 
                   px-6 sm:px-8 py-3 sm:py-4 rounded-full shadow-md
                   hover:shadow-lg transition-all duration-300 ease-out
                   hover:brightness-95 active:scale-95
                   min-w-[100px] sm:min-w-[120px]
                   ${noClickCount > 3 ? 'animate-wiggle' : ''}`}
      >
        {noButtonText}
      </button>
    </div>
  );
};

export default ValentineButtons;
