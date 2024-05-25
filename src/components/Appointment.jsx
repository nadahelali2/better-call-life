import React from 'react'
import Navbar from './Navbar'
import AppointmentScheduler from './AppointmentScheduler'
import { useTranslation } from 'react-i18next'

function Appointment() {
  const { t } = useTranslation()
  return (
    <>
    
      <h2 className="text-4xl font-bold text-center mb-8 text-gray-800 mt-12">{t('app')}</h2>
      <div className='max-w-6xl mx-auto px-4'>
        <AppointmentScheduler />
      </div>
        
    </>
  )
}

export default Appointment