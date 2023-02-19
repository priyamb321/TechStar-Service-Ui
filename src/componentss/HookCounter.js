// import React, { useState } from "react";
// //rfce
// function HookCounter() {
//   const [count, setCount] = useState(0); ///value,method for updatingg
//   //const [count, setCount] = useState(0);
//   return (
//     <div>
//       <button onClick={() => setCount(count + 1)}>CounterHook{count}</button>
//     </div>
//   );
// }

// export default HookCounter;
import React, { useState } from "react";
function HookCounter() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <button onClick={() => setCount(count + 1)}>CounterHook{count}</button>
    </div>
  );
}
export default HookCounter;
