import { useEffect, useRef } from "react";

type RefType = (() => void) | null;

export const useThrottle = (fn: () => void, timeout: number): void => {
  const previousRef = useRef<RefType>(null); // keep track of previous/current function if its changed
  const currentRef = useRef<RefType>(fn);

  if (previousRef.current !== fn) {
    currentRef.current = fn;
  }

  useEffect(() => {
    const handle = setInterval(() => {
      if (currentRef.current) {
        previousRef.current = currentRef.current;
        currentRef.current(); // execute the function
        currentRef.current = null; //set it to null,so no need to execute again
      }
    }, timeout);

    return () => clearInterval(handle);
  }, [timeout]);
};
