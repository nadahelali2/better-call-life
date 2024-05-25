import React, { useState, useEffect } from 'react';
import { format } from 'date-fns';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { ArrowLeftIcon, CalendarDaysIcon } from '@heroicons/react/24/outline';
import axios from 'axios';
import { useTranslation } from 'react-i18next';
import AppointmentNotification from './Notify';

// TimePicker component
const TimePicker = ({ onTimeSelected, unavailableTimes, selectedTime, setSelectedTime }) => {
  const times = ['09:00', '09:30', '10:00', '10:30', '11:00', '11:30', '12:00'];

  const handleClick = (time) => {
    if (!unavailableTimes.includes(time)) {
      setSelectedTime(time);
    }
  };

  const handleNext = () => {
    onTimeSelected(selectedTime);
  };

  return (
    <div className="flex flex-col gap-4">
      {times.map((time, idx) => (
        <div key={idx}>
          <button
            className={`
              px-4 py-2 rounded-lg text-center focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500
              ${selectedTime === time ? 'bg-blue-500 text-white hover:bg-blue-700' : 'bg-gray-200 text-gray-600 hover:bg-gray-300'}
              ${unavailableTimes.includes(time) ? 'bg-red-500 text-white' : ''}
            `}
            onClick={() => handleClick(time)}
            disabled={unavailableTimes.includes(time)}
          >
            {time}
          </button>
          {selectedTime === time && !unavailableTimes.includes(time) && (
            <button className="ml-2 text-blue-500 font-bold" onClick={handleNext}>
              Next
            </button>
          )}
        </div>
      ))}
    </div>
  );
};

// AppointmentScheduler component
const AppointmentScheduler = () => {
  const { i18n } = useTranslation();
  useEffect(() => {}, [i18n.language]);

  const [value, onChange] = useState(new Date());
  const [submitted, setSubmitted] = useState(false);
  const [showTime, setShowTime] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedTime, setSelectedTime] = useState('');
  const [userInfo, setUserInfo] = useState({ name: '', email: '', phone: '' });
  const [unavailableDates, setUnavailableDates] = useState({});
  const [unavailableTimes, setUnavailableTimes] = useState([]);
  const [loading, setLoading] = useState(false); // State to manage loading

  const fetchUnavailableDates = async () => {
    try {
      const response = await axios.get('http://localhost:8000/api/appointments/unavailable');
      setUnavailableDates(response.data);
    } catch (error) {
      console.error('Error fetching unavailable dates:', error);
    }
  };

  useEffect(() => {
    fetchUnavailableDates();
  }, []);

  useEffect(() => {
    const dateKey = format(selectedDate, 'yyyy-MM-dd');
    setUnavailableTimes(unavailableDates[dateKey] || []);
    setSelectedTime(''); // Reset selected time when the date changes
  }, [selectedDate, unavailableDates]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserInfo((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleDateChange = (date) => {
    setSelectedDate(date);
    setShowTime(true);
    setShowForm(false);
  };

  const handleTimeSelected = (time) => {
    setSelectedTime(time);
    setShowForm(true);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!selectedDate || !selectedTime) {
      alert('Please select a date and time for the appointment.');
      return;
    }

    setLoading(true); // Set loading state to true

    const combinedDateTime = new Date(selectedDate);
    const [hours, minutes] = selectedTime.split(':');
    combinedDateTime.setHours(hours, minutes);

    const formattedDateTime = format(combinedDateTime, 'yyyy-MM-dd HH:mm:ss');
    try {
      await axios.post('http://localhost:8000/api/appointments/store', {
        name: userInfo.name,
        email: userInfo.email,
        phone: userInfo.phone,
        appointment_date: formattedDateTime,
      });
      setSubmitted(true);
      setUserInfo({ name: '', email: '', phone: '' });
      setShowForm(false);
      fetchUnavailableDates();
    } catch (error) {
      console.error('There was an error booking the appointment!', error);
    } finally {
      setLoading(false); // Set loading state to false after the request is completed
    }
  };

  const isDateUnavailable = (date) => {
    const formattedDate = format(date, 'yyyy-MM-dd');
    const unavailableTimes = unavailableDates[formattedDate] || [];
    return unavailableTimes.length === 7; // Disable the date if all times are unavailable
  };

  return (
    <div>
      {submitted ? (
        <AppointmentNotification
          toggle={() => setSubmitted(false)}
          name={userInfo.name}
          phone={userInfo.phone}
          date={new Intl.DateTimeFormat(i18n.language, { dateStyle: 'full', timeStyle: 'short' }).format(
            new Date(format(selectedDate, 'yyyy-MM-dd') + 'T' + selectedTime + ':00')
          )}
        />
      ) : (
        <>
          <div className="flex gap-5 m-4 p-4 rounded-xl">
            {showForm && <ArrowLeftIcon className="h-6 w-6" onClick={() => setShowForm(false)} />}

            {!showForm && (
              <Calendar
                onChange={handleDateChange}
                value={value}
                locale={i18n.language}
                minDate={new Date()}
                tileDisabled={({ date }) => isDateUnavailable(date)}
              />
            )}

            {showTime && !showForm && (
              <TimePicker
                onTimeSelected={handleTimeSelected}
                unavailableTimes={unavailableTimes}
                selectedTime={selectedTime}
                setSelectedTime={setSelectedTime}
              />
            )}

            {showForm && (
              <div className="flex bg-gray-100 p-6">
                <CalendarDaysIcon className="h-6 w-6" />
                <h1>
                  {selectedTime ? (
                    new Intl.DateTimeFormat(i18n.language, { dateStyle: 'full', timeStyle: 'short' }).format(
                      new Date(`${format(selectedDate, 'yyyy-MM-dd')}T${selectedTime}:00`)
                    )
                  ) : (
                    'Please select a time'
                  )}
                </h1>
              </div>
            )}

            {showForm && (
              <div className="mb-8 border-gray-100 border-l-2 p-7">
                <h2 className="text-xl font-bold mb-4">Enter Details</h2>
                <form onSubmit={handleSubmit}>
                  <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2">Name</label>
                    <input
                      type="text"
                      name="name"
                      placeholder="Name"
                      value={userInfo.name}
                      onChange={handleInputChange}
                      required
                      className="border rounded-md px-3 py-2 w-full"
                    />
                  </div>
                  <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2">Email</label>
                    <input
                      type="email"
                      name="email"
                      placeholder="Email"
                      value={userInfo.email}
                      onChange={handleInputChange}
                      required
                      className="border rounded-md px-3 py-2 w-full"
                    />
                  </div>
                  <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2">Phone</label>
                    <input
                      type="phone"
                      name="phone"
                      placeholder="Phone"
                      value={userInfo.phone}
                      onChange={handleInputChange}
                      required
                      className="border rounded-md px-3 py-2 w-full"
                    />
                  </div>
                  <div>
                    <button
                      type="submit"
                      className="bg-gray-800 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                      disabled={loading}
                    >
                      {loading ? (
                        <svg
                          className="animate-spin h-5 w-5 text-white inline-block"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                          ></circle>
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8v8H4z"
                          ></path>
                        </svg>
                      ) : (
                        'Book Appointment'
                      )}
                    </button>
                  </div>
                </form>
              </div>
            )}
          </div>
        </>
      )}
    </div>
  );
};

export default AppointmentScheduler;
