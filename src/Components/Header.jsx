import * as React from "react";
import { AppBar, Box, Toolbar, Typography, IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

export default function Header() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="static"
        sx={{
          display: "flex",
          justifyContent: "center",
          width: "100%",
          bgcolor: "#B9646A",
        }}
      >
        <Toolbar variant="dense">
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h2"
            color="inherit"
            component="div"
            textAlign="center"
          >
            Mariam's Batcavee
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
