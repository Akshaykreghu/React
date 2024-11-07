import React, { useState } from 'react'

function Counter() {
    const [showCount, setShowCount] = useState(false);
    const [counter, setCounter] = useState(0);
  return (
    <div>
        <button onClick={()=> setShowCount(!showCount)}>{!showCount?"Show Content":"Hide Content"}</button>
        <h1>Counter App </h1>
        {showCount && <div>
            <h2>Counter Show Open</h2>
            <p>Counter is {counter}</p>
            <div>
            <button style={{marginRight:'10px'}} onClick={()=>setCounter(counter+1)}>Increment</button>
            <button onClick={()=>setCounter((counter > 0)? (counter-1):0)}>Decrement</button>
            </div>
        </div>}
    </div>
  )
}

export default Counter