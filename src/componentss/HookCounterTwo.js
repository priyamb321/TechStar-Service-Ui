import React, { useState } from "react";
//rfce
function HookCounterTwo() {
  const initialCount = 0;
  const [count, setCount] = useState(initialCount);
  const incrementFive = () => {
    for (let i = 0; i < 5; i++) {
      //here not access to prev STate-----so use prevState
      //   setCount(count+1)
      setCount((prevCount) => prevCount + 1);
    }
  };
  return (
    <div>
      <h2>Count:{count}</h2>
      <button onClick={() => setCount(initialCount)}>Reset</button>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount((prevCount) => prevCount + 1)}>
        Increment Value
      </button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
      <button onClick={incrementFive}>Increment By 5</button>
    </div>
  );
}

export default HookCounterTwo;
