const MenuCard = ({ image, name, description, price, category }) => {
    return (
      <div className="bg-amber-50 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all">
        <div className="h-48 overflow-hidden">
          <img 
            src={image || "/api/placeholder/400/300"} 
            alt={name}
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
          />
        </div>
        <div className="p-4">
          <span className="inline-block px-3 py-1 text-xs font-semibold bg-amber-100 text-amber-700 rounded-full mb-2">
            {category}
          </span>
          <h3 className="text-xl font-semibold mb-2">{name}</h3>
          <p className="text-gray-600 mb-3 text-sm">{description}</p>
          <div className="flex justify-between items-center">
            <span className="text-amber-600 font-bold">Rp {price}</span>
            {/* <button className="bg-lime-500 hover:bg-lime-600 text-white px-3 py-1 rounded-lg text-sm">
              Pesan
            </button> */}
          </div>
        </div>
      </div>
    )
  }
  
  export default MenuCard