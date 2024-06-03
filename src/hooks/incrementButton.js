import React, { useState } from 'react';

const IncrementButton = () => {
  const [count, setCount] = useState(0);

  return (
    <div className='scroll-section'>
      <button onClick={() => setCount(count + 1)}>
        You clicked me {count} times
      </button>
    </div>
  );
}

export default IncrementButton;