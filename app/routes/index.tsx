import { useState } from "react";

export default function Index() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <button
        onClick={() => {
          setCount((prev) => {
            console.log(prev);
            // debugger;
            return Math.floor(Math.random() * 10);
          });
        }}
      >
        randomize
      </button>
      <p>{count}</p>
    </div>
  );
}
