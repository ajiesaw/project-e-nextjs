import { useState } from "react";

const Capacity = () => {
  const [capa, setCapa] = useState()

  return (
    <div className="py-6">
      <p className="pb-2">Storage Capacity</p>
        <div className="flex space-x-3">
          <button className={`p-2 bg-gray-100 rounded-md text-sm hover:ring-2 hover:ring-offset-1 hover:ring-gray-400 ${capa === '256' ? `focus:ring-2 focus:ring-offset-1 ring-gray-400` : ``}`} onClick={()=> setCapa('256')}>256GB</button>
          <button className={`p-2 bg-gray-100 rounded-md text-sm hover:ring-2 hover:ring-offset-1 hover:ring-gray-400 ${capa === '512' ? `focus:ring-2 focus:ring-offset-1 ring-gray-400` : ``}`} onClick={()=> setCapa('512')}>512GB</button>
          <button className={`p-2 bg-gray-100 rounded-md text-sm hover:ring-2 hover:ring-offset-1 hover:ring-gray-400 ${capa === '1024' ? `focus:ring-2 focus:ring-offset-1 ring-gray-400` : ``}`} onClick={()=> setCapa('1024')}>1TB</button>
          <button className={`p-2 bg-gray-100 rounded-md text-sm hover:ring-2 hover:ring-offset-1 hover:ring-gray-400 ${capa === '2048' ? `focus:ring-2 focus:ring-offset-1 ring-gray-400` : ``}`} onClick={()=> setCapa('2048')}>2TB</button>
        </div>
    </div>
  )
}

export default Capacity