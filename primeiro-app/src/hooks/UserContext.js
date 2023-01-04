import React, { useState } from 'react'

export const UserContext = React.createContext();

export const ContextStorege = ({children}) => {
  const [dados, setDados] = useState('');

  return <UserContext.Provider value={{dados, setDados}}>
    {children}
  </UserContext.Provider>
};
