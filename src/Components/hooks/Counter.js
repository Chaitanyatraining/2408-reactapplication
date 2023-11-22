import React, {useState} from 'react'

 const Counter = () => {
  const [count, setCount] = useState(0)

  const handleIncrement = () => {
    setCount(count + 1)
  }
  const handleDecrement = () => {
    setCount(count - 1)
  }
  
  return (
    <center>
      <h2>Counter App</h2>
      <h2>Count : {count}</h2>
      <button className='btn btn-primary me-2' onClick={handleIncrement}>Increment</button>
      <button className='btn btn-danger' onClick={handleDecrement}>Decrement</button>
    </center>
  )
}

export default Counter
