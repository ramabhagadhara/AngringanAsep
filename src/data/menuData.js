// Data Menu
const popularMenus = [
    {
      name: 'Sate Angkringan Premium',
      price: 'Rp 25.000',
      description: 'Sate ayam premium dengan bumbu rahasia dan sambal kacang spesial',
      rating: 5
    },
    {
      name: 'Es Kopi Susu Aren',
      price: 'Rp 18.000',
      description: 'Kopi susu dengan gula aren asli dan espresso single origin',
      rating: 4
    },
    {
      name: 'Nasi Kucing Komplit',
      price: 'Rp 15.000',
      description: 'Nasi dengan lauk ayam suwir, telur, dan sambal bawang',
      rating: 5
    }
  ];
  
  const menuItems = [
    {
      category: 'food',
      name: 'Sate Angkringan Premium',
      price: 'Rp 25.000',
      description: 'Sate ayam premium dengan bumbu rahasia dan sambal kacang spesial',
      isSpicy: true
    },
    {
      category: 'food',
      name: 'Nasi Kucing Komplit',
      price: 'Rp 15.000',
      description: 'Nasi dengan lauk ayam suwir, telur, dan sambal bawang',
      isSpicy: true
    },
    {
      category: 'food',
      name: 'Tahu Walik',
      price: 'Rp 12.000',
      description: 'Tahu yang dibalik dan diisi dengan adonan bakso dan rempah',
      isSpicy: false
    },
    {
      category: 'food',
      name: 'Tempe Mendoan',
      price: 'Rp 10.000',
      description: 'Tempe tipis dibalut tepung dengan rempah khas, digoreng setengah matang',
      isSpicy: false
    },
    {
      category: 'food',
      name: 'Sego Babat',
      price: 'Rp 22.000',
      description: 'Nasi dengan babat sapi yang direbus dengan rempah khusus dan ditumis pedas',
      isSpicy: true
    },
    {
      category: 'food',
      name: 'Gorengan Mix (5 pcs)',
      price: 'Rp 15.000',
      description: 'Campuran gorengan: tahu isi, tempe, bakwan, pisang, dan ubi',
      isSpicy: false
    },
    {
      category: 'beverage',
      name: 'Es Kopi Susu Aren',
      price: 'Rp 18.000',
      description: 'Kopi susu dengan gula aren asli dan espresso single origin'
    },
    {
      category: 'beverage',
      name: 'Wedang Uwuh',
      price: 'Rp 12.000',
      description: 'Minuman tradisional dengan rempah-rempah pilihan dan kayu secang'
    },
    {
      category: 'beverage',
      name: 'Es Jeruk Peras',
      price: 'Rp 10.000',
      description: 'Jeruk segar diperas langsung dengan es batu dan gula sesuai selera'
    },
    {
      category: 'beverage',
      name: 'Teh Tarik',
      price: 'Rp 12.000',
      description: 'Teh susu yang ditarik untuk menciptakan tekstur busa yang lembut'
    },
    {
      category: 'beverage',
      name: 'Es Cincau',
      price: 'Rp 10.000',
      description: 'Minuman segar dengan cincau hitam, sirup, dan susu'
    },
    {
      category: 'beverage',
      name: 'Kopi Hitam',
      price: 'Rp 8.000',
      description: 'Kopi tubruk tradisional dengan biji kopi pilihan'
    },
    {
      category: 'package',
      name: 'Paket Angkringan Hemat',
      price: 'Rp 35.000',
      description: 'Paket hemat untuk 1 orang dengan menu lengkap',
      includes: ['Nasi Kucing', 'Sate (2 tusuk)', 'Tahu/Tempe', 'Es Teh']
    },
    {
      category: 'package',
      name: 'Paket Angkringan Spesial',
      price: 'Rp 55.000',
      description: 'Paket spesial untuk 1 orang dengan menu premium',
      includes: ['Nasi Kucing Komplit', 'Sate Premium (3 tusuk)', 'Tahu Walik', 'Es Kopi Susu Aren']
    },
    {
      category: 'package',
      name: 'Paket Angkringan Grup',
      price: 'Rp 150.000',
      description: 'Paket untuk 4 orang dengan variasi menu lengkap',
      includes: ['4 Nasi Kucing', 'Sate (8 tusuk)', 'Tahu & Tempe', 'Gorengan Mix', '4 Minuman Pilihan']
    }
  ];
  
  const facilities = [
    {
      name: 'WiFi Gratis',
      icon: <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-400"><path d="M5 12.55a11 11 0 0 1 14.08 0"></path><path d="M1.42 9a16 16 0 0 1 21.16 0"></path><path d="M8.53 16.11a6 6 0 0 1 6.95 0"></path><line x1="12" y1="20" x2="12.01" y2="20"></line></svg>
    },
    {
      name: 'Colokan Listrik',
      icon: <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-yellow-400"><path d="M14.5 2v10h-5V2h5z"></path><path d="M9.5 12H4.5a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h15a2 2 0 0 0 2-2v-6a2 2 0 0 0-2-2h-5"></path></svg>
    },
    {
      name: 'Spot Foto',
      icon: <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-pink-400"><circle cx="12" cy="12" r="3"></circle><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path></svg>
    },
    {
      name: 'Parkir Luas',
      icon: <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-green-400"><rect x="2" y="4" width="20" height="16" rx="2" ry="2"></rect><path d="M8 10v4"></path><path d="M8 12h4"></path><path d="M16 10v.01"></path><path d="M16 14v.01"></path></svg>
    }
  ];