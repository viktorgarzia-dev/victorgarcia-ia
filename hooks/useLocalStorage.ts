import { Dispatch, SetStateAction, useEffect, useRef, useState } from 'react';

function readValue<T>(key: string, initial: T): T {
  if (typeof window === 'undefined') return initial;
  try {
    const raw = window.localStorage.getItem(key);
    return raw ? (JSON.parse(raw) as T) : initial;
  } catch {
    return initial;
  }
}

export function useLocalStorage<T>(
  key: string,
  initial: T
): [T, Dispatch<SetStateAction<T>>, boolean] {
  const [value, setValue] = useState<T>(() => readValue(key, initial));
  const [quotaExceeded, setQuotaExceeded] = useState(false);
  const firstRender = useRef(true);

  useEffect(() => {
    if (firstRender.current) {
      firstRender.current = false;
      return;
    }
    try {
      window.localStorage.setItem(key, JSON.stringify(value));
      setQuotaExceeded(false);
    } catch {
      setQuotaExceeded(true);
    }
  }, [key, value]);

  return [value, setValue, quotaExceeded];
}
