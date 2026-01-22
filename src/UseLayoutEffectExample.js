import React, { useState, useLayoutEffect, useEffect } from 'react';

const UseLayoutEffectExample = () => {
  const [value, setValue] = useState(0);

  // This effect runs synchronously after a render but before the screen is updated.
  useLayoutEffect(() => {
    // This console.log will appear before the useEffect log
    console.log('useLayoutEffect: Runs before the browser paints');
    // For demonstration, let's simulate a delay to see the blocking nature.
    // In a real scenario, you would do something that needs to be synchronous with the DOM update.
    if (value === 1) {
        const now = performance.now();
        while(performance.now() - now < 300) {
            // blocking delay for 300ms
        }
    }
  }, [value]);

  // This effect runs asynchronously after the browser has painted the changes.
  useEffect(() => {
    console.log('useEffect: Runs after the browser paints');
  }, [value]);

  return (
    <div>
      <h2>useLayoutEffect vs useEffect Example</h2>
      <p>Value: {value}</p>
      <button onClick={() => setValue(value + 1)}>
        Increment Value
      </button>
      <div id="effect-div" style={{ marginTop: '20px', padding: '10px', border: '1px solid black' }}>
        I am the element affected by the layout effect.
      </div>
      <p>
        Open your browser's console to see the order of logs from `useEffect` and `useLayoutEffect`.
        When you click the button, `useLayoutEffect` will block the browser from painting for a short moment,
        demonstrating its synchronous nature.
      </p>
    </div>
  );
};

export default UseLayoutEffectExample;
