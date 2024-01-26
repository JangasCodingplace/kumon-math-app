import React, { createContext, useState } from 'react';

export const GlobalStateContext = createContext();

export const GlobalStateProvider = ({ children }) => {
  const [globalVariable, setGlobalVariable] = useState('initialValue');
setGlobalVariable("test")
  return (
    <GlobalStateContext.Provider value={{ globalVariable, setGlobalVariable }}>
      {children}
    </GlobalStateContext.Provider>
  );
};