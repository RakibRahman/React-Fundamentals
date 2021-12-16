/* eslint-disable react-hooks/rules-of-hooks */
import React, { ReactElement, useEffect, useRef, useState } from "react";

export function Counter(): ReactElement {
  const [counter, setCounter] = useState(0);
  const btnRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    setTimeout(() => {
      console.log("button focused");
      btnRef.current?.focus();
    }, 1100);
  }, []);
  //   for (let index = 0; index < counter; index++) {
  //     useState(true);
  //   }

  //   if (counter % 2 === 0) {
  //     useRef(true);
  //   } else {
  //     useState(true);
  //   }

  return (
    <div>
      <div>Count: {counter}</div>
      <div>
        <button ref={btnRef} onClick={() => setCounter(counter + 1)}>
          Increment
        </button>
      </div>
    </div>
  );
}
