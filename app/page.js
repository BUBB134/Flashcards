//app/page.js
"use client";

import { ClerkProvider, SignedIn, SignedOut, UserButton } from "@clerk/nextjs"; // Assuming you are using Clerk for auth
import {
  AppBar,
  Box,
  Button,
  Container,
  Grid,
  Toolbar,
  Typography,
} from "@mui/material";
import Head from "next/head"; // Importing Head from next/head
import BasicCard, { featuresContent, PricingCards } from "./components/ui/cards";

// const CLERK_KEY = process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY;

// const handleSubmit = async () => {
//   const checkoutSession = await fetch("/api/checkout_sessions", {
//     method: "POST",
//     headers: { origin: "http://localhost:3000" },
//   });
//   const checkoutSessionJson = await checkoutSession.json();

//   const stripe = await getStripe();
//   const { error } = await stripe.redirectToCheckout({
//     sessionId: checkoutSessionJson.id,
//   });

//   if (error) {
//     console.warn(error.message);
//   }
// };

export default function Home() {
  return (
    <ClerkProvider publishableKey={CLERK_KEY}>
      <Container maxWidth="100vw">
        <Head>
          <title>Flashcards</title>
          <meta name="description" content="Create flashcards from your text" />
        </Head>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6" style={{ flexGrow: 1 }}>
              Flashcard SaaS
            </Typography>
            <SignedOut>
              <Button color="inherit" href="/sign-in">
                Login
              </Button>
              <Button color="inherit" href="/sign-up">
                Sign Up
              </Button>
            </SignedOut>
            <SignedIn>
              <UserButton />
            </SignedIn>
          </Toolbar>
        </AppBar>
        <Box sx={{ textAlign: "center", my: 4 }}>
          <Typography variant="h2" component="h1" gutterBottom>
            Welcome to Flashcard SaaS
          </Typography>
          <Typography variant="h5" component="h2" gutterBottom>
            The easiest way to create flashcards from your text.
          </Typography>
          <Button
            variant="contained"
            color="primary"
            sx={{ mt: 2, mr: 2 }}
            href="/generate"
          >
            Get Started
          </Button>
          <Button variant="outlined" color="primary" sx={{ mt: 2 }}>
            Learn More
          </Button>
        </Box>

        {/* Features Section */}

        <Box
          sx={{ alignItems: "center", textAlign: "center", paddingY: "64px" }}
        >
          <Typography variant="h4" component="h2" gutterBottom>
            Features
          </Typography>

          <Grid
            container
            spacing={4}
            marginTop={4}
            alignItems={"center"}
            justifyContent={"center"}
            gap={8}
          >
            {featuresContent.map((item, index) => (
              <BasicCard {...item} />
            ))}
          </Grid>
        </Box>
        <Box sx={{ my: 6, textAlign: "center" }}>
          <Typography variant="h4" component="h2" gutterBottom>
            Pricing
          </Typography>
          <Grid
            justifyContent="center"
            flexDirection={"row"}
            display={"flex"}
            marginTop={"100px"}
            gap="-20px"
          >
            <PricingCards />
          </Grid>
        </Box>
      </Container>
    </ClerkProvider>
  );
}
