import React from 'react'
import Hero from '../components/Hero'
import News from '../components/News'
import Footer from '../components/Footer'
import Floatingbutton from '../components/Floatingbutton'
import HowItWorks from '../components/HowItWorks'


function Home() {
  return (
    <>
    
    <Hero />
    <div className="py-12 bg-gray-100">
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
          <h3 className="text-2xl font-semibold mb-4 text-purple-600">Individual Therapy</h3>
          <p>Personalized therapy sessions to help you overcome challenges and achieve your goals.</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
          <h3 className="text-2xl font-semibold mb-4 text-green-600">Couples Therapy</h3>
          <p>Work together with your partner to strengthen your relationship and communication.</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
          <h3 className="text-2xl font-semibold mb-4 text-blue-600">Group Therapy</h3>
          <p>Join group sessions for shared experiences and mutual support in a safe environment.</p>
        </div>
      </div>
    </div>
    <HowItWorks />
  
 <Floatingbutton/>
   {/*  <div className="py-12 bg-white">
      <h2 className="text-4xl font-bold text-center mb-8 text-gray-800">Latest News & Articles</h2>
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="bg-gray-100 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
          <h3 className="text-2xl font-semibold mb-4 text-blue-600">Understanding Anxiety</h3>
          <p>Learn more about the causes and treatments for anxiety.</p>
          <a href="#" className="text-blue-600 mt-4 inline-block">Read More</a>
        </div>
        <div className="bg-gray-100 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
          <h3 className="text-2xl font-semibold mb-4 text-green-600">Managing Stress</h3>
          <p>Effective strategies to cope with stress in daily life.</p>
          <a href="#" className="text-green-600 mt-4 inline-block">Read More</a>
        </div>
        <div className="bg-gray-100 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
          <h3 className="text-2xl font-semibold mb-4 text-purple-600">Building Resilience</h3>
          <p>Tips on how to build resilience and bounce back from challenges.</p>
          <a href="#" className="text-purple-600 mt-4 inline-block">Read More</a>
        </div>
      </div>
    </div> */}
    <News />
  
    <div className="bg-green-500 text-center py-8">
            <h1 className="text-3xl font-bold text-white">Join our newsletter to keep up to date with us!</h1>
            <div className="flex justify-center mt-4">
                <input type="email" className="px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-600 w-full md:w-3/4 lg:w-1/2" placeholder="Enter your email" />
                <button className="bg-white hover:bg-gray-200 text-green-500 font-bold py-2 px-4 rounded-md ml-2">Subscribe</button>
            </div>
        </div>
    

    <Footer />

 
    
    </>
  )
}

export default Home