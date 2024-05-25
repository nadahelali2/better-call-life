import { CheckCircleIcon } from '@heroicons/react/20/solid'
import { ArrowLeftCircleIcon, CheckBadgeIcon } from '@heroicons/react/24/outline'
import React from 'react'

function AppointmentNotification({date, name, phone ,toggle}) {
  return (
    <div className="bg-gray-100 rounded-lg shadow-md p-4 ">
        <ArrowLeftCircleIcon className="w-8 h-8 text-gray-500 mb-3" onClick={()=>toggle()}/>

       <div className='flex justify mt-4 '>
       <CheckCircleIcon className="w-8 h-8 text-green-500 " />
        <h3 className="text-lg font-medium text-gray-800 ">You are scheduled</h3>
       </div>
     {/*    <p className="text-gray-600">A calendar invitation has been sent to your email address.</p>
        <div className="flex justify-between items-center mt-4">
        <span className="text-gray-800 font-medium">Open Invitation</span>
        <button className="text-blue-500 font-medium underline">See Details</button>
        </div> */}
        <hr className="my-4 border-gray-200" />
        <div className="flex justify-between items-center">
        <div>
            <p className="text-gray-800 font-medium">{phone}</p>
            <p className="text-gray-600">{name}</p>
        </div>
        <div className="text-gray-600">
            <p>{date}</p>
            <p>Morocco Time</p>
            <p>{phone}</p>
        </div>
        </div>
    </div>
  )
}

export default AppointmentNotification