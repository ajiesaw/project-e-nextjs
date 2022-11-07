import { useState } from "react";

const Material = () => {
  const [material, setMaterial] = useState('gold')

  return (
    <div className="py-6">
      <p className="pb-2">Material</p>
        <div className="flex space-x-3">
          <button className={`p-2 bg-gray-100 rounded-md text-sm ${material === 'gold' ? `p-1 border-2 border-gray-400` : ``}`} onClick={()=> setMaterial('gold')}>Gold</button>
          <button className={`p-2 bg-gray-100 rounded-md text-sm ${material === 'silver' ? `p-1 border-2 border-gray-400` : ``}`} onClick={()=> setMaterial('silver')}>Silver</button>
        </div>
    </div>
  )
}

export default Material