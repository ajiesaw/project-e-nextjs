import { useState } from "react";

const Color = () => {
  const [color, setColor] = useState('blue')

  return (
    <div className="py-6">
      <p className="pb-2">Color</p>
        <div className="flex space-x-3">
          <button className={`w-7 h-7 bg-blue-900 rounded-full ${color === 'blue' ? `p-1 border-2 border-gray-400` : ``}`} onClick={()=> setColor('blue')}></button>
          <button className={`w-7 h-7 bg-red-900 rounded-full ${color === 'red' ? `p-1 border-2 border-gray-400` : ``}`} onClick={()=> setColor('red')}></button>
          <button className={`w-7 h-7 bg-green-900 rounded-full ${color === 'green' ? `p-1 border-2 border-gray-400` : ``}`} onClick={()=> setColor('green')}></button>
          <button className={`w-7 h-7 bg-yellow-900 rounded-full ${color === 'yellow' ? `p-1 border-2 border-gray-400` : ``}`} onClick={()=> setColor('yellow')}></button>
          <button className={`w-7 h-7 bg-purple-900 rounded-full ${color === 'purple' ? `p-1 border-2 border-gray-400` : ``}`} onClick={()=> setColor('purple')}></button>
        </div>
    </div>
  )
}

export default Color