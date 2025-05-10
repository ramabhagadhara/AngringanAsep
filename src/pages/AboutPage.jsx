import React from 'react';
import { Link } from 'react-router-dom';

const AboutPage = () => {
  return (
    <div className="bg-white">
      {/* Section 1: Hero with Food Image and Text */}
      <section className="relative" style={{ backgroundColor: '#E2D392' }}>
        <div className="container mx-auto px-6 py-16">
          <div className="flex flex-col md:flex-row items-center">
            {/* Left side - Image */}
            <div className="w-full md:w-1/2 mb-10 md:mb-0">
              <div className="relative">
                <img 
                  src="/images/about.png" 
                  alt="Makanan Angkringan" 
                  className="rounded-lg shadow-md w-full"
                />
              </div>
            </div>
            
            {/* Right side - Text */}
            <div className="w-full md:w-1/2 md:pl-12">
              <h2 className="text-3xl font-serif font-semibold mb-4 text-gray-800">
                We provide healthy<br />food for your family
              </h2>
              <p className="text-gray-700 mb-6">
                Di Angkringan Asep, kami berkomitmen untuk menyajikan makanan tradisional 
                yang lezat dan sehat. Semua bahan yang kami gunakan dipilih dengan hati-hati 
                untuk memastikan kualitas terbaik.
              </p>
              
              {/* Feature boxes */}
              <div className="bg-white p-4 rounded-lg shadow-md mb-4">
                <div className="flex items-start">
                  <div className="bg-gray-200 p-2 rounded-full mr-3">
                    <svg className="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800">Kualitas Terjamin</h3>
                    <p className="text-gray-600 text-sm">
                      Kami hanya menggunakan bahan-bahan berkualitas tinggi dan segar setiap hari.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="bg-white p-4 rounded-lg shadow-md mb-4">
                <div className="flex items-start">
                  <div className="bg-gray-200 p-2 rounded-full mr-3">
                    <svg className="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800">Penyajian Cepat</h3>
                    <p className="text-gray-600 text-sm">
                      Nikmati hidangan lezat kami tanpa perlu menunggu lama.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="bg-white p-4 rounded-lg shadow-md">
                <div className="flex items-start">
                  <div className="bg-gray-200 p-2 rounded-full mr-3">
                    <svg className="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800">Suasana Nyaman</h3>
                    <p className="text-gray-600 text-sm">
                      Tempat yang nyaman untuk bersantai dan menikmati makanan bersama keluarga.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Images with tagline */}
      <section className="bg-gray-900 text-white py-16">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center">
            {/* Left side - Text */}
            <div className="w-full md:w-1/2 mb-10 md:mb-0">
              <h2 className="text-4xl font-serif font-bold mb-6">
                Angkringan sejak 2015<br />
                dengan kualitas terbaik
              </h2>
              <p className="text-gray-300 mb-6">
                Perjalanan kami dimulai lebih dari 8 tahun yang lalu dengan visi sederhana: 
                menghadirkan cita rasa angkringan tradisional dengan kualitas premium. 
                Kami telah berdedikasi untuk menyempurnakan setiap resep dan layanan kami.
              </p>
              <Link to="/menu">
                <button 
                  className="bg-white text-gray-900 hover:bg-gray-200 px-6 py-3 rounded-full font-medium transition-colors"
                >
                  Lihat Menu Kami
                </button>
              </Link>
            </div>
            
            {/* Right side - Images */}
            <div className="w-full md:w-1/2 md:pl-12">
              <div className="grid grid-cols-1 gap-6">
                <img 
                  src="/images/about2.png" 
                  alt="Suasana Angkringan" 
                  className="rounded-lg shadow-md w-full"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Features */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-amber-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Buka Setiap Hari</h3>
              <p className="text-gray-600">
                Kami melayani pelanggan setiap hari dari jam 16.00 hingga 01.00 WIB.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-amber-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Tempat Nyaman</h3>
              <p className="text-gray-600">
                Kami menyediakan tempat yang nyaman dengan suasana yang hangat.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-amber-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Pelayanan Ramah</h3>
              <p className="text-gray-600">
                Staff kami siap melayani Anda dengan senyuman dan keramahan.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: Stats */}
      <section className="py-16" style={{ backgroundColor: '#E2D392' }}>
        <div className="container mx-auto px-6">
          <h2 className="text-2xl font-serif font-semibold mb-12 text-center text-gray-800">
            A little information<br />for our valuable guest
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Stat 1 */}
            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <h3 className="text-4xl font-bold text-gray-800 mb-2">150+</h3>
              <p className="text-gray-600">Menu Items</p>
            </div>
            
            {/* Stat 2 */}
            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <h3 className="text-4xl font-bold text-gray-800 mb-2">85+</h3>
              <p className="text-gray-600">Daily Customers</p>
            </div>
            
            {/* Stat 3 */}
            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <h3 className="text-4xl font-bold text-gray-800 mb-2">100%</h3>
              <p className="text-gray-600">Satisfaction</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;