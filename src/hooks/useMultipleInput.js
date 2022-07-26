import { useState, useCallback } from 'react';

const useMultipleInput = (initialValue = null) => {
  const [inputs, setInputs] = useState(initialValue);
  const handler = useCallback((e) => {
    const { value, name } = e.target;
    setInputs({
      ...inputs,
      [name]: value,
    });
  }, []);
  return [inputs, handler, setInputs];
};

export default useMultipleInput;
