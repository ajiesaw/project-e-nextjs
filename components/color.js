import { useState } from "react";

const Color = () => {
  const [color, setColor] = useState()

  return (
    <div>
      <p className="py-2">Color</p>
        <div className="flex space-x-3">
          <button className={`w-7 h-7 bg-blue-900 rounded-full hover:ring-2 hover:ring-offset-1 hover:ring-gray-400 ${color === 'blue' ? `focus:ring-2 focus:ring-offset-1 ring-gray-400` : ``}`} onClick={()=> setColor('blue')}></button>
          <button className={`w-7 h-7 bg-red-900 rounded-full hover:ring-2 hover:ring-offset-1 hover:ring-gray-400 ${color === 'red' ? `focus:ring-2 focus:ring-offset-1 ring-gray-400` : ``}`} onClick={()=> setColor('red')}></button>
          <button className={`w-7 h-7 bg-green-900 rounded-full hover:ring-2 hover:ring-offset-1 hover:ring-gray-400 ${color === 'green' ? `focus:ring-2 focus:ring-offset-1 ring-gray-400` : ``}`} onClick={()=> setColor('green')}></button>
          <button className={`w-7 h-7 bg-yellow-900 rounded-full hover:ring-2 hover:ring-offset-1 hover:ring-gray-400 ${color === 'yellow' ? `focus:ring-2 focus:ring-offset-1 ring-gray-400` : ``}`} onClick={()=> setColor('yellow')}></button>
          <button className={`w-7 h-7 bg-purple-900 rounded-full hover:ring-2 hover:ring-offset-1 hover:ring-gray-400 ${color === 'purple' ? `focus:ring-2 focus:ring-offset-1 ring-gray-400` : ``}`} onClick={()=> setColor('purple')}></button>
        </div>
    </div>
  )
}

export default Color