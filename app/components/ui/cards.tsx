import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { ReactNode } from "react-resizable-panels/dist/declarations/src/vendor/react";
import OpenAISVG, { BookSVG, QuizletSVG, TickSVG } from "./svg";
import { Typography } from "@mui/material";

export interface CardProps {
  logo: JSX.Element;
  text: string;
}

export const featuresContent = [
  {
    logo: <OpenAISVG />,
    text: "AI-powered Studying",
  },
  { logo: <BookSVG />, text: "Achieve your dream grades in half the time" },
  { logo: <QuizletSVG />, text: "Export to Quizlet instantly" },
];

export default function BasicCard({ logo, text = "" }: CardProps) {
  return (
    <Card
      sx={{
        marginLeft: "20px",
        borderRadius: "16px",
        backgroundColor: "#FEEAEA",
        borderColor: "#00000",
        paddingX: "30px",
      }}
    >
      <CardContent sx={{}}>
        <Box
          sx={{
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
            flexDirection: "column",
            display: "flex",
            gap: "12px",
            minHeight: "130px",
          }}
        >
          {logo}
          <div className="flex-col">{text}</div>
        </Box>
      </CardContent>
    </Card>
  );
}
export function PricingCards() {
  const cardData = [
    { title: "Basic" },
    { title: "Pro", isMiddle: true },
    { title: "Ultimate" },
  ];

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        gap: -30,
      }}
    >
      {cardData.map((card, index) => (
        <PricingCard key={index} {...card} />
      ))}
    </Box>
  );
}

function PricingCard({ title, isMiddle = false }) {
  const features = ["Feature 1", "Feature 1", "Feature 1", "Feature 1"];

  return (
    <Card
      sx={{
        borderRadius: "16px",
        backgroundColor: "#FEEAEA",
        borderColor: "#000000",
        padding: "32px",
        width: isMiddle ? 300 : 280,
        height: isMiddle ? 400 : 380,
        zIndex: isMiddle ? 2 : 1,
        transition: "all 0.3s ease",
        "&:hover": {
          transform: "scale(1.05)",
          boxShadow: 3,
        },
      }}
    >
      <CardContent>
        {isMiddle ? (
          <Box
            sx={{
              backgroundColor: "#121212",
              color: "white",
              borderRadius: "9999px", // This creates the rounded-full effect
              padding: "4px 12px",
              display: "inline-block",
              fontSize: "0.875rem",
              fontWeight: "medium",
              mariginBottom: "20px",
            }}
          >
            Most Popular
          </Box>
        ) : undefined}
        <Typography
          variant="h5"
          component="div"
          gutterBottom
          align="center"
          marginTop={1}
          fontWeight={"bold"}
        >
          {title}
        </Typography>
        <Box sx={{ mt: 2 }}>
          {features.map((feature, index) => (
            <Box
              key={index}
              sx={{ display: "flex", alignItems: "center", mb: 2.5 }}
            >
              <TickSVG />
              <Typography sx={{ ml: 2 }}>{feature}</Typography>
            </Box>
          ))}
        </Box>
      </CardContent>
    </Card>
  );
}
