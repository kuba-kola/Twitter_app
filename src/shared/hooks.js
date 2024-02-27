import { useEffect, useState } from "react";

export function useDebounce(value, delay) {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const delayedUpdate = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(delayedUpdate);
    };
  }, [value, delay]);

  return debouncedValue;
};

export const useOutsideClick = (ref, onClick) => {
  useEffect(() => {
    const handleClickOutside = (event) => {
      const isClickingOutside = ref.current && !ref.current.contains(event.target);

      if (isClickingOutside) {
        onClick();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref])
};