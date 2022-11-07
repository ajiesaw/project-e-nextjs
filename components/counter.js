import React, { useState } from "react";
  
const Counter = () => {
  const [counter, setCounter] = useState(1)
  
  const handleClick1 = () => {
    setCounter(counter + 1)
  }
  
  const handleClick2 = () => {
    if (counter !=0)
    setCounter(counter - 1)
  }
  
  return (
    <div className="w-32">
      <div className="flex justify-between rounded-md border-2">
        <button
          className="w-10 h-14 hover:bg-gray-100 rounded-md text-sm"
          onClick={handleClick2}>
            -
        </button>
        <p className="pt-4">{counter}</p>
        <button
          className="w-10 h-14 hover:bg-gray-100 rounded-md text-sm"
          onClick={handleClick1}>
            +
        </button>
      </div>
    </div>
  )
}
  
export default Counter