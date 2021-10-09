import React, { createContext, useState } from "react";

export const AppContext = createContext({});

const AppProvider:React.FC = ({ children }) => {

  const [store, setStore] = useState({
    results:[]
  });

  return(
    <AppContext.Provider
      value={{
        state: store,
        dispatch: setStore
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export default AppProvider;