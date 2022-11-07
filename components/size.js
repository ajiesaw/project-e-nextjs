import { useState } from "react";

const Size = () => {
  const [size, setSize] = useState()

  return (
    <div className="py-6">
      <p className="pb-2">Size</p>
        <div className="flex space-x-3">
          <button className={`p-2 bg-gray-100 rounded-md text-sm hover:ring-2 hover:ring-offset-1 hover:ring-gray-400 ${size === 'XS' ? `focus:ring-2 focus:ring-offset-1 ring-gray-400` : ``}`} onClick={()=> setSize('XS')}>XS</button>
          <button className={`p-2 bg-gray-100 rounded-md text-sm hover:ring-2 hover:ring-offset-1 hover:ring-gray-400 ${size === 'S' ? `focus:ring-2 focus:ring-offset-1 ring-gray-400` : ``}`} onClick={()=> setSize('S')}>S</button>
          <button className={`p-2 bg-gray-100 rounded-md text-sm hover:ring-2 hover:ring-offset-1 hover:ring-gray-400 ${size === 'M' ? `focus:ring-2 focus:ring-offset-1 ring-gray-400` : ``}`} onClick={()=> setSize('M')}>M</button>
          <button className={`p-2 bg-gray-100 rounded-md text-sm hover:ring-2 hover:ring-offset-1 hover:ring-gray-400 ${size === 'L' ? `focus:ring-2 focus:ring-offset-1 ring-gray-400` : ``}`} onClick={()=> setSize('L')}>L</button>
          <button className={`p-2 bg-gray-100 rounded-md text-sm hover:ring-2 hover:ring-offset-1 hover:ring-gray-400 ${size === 'XL' ? `focus:ring-2 focus:ring-offset-1 ring-gray-400` : ``}`} onClick={()=> setSize('XL')}>XL</button>
        </div>
    </div>
  )
}

export default Size