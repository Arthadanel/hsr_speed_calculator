import { useEffect, useState } from "react";

export function LocalStorageState(key, initial, getter, setter) {// Set initial value
  const storage_data = localStorage.getItem(key);
  let data;
  
  if (storage_data) {
    data = getter(storage_data);
  }  else {
    data = initial;
  };
  const state_value = data;
  const [state, setState] = useState(state_value);
  

  useEffect(() => {
    const state_str = setter(state); // Stringified state
    localStorage.setItem(key, state_str) // Set stringified state as item in localStorage
  }, [state]);

  return [state, setState];
}