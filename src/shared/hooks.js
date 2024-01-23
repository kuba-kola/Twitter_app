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
}