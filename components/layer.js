import { useState } from "react";

const Layer = () => {
  const [layer, setLayer] = useState('gold')

  return (
    <div className="py-6">
      <p className="pb-2">Layer Color</p>
        <div className="flex space-x-3">
          <button className={`w-7 h-7 bg-amber-300 rounded-full ${layer === 'gold' ? `p-1 border-2 border-gray-400` : ``}`} onClick={()=> setLayer('gold')}></button>
          <button className={`w-7 h-7 bg-gray-200 rounded-full ${layer === 'silver' ? `p-1 border-2 border-gray-400` : ``}`} onClick={()=> setLayer('silver')}></button>
          <button className={`w-7 h-7 bg-rose-200 rounded-full ${layer === 'rose gold' ? `p-1 border-2 border-gray-400` : ``}`} onClick={()=> setLayer('rose gold')}></button>
        </div>
    </div>
  )
}

export default Layer