import { useState } from 'react'
import Button from './Button'

const Reservation = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    date: '',
    time: '',
    guests: '',
    notes: ''
  })
  
  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }
  
  const handleSubmit = (e) => {
    e.preventDefault()
    
    // Format tanggal ke format Indonesia (DD/MM/YYYY)
    const formatDate = (dateString) => {
      if (!dateString) return '';
      const date = new Date(dateString);
      return `${date.getDate().toString().padStart(2, '0')}/${(date.getMonth() + 1).toString().padStart(2, '0')}/${date.getFullYear()}`;
    }
    
    // Siapkan pesan WhatsApp
    const message = `*RESERVASI ANGKRINGAN KEKINIAN*
    
Nama: ${formData.name}
No. HP: ${formData.phone}
Tanggal: ${formatDate(formData.date)}
Jam: ${formData.time}
Jumlah Orang: ${formData.guests}
Catatan: ${formData.notes || '-'}

Terima kasih telah melakukan reservasi!`;

    // Encode pesan untuk URL WhatsApp
    const encodedMessage = encodeURIComponent(message);
    
    // Ganti dengan nomor WhatsApp Anda (format: kode negara tanpa + atau 0)
    const whatsappNumber = '6287820231973'; // Ganti dengan nomor WA Anda
    
    // Buka WhatsApp dengan pesan terisi
    window.open(`https://wa.me/${whatsappNumber}?text=${encodedMessage}`, '_blank');
    
    // Reset form setelah submit
    setFormData({
      name: '',
      phone: '',
      date: '',
      time: '',
      guests: '',
      notes: ''
    })
  }
  
  return (
    <section className="py-16 px-6 text-zinc-950" style={{ backgroundColor: '#E2D392' }}>
      <div className="container mx-auto">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8">Reservasi Tempat</h2>
          <p className="text-center mb-12 text-zinc-950">
            Ingin nongkrong bareng teman tanpa khawatir tidak kebagian tempat? Reservasi sekarang!
          </p>
          
          <form onSubmit={handleSubmit} className="bg-white rounded-lg p-6 shadow-xl text-gray-800">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block mb-2 font-medium">Nama Lengkap</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="phone" className="block mb-2 font-medium">Nomor HP</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="date" className="block mb-2 font-medium">Tanggal</label>
                <input
                  type="date"
                  id="date"
                  name="date"
                  value={formData.date}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="time" className="block mb-2 font-medium">Jam</label>
                <input
                  type="time"
                  id="time"
                  name="time"
                  value={formData.time}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="guests" className="block mb-2 font-medium">Jumlah Orang</label>
                <select
                  id="guests"
                  name="guests"
                  value={formData.guests}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
                  required
                >
                  <option value="">Pilih jumlah</option>
                  <option value="1-2">1-2 orang</option>
                  <option value="3-5">3-5 orang</option>
                  <option value="6-10">6-10 orang</option>
                  <option value="11+">Lebih dari 10 orang</option>
                </select>
              </div>
              
              <div className="md:col-span-2">
                <label htmlFor="notes" className="block mb-2 font-medium">Catatan Tambahan</label>
                <textarea
                  id="notes"
                  name="notes"
                  value={formData.notes}
                  onChange={handleChange}
                  rows="4"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
                ></textarea>
              </div>
            </div>
            
            <div className="mt-8 text-center">
              <Button primary>Kirim Reservasi via WhatsApp</Button>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Reservation