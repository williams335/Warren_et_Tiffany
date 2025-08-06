import React, { useState, useEffect } from 'react';

const Countdown: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });
  
  // Set wedding date (year, month [0-11], day, hour, minute)
  const weddingDate = new Date(2026, 5, 6, 14, 0); // June 6, 2026, 14:00
  
  useEffect(() => {
    const calculateTimeLeft = () => {
      const difference = weddingDate.getTime() - new Date().getTime();
      
      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60)
        });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };
    
    const timer = setInterval(calculateTimeLeft, 1000);
    calculateTimeLeft();
    
    return () => clearInterval(timer);
  }, []);
  
  return (
    <div className="inline-flex bg-white/10 backdrop-blur-md rounded-lg shadow-2xl border border-white/20 p-6">
      <div className="text-center">
        <h4 className="font-heading text-lg text-white mb-4 drop-shadow-md">Jour J</h4>
        <div className="flex space-x-6">
          <div className="flex flex-col items-center">
            <span className="text-3xl font-bold text-gold-400 drop-shadow-lg">{timeLeft.days}</span>
            <span className="text-sm text-white/90 drop-shadow-sm">jours</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-3xl font-bold text-gold-400 drop-shadow-lg">{timeLeft.hours}</span>
            <span className="text-sm text-white/90 drop-shadow-sm">heures</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-3xl font-bold text-gold-400 drop-shadow-lg">{timeLeft.minutes}</span>
            <span className="text-sm text-white/90 drop-shadow-sm">min</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-3xl font-bold text-gold-400 drop-shadow-lg">{timeLeft.seconds}</span>
            <span className="text-sm text-white/90 drop-shadow-sm">sec</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Countdown;