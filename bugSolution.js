```javascript
//File: bugSolution.js
import { useState } from 'react';

function MyComponent() {
  const [count, setCount] = useState(0);

  const incrementCount = () => {
    setCount(prevCount => prevCount + 1); // Use functional update
  };

  return (
    <div className="p-4">
      <p className="text-xl font-bold">Count: {count}</p>
      <button onClick={incrementCount} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        Increment
      </button>
    </div>
  );
}

export default MyComponent;
```