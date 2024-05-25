import React from 'react';
import { useTranslation } from 'react-i18next';

const Register = () => {
    const {i18n, t } = useTranslation();

    const direction = i18n.dir();

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100" dir={direction}>
      <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
      
        <h2 className="text-2xl font-bold mb-6 text-center">{t('register.title')}</h2>
        <form>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2" htmlFor="name">{t('register.name')}</label>
            <input
              className="w-full p-3 border rounded shadow-sm focus:outline-none focus:border-indigo-500"
              type="text"
              id="name"
              placeholder="Enter your name"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2" htmlFor="email">{t('register.email')}</label>
            <input
              className="w-full p-3 border rounded shadow-sm focus:outline-none focus:border-indigo-500"
              type="email"
              id="email"
              placeholder="Enter your email"
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 mb-2" htmlFor="password">{t('register.password')}</label>
            <input
              className="w-full p-3 border rounded shadow-sm focus:outline-none focus:border-indigo-500"
              type="password"
              id="password"
              placeholder="Create a password"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-indigo-500 text-white p-3 rounded hover:bg-indigo-600"
          >
            {t('register.title')}
          </button>
        </form>
        <p className="text-center mt-4">
          {t('register.haveAccount')} <a href="/login" className="text-indigo-500">{t('register.login')}</a>
        </p>
      </div>
    </div>
  );
};

export default Register;
