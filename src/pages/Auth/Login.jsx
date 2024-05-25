import React, { useState, useContext } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { login } from '../../authSlice';
import { useNavigate } from 'react-router-dom';
import { unwrapResult } from '@reduxjs/toolkit';
import { useTranslation } from 'react-i18next';

const AdminLogin = () => {
    const { t } = useTranslation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    const resultAction = await dispatch(login({ email, password }));
      const user = unwrapResult(resultAction);
      
      if (user?.is_admin) {
        navigate('/admin');
      } else {
        navigate('/');
      }
    
  };
 
  

  

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center">{t('register.login')}</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2" htmlFor="email">{t('register.email')}</label>
            <input
              className="w-full p-3 border rounded shadow-sm focus:outline-none focus:border-indigo-500"
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 mb-2" htmlFor="password">{t('register.password')}</label>
            <input
              className="w-full p-3 border rounded shadow-sm focus:outline-none focus:border-indigo-500"
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
            />
          </div>
          {error && <div className="mb-4 text-red-500">{error}</div>}
          <button
            type="submit"
            className="w-full bg-indigo-500 text-white p-3 rounded hover:bg-indigo-600"
          >
            {t('register.login')}
          </button>
        </form>
      </div>
    </div>
  );
};

export default AdminLogin;
