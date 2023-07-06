import { React, useEffect, useState, useMemo } from "react";
import {
  Box,
  Card,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Stack,
  Skeleton,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

export default function Quote() {
  const [riddle, setRiddle] = useState(undefined);

  const getMemoisedData = useMemo(async () => {
    const res = await fetch("https://api.api-ninjas.com/v1/riddles", {
      method: "GET",
      headers: { "X-Api-Key": process.env.REACT_APP_QUOTES_API_KEY },
      contentType: "application/json",
    });
    const json = await res.json();
    setRiddle(json[0]);
    console.log(json[0]);
    return json;
  }, []);

  useEffect(() => {
    async function fetchData() {
      const riddleData = await getMemoisedData;
      console.log("Riddle:", riddleData);
    }
    fetchData();
  }, [getMemoisedData]);

  return (
    <Box sx={{ p: 1, m: 1 }}>
      {riddle ? (
        <Card sx={{ maxWidth: 350, maxHeight: 150, overflow: "auto" }}>
          <Typography
            variant="h5"
            component="div"
            align="center"
            sx={{ fontFamily: "Montserrat", mt: 1, mb: 1 }}
          >
            {riddle.title}
          </Typography>
          <Accordion>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography sx={{ fontFamily: "Montserrat" }}>
                {riddle.question}
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Stack>
                <Typography sx={{ fontFamily: "Montserrat" }}>
                  {riddle.answer}
                </Typography>
              </Stack>
            </AccordionDetails>
          </Accordion>
        </Card>
      ) : (
        <Skeleton variant="rectangular" width={350} height={250} />
      )}
    </Box>
  );
}
