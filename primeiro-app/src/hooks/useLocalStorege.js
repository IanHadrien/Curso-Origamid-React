import { useEffect, useState } from 'react'

export const useLocalStorege = (key, inicial) => {
  const [state, setState] = useState(() => {
    const local = window.localStorage.getItem(key);
    return local ? local : inicial;
  });

  useEffect(() => {
    window.localStorage.setItem(key, state);
  }, [key, state]);


  return [state, setState];
}
