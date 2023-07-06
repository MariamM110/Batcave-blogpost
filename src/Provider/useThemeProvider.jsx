import { useState, useMemo } from "react";
import { ThemeContext } from "../Context/modeContext";

export const ThemeProviderMode = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const value = useMemo(
    () => ({
      isDarkMode,
      toggleDarkMode: () => {
        setIsDarkMode((current) => !current);
      },
    }),
    [isDarkMode]
  );
  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
};
