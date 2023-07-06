import { forwardRef, useMemo } from "react";
import { Button } from "@mui/material";
import { useMode } from "../../Context/modeContext";

const ModeButton = forwardRef(({ ...props }, ref) => {
  return <Button ref={ref} {...props}></Button>;
});

ModeButton.displayName = "ModeButton";

export const DarkModeButton = useMemo(() => {
  const { toggleDarkMode, isDarkMode } = useMode();

  return <ModeButton onClick={toggleDarkMode}></ModeButton>;
});
