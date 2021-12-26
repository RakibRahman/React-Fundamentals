import { useEffect } from "react";
interface Props {
  fn: () => void;
  timeout: number;
}
export const useDebounce = (fn: () => void, timeout: number): void => {
  useEffect(() => {
    const handleDebounce = setTimeout(fn, timeout);
    return () => clearTimeout(handleDebounce);
  }, [fn, timeout]);
};
