import { createContext, useContext } from "react";

export const ThemeContext = createContext(null);

export const useMode = () => {
  return useContext(ThemeContext);
};
