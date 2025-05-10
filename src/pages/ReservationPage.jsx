import { useState } from 'react'
import Reservation from '../components/Reservation'

const ReservationPage = () => {
  const [faqOpen, setFaqOpen] = useState({})
  
  const toggleFaq = (id) => {
    setFaqOpen(prev => ({
      ...prev,
      [id]: !prev[id]
    }))
  }
  
  const faqs = [
    {
      id: 1,
      question: "Berapa minimal orang untuk reservasi?",
      answer: "Tidak ada minimal orang untuk reservasi, tapi kami menyarankan untuk melakukan reservasi jika Anda datang dalam grup lebih dari 4 orang untuk memastikan kenyamanan Anda."
    },
    {
      id: 2,
      question: "Berapa lama sebelumnya saya harus reservasi?",
      answer: "Untuk memastikan ketersediaan tempat, sebaiknya reservasi dilakukan minimal 1 hari sebelumnya. Namun, kami juga menerima reservasi pada hari yang sama tergantung ketersediaan tempat."
    },
    {
      id: 3,
      question: "Apakah ada biaya untuk reservasi?",
      answer: "Tidak ada biaya untuk melakukan reservasi. Anda hanya perlu membayar makanan dan minuman yang Anda pesan."
    },
    {
      id: 4,
      question: "Apakah bisa request tempat khusus?",
      answer: "Ya, Anda bisa request tempat khusus seperti area outdoor atau indoor, meja dekat jendela, dsb. Kami akan berusaha mengakomodasi permintaan Anda."
    },
    {
      id: 5,
      question: "Berapa lama maksimal reservasi?",
      answer: "Waktu maksimal reservasi adalah 3 jam. Jika Anda membutuhkan waktu lebih lama, silakan informasikan kepada kami saat melakukan reservasi."
    }
  ]
  
  return (
    <main className="min-h-screen">
      <div className="bg-amber-800 py-24 px-6 text-white">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl font-bold mb-6">Reservasi Tempat</h1>
          <p className="max-w-2xl mx-auto text-amber-200">
            Rencanakan kunjungan Anda ke Angkringan Kekinian dengan melakukan reservasi.
            Pastikan Anda mendapatkan tempat terbaik untuk menikmati suasana angkringan yang nyaman.
          </p>
        </div>
      </div>
      
      <Reservation />
      
      <section className="py-16 px-6 bg-amber-50">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold text-center mb-12">FAQ Reservasi</h2>
          
          <div className="space-y-4">
            {faqs.map(faq => (
              <div 
                key={faq.id} 
                className="bg-white rounded-lg shadow-md overflow-hidden"
              >
                <button
                  className="w-full px-6 py-4 text-left font-medium flex justify-between items-center"
                  onClick={() => toggleFaq(faq.id)}
                >
                  <span>{faq.question}</span>
                  <svg 
                    className={`w-5 h-5 transform transition-transform ${faqOpen[faq.id] ? 'rotate-180' : ''}`} 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                
                {faqOpen[faq.id] && (
                  <div className="px-6 py-4 border-t">
                    <p className="text-gray-600">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
      
      <section className="py-16 px-6 bg-white">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold mb-8">Kebijakan Reservasi</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-6 bg-amber-50 rounded-lg">
              <div className="bg-amber-100 w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-4">
                <svg className="w-8 h-8 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Keterlambatan</h3>
              <p className="text-gray-600 text-sm">
                Toleransi keterlambatan adalah 15 menit dari waktu reservasi.
                Setelah itu, reservasi akan dibatalkan dan tempat dapat diberikan ke pengunjung lain.
              </p>
            </div>
            
            <div className="p-6 bg-amber-50 rounded-lg">
              <div className="bg-amber-100 w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-4">
                <svg className="w-8 h-8 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Pembatalan</h3>
              <p className="text-gray-600 text-sm">
                Pembatalan reservasi dapat dilakukan paling lambat 3 jam sebelum waktu reservasi.
                Silakan hubungi kami melalui telepon atau WhatsApp.
              </p>
            </div>
            
            <div className="p-6 bg-amber-50 rounded-lg">
              <div className="bg-amber-100 w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-4">
                <svg className="w-8 h-8 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Jumlah Tamu</h3>
              <p className="text-gray-600 text-sm">
                Jika jumlah tamu yang datang berbeda dengan jumlah saat reservasi,
                harap informasikan kami minimal 1 jam sebelumnya untuk penyesuaian tempat.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default ReservationPage