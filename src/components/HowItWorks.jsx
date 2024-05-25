// src/components/HowItWorks.js

import React, { useRef } from 'react';

const steps = [
  {
    number: '01',
    title: 'Clicker sur "Le Button Rouge"',
    description: 'Pour commencer, cliquez sur le bouton rouge "Prendre un rendez-vous" en bas de la page.',
  },

  {
    number: '02',
    title: 'Réservez votre rendez-vous',
    description: 'Accédez au planning de rendez-vous et réservez votre créneau horaire..',
  },
  {
    number: '03',
    title: 'Confirmez votre rendez-vous',
    description: 'Vous recevrez un email de confirmation ou un rappel de votre rendez-vous.',
  },
  {
    number: '04',
    title: 'Réalisez votre consultation',
    description: 'À l\'heure de votre rendez-vous, vous accédez à un espace digital sécurisé et vous suivez votre consultation en toute simplicité..',
  },
];

const HowItWorks = () => {
  const videoRef = useRef(null);

  const handlePlay = () => {
    if (videoRef.current) {
      videoRef.current.play();
    }
  };

  return (
    <div className="bg-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-semibold text-gray-900 mb-4">
          Comment fonctionne <span className="text-green-600">BetterLife</span> ?
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div>
            {steps.map((step, index) => (
              <div key={index} className="flex items-start mb-8">
                <div className="flex-shrink-0">
                  <div className="bg-green-600 h-12 w-12 flex items-center justify-center rounded-full text-white text-xl font-bold">
                    {step.number}
                  </div>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-semibold text-gray-900">{step.title}</h3>
                  <p className="text-gray-700">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="flex items-center justify-center relative">
            <video
              ref={videoRef}
              className="w-full h-auto rounded-lg shadow-lg"
              src="https://videos.pexels.com/video-files/5713009/5713009-uhd_3840_2160_25fps.mp4"
              controls={true}
            />
          
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
