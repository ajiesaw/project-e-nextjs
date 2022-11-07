import { useState } from "react";

const Capacity = () => {
  const [capa, setCapa] = useState('256')

  return (
    <div className="py-6">
      <p className="pb-2">Storage Capacity</p>
        <div className="flex space-x-3">
          <button className={`p-2 bg-gray-100 rounded-md text-sm ${capa === '256' ? `p-1 border-2 border-gray-400` : ``}`} onClick={()=> setCapa('256')}>256GB</button>
          <button className={`p-2 bg-gray-100 rounded-md text-sm ${capa === '512' ? `p-1 border-2 border-gray-400` : ``}`} onClick={()=> setCapa('512')}>512GB</button>
          <button className={`p-2 bg-gray-100 rounded-md text-sm ${capa === '1024' ? `p-1 border-2 border-gray-400` : ``}`} onClick={()=> setCapa('1024')}>1TB</button>
          <button className={`p-2 bg-gray-100 rounded-md text-sm ${capa === '2048' ? `p-1 border-2 border-gray-400` : ``}`} onClick={()=> setCapa('2048')}>2TB</button>
        </div>
    </div>
  )
}

export default Capacity