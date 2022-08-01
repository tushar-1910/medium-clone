import React, { createContext, useState } from "react";

export const Contexts = createContext();

export const ContextsProvider = ({ children }) => {
    const [showBag, setShowBag] = useState(false);
const handleshowBag=()=>{
    setShowBag(!showBag)
}
  return (
    <Contexts.Provider value={{showBag,handleshowBag}}>
      {children}
    </Contexts.Provider>
  );
};