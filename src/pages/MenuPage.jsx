import { useState } from 'react'
import MenuCard from '../components/MenuCard'

const MenuPage = () => {
  const [activeCategory, setActiveCategory] = useState('Semua')
  
  const menuItems = [
    {
      id: 1,
      name: "Bakso Seafod",
      description: "Berbagai macam aneka seafod yang bisa di goreng dan di bakar",
      price: "2.000",
      category: "Makanan",
      image: "/images/menu-seafod.png"
    },
    {
      id: 2,
      name: "Nasi Goreng",
      description: "Nasi Goreng yang gurih dengan tambahan telor",
      price: "10.000",
      category: "Makanan",
      image: "/images/2.png"
    },
    {
      id: 3,
      name: "Indomie Goreng",
      description: "Mie Goreng yang gurih dengan tambahan telor",
      price: "10.000",
      category: "Makanan",
      image: "/images/3.png"
    },
    {
      id: 4,
      name: "Indomie Rebus",
      description: "Mie Rebus yang segar dengan tambahan telor",
      price: "10.000",
      category: "Makanan",
      image: "/images/4.png"
    },
    {
      id: 5,
      name: "Minuman dengan tambahan susu",
      description: "Berbagai macam pilihan minuman seperti nutrisari,teh tarik dan lainnya enfan tambahan susu",
      price: "8.000",
      category: "Minuman",
      image: "/images/5.png"
    },
    {
      id: 6,
      name: "Es Teh",
      description: "Es Teh yang segar dengan takaran manis yang pas",
      price: "5.000",
      category: "Minuman",
      image: "/images/6.png"
    },
    {
      id: 7,
      name: "Nutrisari",
      description: "Berbagai macam pilihan nutrisari yang segar",
      price: "5.000",
      category: "Minuman",
      image: "/images/7.png"
    },
    {
        id: 8,
        name: "Aneka Gorengan",
        description: "Aneka macam gorengan yang nikmat",
        price: "1.500",
        category: "Makanan",
        image: "/images/8.png"
      }
    ]
    
    const categories = ['Semua', 'Makanan', 'Minuman']
    
    const filteredItems = activeCategory === 'Semua' 
      ? menuItems 
      : menuItems.filter(item => item.category === activeCategory)
    
    return (
      <main className="py-24 px-6 bg-amber-100 min-h-screen">
        <div className="container mx-auto">
          <h1 className="text-4xl font-bold text-center mb-8">Menu Angkringan Kekinian</h1>
          <p className="text-center mb-12 max-w-2xl mx-auto text-gray-700">
            Nikmati berbagai pilihan menu khas angkringan kami yang dibuat dengan bahan berkualitas
            dan resep rahasia. Setiap gigitan menghadirkan cita rasa otentik angkringan dengan sentuhan modern.
          </p>
          
          <div className="flex overflow-x-auto py-4 mb-8 justify-center gap-4">
            {categories.map(category => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-2 rounded-full whitespace-nowrap font-medium transition ${
                  activeCategory === category
                    ? 'bg-amber-600 text-white'
                    : 'bg-white text-amber-800 hover:bg-amber-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {filteredItems.map(item => (
              <MenuCard key={item.id} {...item} />
            ))}
          </div>
        </div>
      </main>
    )
  }
  
  export default MenuPage