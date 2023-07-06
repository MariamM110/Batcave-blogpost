import { React, useEffect, useState } from "react";
import {
  Box,
  Card,
  Typography,
  CardMedia,
  Stack,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Skeleton,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

export default function Space() {
  const [space, setSpace] = useState(undefined);

  useEffect(() => {
    const getSpace = async () => {
      const res = await fetch(
        `https://api.nasa.gov/planetary/apod?api_key=${process.env.REACT_APP_SPACE_API_KEY}`
      );
      const json = await res.json();
      setSpace(json);
      console.log(json);
    };
    getSpace();
  }, []);

  return (
    <Box sx={{ p: 1, m: 1 }}>
      {space ? (
        <Card sx={{ maxWidth: 400, maxHeight: 900 }}>
          <Typography
            variant="h5"
            component="div"
            align="center"
            sx={{ fontFamily: "Montserrat", mt: 1 }}
          >
            {space.title}
          </Typography>
          <CardMedia
            component="img"
            height="350"
            image={space.hdurl}
            alt={space.title}
            sx={{ mt: 1, mb: 1 }}
          />
          <Typography
            variant="h6"
            component="div"
            align="center"
            sx={{ fontFamily: "Montserrat", mb: 1 }}
          >
            {space.date}
          </Typography>
          <Accordion>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography
                variant="h6"
                component="div"
                align="center"
                sx={{ fontFamily: "Montserrat" }}
              >
                Description
              </Typography>
            </AccordionSummary>
            <AccordionDetails style={{ overflow: "auto" }}>
              <Stack sx={{ height: "200px", overflowY: "scroll" }}>
                <Typography
                  variant="body1"
                  component="div"
                  sx={{ fontFamily: "Montserrat" }}
                >
                  {space.explanation}
                </Typography>
              </Stack>
            </AccordionDetails>
          </Accordion>
        </Card>
      ) : (
        <Box>
          <Skeleton />
          <Skeleton variant="rectangular" width={350} height={400} />
          <Skeleton width="60%" />
        </Box>
      )}
    </Box>
  );
}
