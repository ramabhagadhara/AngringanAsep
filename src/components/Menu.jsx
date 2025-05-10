import { useState } from 'react'
import MenuCard from './MenuCard'

const Menu = () => {
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
      name: "Nutrisari",
      description: "Berbagai macam pilihan nutrisari yang segar",
      price: "5.000",
      category: "Minuman",
      image: "/images/7.png"
    },
    {
        id: 6,
        name: "Aneka Gorengan",
        description: "Aneka macam gorengan yang nikmat",
        price: "1.500",
        category: "Makanan",
        image: "/images/8.png"
      }
    ]
  
  const categories = ['Semua', 'Makanan','Minuman']
  
  const filteredItems = activeCategory === 'Semua' 
    ? menuItems 
    : menuItems.filter(item => item.category === activeCategory)
  
  return (
    <section className="py-16 px-6" style={{ backgroundColor: '#E2D392' }}>
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Menu Favorit Kami</h2>
        
        <div className="flex overflow-x-auto py-4 mb-8 justify-center gap-4">
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 rounded-full whitespace-nowrap ${
                activeCategory === category
                  ? 'bg-amber-600 text-white'
                  : 'bg-white text-amber-800 hover:bg-amber-200'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map(item => (
            <MenuCard key={item.id} {...item} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Menu