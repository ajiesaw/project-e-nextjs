import { useState } from "react";

const Size = () => {
  const [size, setSize] = useState('xs')

  return (
    <div className="py-6">
      <p className="pb-2">Size</p>
        <div className="flex space-x-3">
          <button className={`p-2 bg-gray-100 rounded-md text-sm ${size === 'xs' ? `p-1 border-2 border-gray-400` : ``}`} onClick={()=> setSize('xs')}>XS</button>
          <button className={`p-2 bg-gray-100 rounded-md text-sm ${size === 's' ? `p-1 border-2 border-gray-400` : ``}`} onClick={()=> setSize('s')}>S</button>
          <button className={`p-2 bg-gray-100 rounded-md text-sm ${size === 'm' ? `p-1 border-2 border-gray-400` : ``}`} onClick={()=> setSize('m')}>M</button>
          <button className={`p-2 bg-gray-100 rounded-md text-sm ${size === 'l' ? `p-1 border-2 border-gray-400` : ``}`} onClick={()=> setSize('l')}>L</button>
          <button className={`p-2 bg-gray-100 rounded-md text-sm ${size === 'xl' ? `p-1 border-2 border-gray-400` : ``}`} onClick={()=> setSize('xl')}>XL</button>
        </div>
    </div>
  )
}

export default Size