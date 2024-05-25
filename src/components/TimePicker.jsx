import React, { useState } from 'react';

const TimePicker = ({ onTimeSelected, unavailableTimes, availableTimes }) => {
  const [selectedTime, setSelectedTime] = useState(null);

  const handleClick = (time) => {
    setSelectedTime(time);
  };

  const handleNext = () => {
    onTimeSelected(selectedTime);
  };

  return (
    <div className="flex flex-col gap-4">
      {availableTimes.map((time, idx) => (
        <div key={idx}>
          <button
            className={`
              px-4 py-2 rounded-lg text-center focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500
              ${selectedTime === time ? 'bg-blue-500 text-white hover:bg-blue-700' : 'bg-gray-200 text-gray-600 hover:bg-gray-300'}
            `}
            onClick={() => handleClick(time)}
          >
            {time}
          </button>
          {selectedTime === time && (
            <button className="ml-2 text-blue-500 font-bold" onClick={handleNext}>Next</button>
          )}
        </div>
      ))}
    </div>
  );
};

export default TimePicker;
