import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import Button from './Button'

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false)
  
  useEffect(() => {
    // Simple animation on component mount
    setIsVisible(true)
  }, [])

  return (
    <div className="relative h-screen bg-cover bg-center" style={{ backgroundImage: "url('/images/bg-hero.png')" }}>
      {/* Subtle overlay for better text readability */}
      <div className="absolute inset-0 bg-black/20"></div>
      
      {/* Content container */}
      <div className="container mx-auto relative z-10 h-full flex flex-col justify-center items-center text-center px-4">
        <div className={`max-w-2xl transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif text-white mb-4">
            Best food for<br />your taste
          </h1>
          
          <p className="text-white text-lg mb-10">
            Discover delectable cuisine and unforgettable moments<br />
            in our welcoming, culinary haven
          </p>
          
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/reservation">
              <button className="px-6 py-3 bg-red-700 text-white rounded-full hover:bg-red-800 transition-colors">
                Book A Table
              </button>
            </Link>
            <Link to="/menu">
              <button className="px-6 py-3 bg-white text-gray-800 rounded-full border border-gray-300 hover:bg-gray-100 transition-colors">
                Explore Menu
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero