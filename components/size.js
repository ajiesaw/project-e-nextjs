import { useState } from "react";

const Size = () => {
  const [size, setSize] = useState()

  return (
    <div>
      <p className="py-2">Size</p>
        <div className="flex space-x-3">
          <button className={`w-7 h-7 bg-gray-100 rounded-md text-sm hover:ring-2 hover:ring-offset-1 hover:ring-gray-400 ${size === '5L' ? `focus:ring-2 focus:ring-offset-1 ring-gray-400` : ``}`} onClick={()=> setSize('5L')}>5L</button>
          <button className={`w-7 h-7 bg-gray-100 rounded-md text-sm hover:ring-2 hover:ring-offset-1 hover:ring-gray-400 ${size === '8L' ? `focus:ring-2 focus:ring-offset-1 ring-gray-400` : ``}`} onClick={()=> setSize('8L')}>8L</button>
          <button className={`w-7 h-7 bg-gray-100 rounded-md text-sm hover:ring-2 hover:ring-offset-1 hover:ring-gray-400 ${size === '10L' ? `focus:ring-2 focus:ring-offset-1 ring-gray-400` : ``}`} onClick={()=> setSize('10L')}>10L</button>
          <button className={`w-7 h-7 bg-gray-100 rounded-md text-sm hover:ring-2 hover:ring-offset-1 hover:ring-gray-400 ${size === '13L' ? `focus:ring-2 focus:ring-offset-1 ring-gray-400` : ``}`} onClick={()=> setSize('13L')}>13L</button>
          <button className={`w-7 h-7 bg-gray-100 rounded-md text-sm hover:ring-2 hover:ring-offset-1 hover:ring-gray-400 ${size === '15L' ? `focus:ring-2 focus:ring-offset-1 ring-gray-400` : ``}`} onClick={()=> setSize('15L')}>15L</button>
        </div>
    </div>
  )
}

export default Size