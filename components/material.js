import { useState } from "react";

const Material = () => {
  const [material, setMaterial] = useState()

  return (
    <div className="py-6">
      <p className="pb-2">Material</p>
        <div className="flex space-x-3">
          <button className={`p-2 bg-gray-100 rounded-md text-sm hover:ring-2 hover:ring-offset-1 hover:ring-gray-400 ${material === 'Gold' ? `focus:ring-2 focus:ring-offset-1 ring-gray-400` : ``}`} onClick={()=> setMaterial('Gold')}>Gold</button>
          <button className={`p-2 bg-gray-100 rounded-md text-sm hover:ring-2 hover:ring-offset-1 hover:ring-gray-400 ${material === 'Silver' ? `focus:ring-2 focus:ring-offset-1 ring-gray-400` : ``}`} onClick={()=> setMaterial('Silver')}>Silver</button>
        </div>
    </div>
  )
}

export default Material