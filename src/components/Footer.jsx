import React from 'react'

function Footer() {
  return (
    <div className="bg-gray-800 text-white py-8">
    <div className="max-w-6xl mx-auto px-4 text-center">
      <p className="mb-4">© 2024 Your Psychology Consultation. All rights reserved.</p>
      <div className="flex justify-center space-x-4">
        <a href="#" className="hover:text-gray-400">Privacy Policy</a>
        <a href="#" className="hover:text-gray-400">Terms of Service</a>
        <a href="#" className="hover:text-gray-400">Contact Us</a>
      </div>
    </div>
  </div>
  )
}

export default Footer