import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Phone,Mail } from 'lucide-react'


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  
  return (
    <>
      <div className="text-white py-2" style={{ backgroundColor: '#0B1D31' }}>
  {/* Versi Mobile: Tampilan baris dengan ikon yang lebih rapi */}
  <div className="container mx-auto px-4">
    {/* Kontak info untuk mobile - lebih rapi dengan ikon sejajar */}
    <div className="flex flex-col space-y-1 sm:hidden">
      <div className="flex items-center justify-center">
        <Phone className="w-3 h-3 mr-1" />
        <span className="text-xs">082173103500</span>
        <span className="mx-2 text-xs">|</span>
        <Mail className="w-3 h-3 mr-1" />
        <span className="text-xs">adityaoktrisyaputra@gmail.com</span>
      </div>
      
      {/* Social media icons dalam baris tunggal untuk mobile */}
      <div className="flex justify-center space-x-5 pt-1">
        <a href="https://twitter.com" className="hover:text-gray-300">
          <svg className="w-3 h-3" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
            <path d="M22 4.01c-1 .49-1.98.689-3 .99-1.121-1.265-2.783-1.335-4.38-.737S11.977 6.323 12 8v1c-3.245.083-6.135-1.395-8-4 0 0-4.182 7.433 4 11-1.872 1.247-3.739 2.088-6 2 3.308 1.803 6.913 2.423 10.034 1.517 3.58-1.04 6.522-3.723 7.651-7.742a13.84 13.84 0 0 0 .497-3.753c0-.249 1.51-2.772 1.818-4.013z"/>
          </svg>
        </a>
        <a href="https://facebook.com" className="hover:text-gray-300">
          <svg className="w-3 h-3" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
            <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
          </svg>
        </a>
        <a href="https://instagram.com" className="hover:text-gray-300">
          <svg className="w-3 h-3" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
          </svg>
        </a>
      </div>
    </div>
    
    {/* Versi Desktop: Tampilan normal */}
    <div className="hidden sm:flex sm:justify-between sm:items-center">
      <div className="flex items-center">
        <Phone className="w-4 h-4 mr-2" />
        <span>082173103500</span>
        <span className="mx-2">•</span>
        <Mail className="w-4 h-4 mr-2"/>
        <span>adityaoktrisyaputra@gmail.com</span>
      </div>
      <div className="flex gap-4">
        <a href="https://twitter.com" className="hover:text-gray-300">
          <svg className="w-4 h-4" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
            <path d="M22 4.01c-1 .49-1.98.689-3 .99-1.121-1.265-2.783-1.335-4.38-.737S11.977 6.323 12 8v1c-3.245.083-6.135-1.395-8-4 0 0-4.182 7.433 4 11-1.872 1.247-3.739 2.088-6 2 3.308 1.803 6.913 2.423 10.034 1.517 3.58-1.04 6.522-3.723 7.651-7.742a13.84 13.84 0 0 0 .497-3.753c0-.249 1.51-2.772 1.818-4.013z"/>
          </svg>
        </a>
        <a href="https://facebook.com" className="hover:text-gray-300">
          <svg className="w-4 h-4" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
            <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
          </svg>
        </a>
        <a href="https://instagram.com" className="hover:text-gray-300">
          <svg className="w-4 h-4" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
          </svg>
        </a>
      </div>
    </div>
  </div>
</div>
      
      {/* Main Navbar */}
      <nav className="sticky top-0 z-50" style={{ backgroundColor: '#E2D392' }}>
        <div className="container mx-auto flex justify-between items-center py-3 px-6">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <div className="w-10 h-10 bg-gray-900 rounded-full flex items-center justify-center mr-3">
              <img src="/images/logo.png" alt="Logo" className="w-8 h-8 rounded-full" />
            </div>
            <span className="text-xl font-serif text-gray-900">ANGKRINGAN ASEP</span>
          </Link>
          
          {/* Mobile menu button */}
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-gray-900 focus:outline-none"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center">
            <div className="flex space-x-8 mr-6">
              <Link to="/" className="text-gray-900 hover:text-gray-700 transition font-medium">Home</Link>
              <Link to="/about" className="text-gray-900 hover:text-gray-700 transition font-medium">About</Link>
              <Link to="/menu" className="text-gray-900 hover:text-gray-700 transition font-medium">Menu</Link>
              <Link to="/location" className="text-gray-900 hover:text-gray-700 transition font-medium">Lokasi</Link>
            </div>
            <Link to="/reservation">
              <button className="px-4 py-2 bg-amber-100 text-gray-900 border border-amber-700 rounded-full hover:bg-amber-200 transition">
                Book A Table
              </button>
            </Link>
          </div>
        </div>
        
        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-3 px-6" style={{ backgroundColor: '#E2D392' }}>
            <div className="flex flex-col space-y-3">
              <Link to="/" className="text-gray-900 hover:text-gray-700 transition" onClick={() => setIsOpen(false)}>Home</Link>
              <Link to="/about" className="text-gray-900 hover:text-gray-700 transition" onClick={() => setIsOpen(false)}>About</Link>
              <Link to="/menu" className="text-gray-900 hover:text-gray-700 transition" onClick={() => setIsOpen(false)}>Menu</Link>
              <Link to="/location" className="text-gray-900 hover:text-gray-700 transition" onClick={() => setIsOpen(false)}>Lokasi</Link>
              <div className="pt-2">
                <Link to="/reservation" onClick={() => setIsOpen(false)}>
                  <button className="px-4 py-2 bg-amber-100 text-gray-900 border border-amber-700 rounded-full hover:bg-amber-200 transition">
                    Book A Table
                  </button>
                </Link>
              </div>
            </div>
          </div>
        )}
      </nav>
    </>
  )
}

export default Navbar