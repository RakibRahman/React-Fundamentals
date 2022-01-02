import { useEffect, useRef } from "react";

export const useWillUnmount = (fn: () => void): void => {
  const functionRef = useRef(fn);
  functionRef.current = fn;

  useEffect(() => {
    console.log("unmounted");
    return () => functionRef.current();
  }, []);
};

//save changes when unmounting
