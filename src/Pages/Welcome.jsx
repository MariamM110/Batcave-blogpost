import Space from "../Components/Space";
import Middle from "../Components/Middle";
import { Box } from "@mui/system";

export default function Welcome() {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        p: 1,
        m: 1,
        bgcolor: "background.paper",
        borderRadius: 1,
      }}
    >
      <Space />
      <Middle />
    </Box>
  );
}
