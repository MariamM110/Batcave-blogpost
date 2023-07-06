import { React, useState, useEffect } from "react";
import { Box, Card, Typography } from "@mui/material";

export default function Prayer() {
  const [prayer, setPrayer] = useState(undefined);

  useEffect(() => {
    const getData = async () => {
      const res = await fetch(
        `https://www.londonprayertimes.com/api/times/?format=json&key=${process.env.REACT_APP_PRAYER_API_KEY}`
      );
      const json = await res.json();
      setPrayer(json);
    };
    getData();
  }, []);

  console.log(prayer);

  const styles = {
    card: {
      maxWidth: 350,
      maxHeight: 500,
    },
    title: {
      fontSize: "25px",
      alignSelf: "center",
    },
  };

  return (
    <Box sx={{ p: 1, m: 1 }}>
      <Card sx={styles.card}>
        <Typography sx={styles.title}>{prayer?.city} prayer times</Typography>
        <Typography>Fajr: {prayer?.fajr}</Typography>
        <Typography>Sunrise: {prayer?.sunrise}</Typography>
        <Typography>Dhuhr prayers: {prayer?.dhuhr}</Typography>
        <Typography>Maghrib prayers: {prayer?.magrib}</Typography>
      </Card>
    </Box>
  );
}
