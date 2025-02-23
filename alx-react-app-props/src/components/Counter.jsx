import { useState } from "react";

function Counter() {
  // Initialize state for count
  const [count, setCount] = useState(0);

  return (
    <div>
      <h2>Counter App</h2>
      <p>Current Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
      <button onClick={() => setCount(0)}>Reset</button>
    </div>
  );
}

export default Counter;
