import React, { useState, useEffect } from 'react';
import { Sparkles, Crown, Gift, PartyPopper, Star, Heart, Cake, Music, Rocket } from 'lucide-react';

const OwenBirthdayCelebration = () => {
  const [showFireworks, setShowFireworks] = useState(false);
  const [starCount, setStarCount] = useState(0);
  const [messageIndex, setMessageIndex] = useState(0);
  const [showSpecialMessage, setShowSpecialMessage] = useState(false);

  const celebrationMessages = [
    "สุขสันต์วันเกิด Owen! 🎉",
    "ขอให้ชีวิตสดใสเหมือนดวงดาว! ⭐",
    "ขอพรที่ตั้งใจไว้เป็นจริง! 🌟",
    "ขอให้มีความสุขตลอดปี! 🎈",
    "ขอให้ประสบความสำเร็จในทุกด้าน! 👑",
    "Happy Birthday to Our Amazing Owen! 🎂",
    "May Your Dreams Come True! 🌈",
    "You Make The World Brighter! ✨"
  ];

  const specialWishes = [
    "ขอให้มีความสุขล้นหัวใจ",
    "สุขภาพแข็งแรง",
    "โชคดีตลอดไป",
    "ประสบความสำเร็จ",
    "พบเจอแต่สิ่งดีๆ",
    "มีรอยยิ้มทุกวัน"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setMessageIndex((prev) => (prev + 1) % celebrationMessages.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  const launchFireworks = () => {
    setShowFireworks(true);
    setStarCount(prev => (prev + 5) % 40);
    setShowSpecialMessage(true);
    setTimeout(() => {
      setShowFireworks(false);
      setShowSpecialMessage(false);
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 flex flex-col items-center justify-center p-4 relative overflow-hidden">
      {/* Enhanced floating stars */}
      {[...Array(starCount)].map((_, i) => (
        <div
          key={i}
          className="absolute animate-float"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 3}s`,
            animationDuration: `${3 + Math.random() * 2}s`,
            transform: `rotate(${Math.random() * 360}deg)`
          }}
        >
          <Star className="w-6 h-6 text-yellow-300 animate-pulse" />
        </div>
      ))}

      {/* Main content */}
      <div className="relative z-10 text-center">
        {/* Enhanced crown animation */}
        <div className="absolute -top-24 left-1/2 transform -translate-x-1/2">
          <div className="animate-bounce">
            <Crown className="w-24 h-24 text-yellow-400 animate-pulse" />
          </div>
        </div>

        {/* Enhanced name display */}
        <div className="mb-12 relative">
          <h1 className="text-8xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-500 animate-gradient tracking-wider">
            OWEN
          </h1>
          <div className="absolute -top-4 -right-4">
            <Sparkles className="w-10 h-10 text-yellow-300 animate-spin-slow" />
          </div>
        </div>

        {/* Message carousel with enhanced styling */}
        <div className="h-24 mb-8">
          <h2 className="text-4xl font-bold text-white animate-fade-in">
            {celebrationMessages[messageIndex]}
          </h2>
        </div>

        {/* Special birthday wishes */}
        {showSpecialMessage && (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-3xl font-bold text-white animate-scale-up">
              {specialWishes[Math.floor(Math.random() * specialWishes.length)]}
            </div>
          </div>
        )}

        {/* Enhanced interactive elements */}
        <div className="flex justify-center gap-8 mb-12">
          <Cake className="w-16 h-16 text-pink-400 animate-bounce" />
          <Gift className="w-16 h-16 text-purple-400 animate-bounce delay-100" />
          <PartyPopper className="w-16 h-16 text-yellow-400 animate-bounce delay-200" />
          <Music className="w-16 h-16 text-blue-400 animate-bounce delay-300" />
          <Rocket className="w-16 h-16 text-red-400 animate-bounce delay-400" />
        </div>

        {/* Enhanced interactive button */}
        <button
          onClick={launchFireworks}
          className="px-8 py-4 bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 rounded-full text-white font-bold text-xl hover:from-pink-600 hover:via-purple-600 hover:to-indigo-600 transform hover:scale-110 transition-all duration-300 shadow-lg hover:shadow-2xl animate-pulse"
        >
          ส่งความสุขให้ Owen! 🎉✨
        </button>

        {/* Enhanced hearts */}
        <div className="mt-12 flex justify-center gap-6">
          {[...Array(5)].map((_, i) => (
            <Heart
              key={i}
              className="text-pink-400 animate-pulse"
              style={{ 
                animationDelay: `${i * 0.2}s`,
                width: `${28 + i * 8}px`,
                height: `${28 + i * 8}px`
              }}
            />
          ))}
        </div>

        {/* Enhanced fireworks effect */}
        {showFireworks && (
          <div className="absolute inset-0 pointer-events-none">
            {[...Array(30)].map((_, i) => (
              <div
                key={i}
                className="absolute w-4 h-4 rounded-full animate-firework"
                style={{
                  backgroundColor: [
                    '#FF69B4', '#9370DB', '#4169E1', '#FFD700',
                    '#FF1493', '#00BFFF', '#7CFC00', '#FFB6C1'
                  ][i % 8],
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 0.5}s`,
                  transform: `scale(${1 + Math.random()})`
                }}
              />
            ))}
          </div>
        )}
      </div>

      {/* Enhanced background sparkles */}
      <div className="fixed inset-0 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <Sparkles
            key={i}
            className="absolute text-white opacity-20 animate-twinkle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              transform: `scale(${0.5 + Math.random()})`
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default OwenBirthdayCelebration;