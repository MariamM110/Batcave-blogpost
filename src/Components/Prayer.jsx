import { React, useState, useEffect } from "react";
import { Box, Card, Typography } from "@mui/material";

export default function Prayer() {
  const [prayer, setPrayer] = useState(undefined);

  useEffect(() => {
    const getData = async () => {
      const res = await fetch(
        "https://www.londonprayertimes.com/api/times/?format=json&key=d3eb65ee-0d7f-45de-bd2f-ad89f68a7b4f"
      );
      const json = await res.json();
      setPrayer(json);
      console.log(json);
    };
    getData();
  }, []);

  return (
    <Box sx={{ p: 1, m: 1 }}>
      {prayer ? (
        <Card sx={{ maxWidth: 350, maxHeight: 500 }}>
          <Typography>{prayer.city}</Typography>
        </Card>
      ) : null}
    </Box>
  );
}
