import { useState } from "react";

const Layer = () => {
  const [layer, setLayer] = useState()

  return (
    <div className="py-6">
      <p className="pb-2">Layer Color</p>
        <div className="flex space-x-3">
          <button className={`w-7 h-7 bg-amber-300 rounded-full hover:ring-2 hover:ring-offset-1 hover:ring-gray-400 ${layer === 'gold' ? `focus:ring-2 focus:ring-offset-1 ring-gray-400` : ``}`} onClick={()=> setLayer('gold')}></button>
          <button className={`w-7 h-7 bg-gray-200 rounded-full hover:ring-2 hover:ring-offset-1 hover:ring-gray-400 ${layer === 'silver' ? `focus:ring-2 focus:ring-offset-1 ring-gray-400` : ``}`} onClick={()=> setLayer('silver')}></button>
          <button className={`w-7 h-7 bg-rose-200 rounded-full hover:ring-2 hover:ring-offset-1 hover:ring-gray-400 ${layer === 'rose gold' ? `focus:ring-2 focus:ring-offset-1 ring-gray-400` : ``}`} onClick={()=> setLayer('rose gold')}></button>
        </div>
    </div>
  )
}

export default Layer