import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import OpenAISVG from "./svg";

const bull = (
  <Box
    component="span"
    sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
  >
    •
  </Box>
);

export default function BasicCard() {
  return (
    <Card
      className="flex flex-row border2"
      sx={{
        marginLeft: "20px",
        borderRadius: "16px",
        backgroundColor: "#FEEAEA",
        borderColor: "#00000",
      }}
    >
      <CardContent sx={{}}>
        <Box
          sx={{
            alignItems: "center",
            justifyContent: "start",
            textAlign: "center",
            flexDirection: "row",
            display: "flex",
            gap: "30px",
          }}
        >
          <div className="rounded-lg"></div>
          <OpenAISVG />
          <div className="">
            <p> Study up to 3x as fast </p>
            <p> Study up to 3x as fast </p>
            <p> Study up to 3x as fast </p>
          </div>
        </Box>
      </CardContent>
    </Card>
  );
}
