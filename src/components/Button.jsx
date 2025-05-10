const Button = ({ children, primary, onClick }) => {
    return (
      <button
        onClick={onClick}
        className={`px-6 py-2 rounded-lg font-medium transition-all duration-300 ${
          primary 
            ? 'bg-[#AD343E] hover:bg-bg-[#942d36] text-white' 
            : 'bg-white text-gray-800 border border-gray-300 hover:bg-gray-100'
        }`}
      >
        {children}
      </button>
    )
  }
  
  export default Button