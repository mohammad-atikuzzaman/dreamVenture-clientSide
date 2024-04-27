import { createContext, useState } from "react";

export const Mycontext = createContext(null);

const ContextElement = ({ children }) => {
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "light"
  );



  const contexts = { theme, setTheme };
  return (<Mycontext.Provider value={contexts}>{children}</Mycontext.Provider>);
};

export default ContextElement;
