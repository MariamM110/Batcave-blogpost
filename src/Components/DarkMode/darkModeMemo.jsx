import { useMode } from "../../Context/modeContext";
import React, { useMemo } from "react";

export const darkModeButton = useMemo(() => {
  const { toggleDarkMode, isDarkMode } = useMode();

  return <ModeButton onClick={toggleDarkMode}></ModeButton>;
});
