import { useLayoutEffect, useRef, MutableRefObject } from "react";
export const useIsMounted = (): Readonly<MutableRefObject<boolean>> => {
  const isMounted = useRef(false);

  useLayoutEffect(() => {
    isMounted.current = true;

    return () => {
      isMounted.current = false;
    };
  }, []);

  return isMounted;
};

// useRef() to maintain state
