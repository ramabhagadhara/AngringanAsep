const LocationPage = () => {
    return (
      <main className="py-24 px-6 bg-amber-50 min-h-screen">
        <div className="container mx-auto">
          <h1 className="text-4xl font-bold text-center mb-8">Lokasi Kami</h1>
          <p className="text-center mb-12 max-w-2xl mx-auto text-gray-700">
            Angkringan Kekinian berlokasi strategis di pusat kota, mudah diakses, dan menawarkan suasana yang nyaman.
            Ayo kunjungi kami dan rasakan pengalaman nongkrong yang berbeda!
          </p>
          
          <div className="bg-white rounded-lg overflow-hidden shadow-xl mb-12">
            <div className="h-96 bg-gray-200">
              {/* Placeholder for map */}
              <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.682651225823!2d101.42161467455449!3d0.47250107456891877!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31d5a9691a90cdcd%3A0xc3914f3e6ecd84b!2sAngkringan%20Asep!5e0!3m2!1sid!2sid!4v1745577477712!5m2!1sid!2sid"
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen="" 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Lokasi Angkringan Asep"
                  className="w-full h-full"
                ></iframe>
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h2 className="text-2xl font-bold mb-6 text-amber-800">Informasi Lokasi</h2>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-amber-100 p-3 rounded-full mr-4">
                    <svg className="w-6 h-6 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-medium text-lg">Alamat</h3>
                    <p className="text-gray-600">Jl. Majalengka, Sidomulyo Tim., Kec. Marpoyan Damai, Kota Pekanbaru, Riau 28289</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-amber-100 p-3 rounded-full mr-4">
                    <svg className="w-6 h-6 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-medium text-lg">Jam Operasional</h3>
                    <div className="text-gray-600">
                      <p>Senin - Sabtu: 17.00 - 01.00</p>
                      <p>Minggu       : Libur</p>
                    </div>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-amber-100 p-3 rounded-full mr-4">
                    <svg className="w-6 h-6 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-medium text-lg">Kontak</h3>
                    <p className="text-gray-600">Telepon: +62 821-7310-3500</p>
                    <p className="text-gray-600">Email: adityaoktrisyaputra@gmail.com</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-amber-100 p-3 rounded-full mr-4">
                    <svg className="w-6 h-6 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-medium text-lg">Fasilitas</h3>
                    <ul className="text-gray-600 list-disc list-inside">
                      <li>Wi-Fi Gratis</li>
                      <li>Parkir Motor & Mobil</li>
                      <li>Toilet Bersih</li>
                      <li>Area Indoor & Outdoor</li>
                      <li>Stop Kontak di Setiap Meja</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            
            {/* <div>
              <div className="bg-white p-8 rounded-lg shadow-lg mb-8">
                <h2 className="text-2xl font-bold mb-6 text-amber-800">Petunjuk Arah</h2>
                <div className="space-y-4">
                  <div>
                    <h3 className="font-medium text-lg">Dari Stasiun Tugu</h3>
                    <p className="text-gray-600">Jalan kaki 10 menit ke arah selatan, atau naik becak/ojek online dengan jarak tempuh 5 menit.</p>
                  </div>
                  <div>
                    <h3 className="font-medium text-lg">Dari Malioboro Mall</h3>
                    <p className="text-gray-600">Jalan kaki 5 menit ke arah timur, tepat di seberang toko souvenir Jogja.</p>
                  </div>
                  <div>
                    <h3 className="font-medium text-lg">Dari Alun-alun Selatan</h3>
                    <p className="text-gray-600">Naik transportasi umum atau ojek online dengan jarak tempuh sekitar 15 menit.</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <h2 className="text-2xl font-bold mb-6 text-amber-800">Area Sekitar</h2>
                <div className="space-y-4">
                  <div>
                    <h3 className="font-medium text-lg">Tempat Wisata Terdekat</h3>
                    <ul className="text-gray-600 list-disc list-inside">
                      <li>Malioboro (1 menit)</li>
                      <li>Keraton Yogyakarta (10 menit)</li>
                      <li>Taman Sari (15 menit)</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-medium text-lg">Hotel Terdekat</h3>
                    <ul className="text-gray-600 list-disc list-inside">
                      <li>Hotel Malioboro Inn (3 menit)</li>
                      <li>Hotel Ibis Malioboro (5 menit)</li>
                      <li>Hotel Grand Aston (7 menit)</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </main>
    )
  }
  
  export default LocationPage