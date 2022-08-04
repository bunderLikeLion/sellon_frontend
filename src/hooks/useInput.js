import { useState, useCallback } from 'react';

const useInput = (initialValue = null) => {
  const [value, setValue] = useState(initialValue);
  const handler = useCallback((e) => {
    setValue(e.target.value);
  }, []);
  const reset = useCallback(() => {
    setValue('');
  }, []);
  return [value, handler, reset, setValue];
};

export default useInput;
