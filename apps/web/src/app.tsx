import { Button } from '@projector/kit';
import { useState } from 'react';

export function App() {
  const [count, setCount] = useState<number>(0);

  const increaseCount = () => setCount((c) => c + 1);
  const decreaseCount = () => setCount((c) => c - 1);

  return (
    <>
      <h1>Hello, World!</h1>
      <span>Count: {count}</span>
      <Button onClick={increaseCount}>Click to +</Button>
      <Button onClick={decreaseCount}>Click to -</Button>
    </>
  );
}
