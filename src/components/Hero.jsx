import React, { useState, useEffect } from 'react';

const images = [
  { src: 'https://images.pexels.com/photos/4101143/pexels-photo-4101143.jpeg?auto=compress&cs=tinysrgb&', alt: 'Image 1', text: 'NOTRE PSYCHOLOGUE VOUS PROPOSE DES CONSULTATIONS ET DES BONNES THERAPIES' },
  { src: 'https://images.pexels.com/photos/7176026/pexels-photo-7176026.jpeg?auto=compress&cs=tinysrgb&', alt: 'Image 2', text: 'PSYCHOLOGUE POUR ENFANTS,ADULTES OU THERAPIE DE COUPLE' },
  { src: 'https://images.pexels.com/photos/5699418/pexels-photo-5699418.jpeg?auto=compress&cs=tinysrgb&', alt: 'Image 3', text: 'RESERVEZ VOTRE RENDEZ-VOUS' },
];

const Hero = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-96 overflow-hidden">
      {images.map((image, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${index === activeIndex ? 'opacity-100' : 'opacity-0'}`}
        >
          <img
            src={image.src}
            alt={image.alt}
            className="w-full h-full object-cover absolute inset-0"
            style={{ filter: 'brightness(0.7) grayscale(0.5)' }}
          />
          <div className="absolute inset-0 bg-blue-500 opacity-30 mix-blend-mode-overlay"></div>
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <div className="relative flex justify-center items-center w-full h-full text-white text-center font-bold text-xl z-10">
            {image.text}
          </div>
          
        </div>
      ))}
      
    </div>
  );
};

export default Hero;
