//app/sign-in/page.js
import { ClerkProvider, SignIn } from '@clerk/nextjs'
import { AppBar, Box, Button, Container, Toolbar, Typography } from '@mui/material'
import Link from 'next/link'
const CLERK_KEY = process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY
export default function SignInPage() {
    return (
        <Container maxWidth="100vw">
            <AppBar position="static" sx={{ backgroundColor: '#3f51b5' }}>
                <Toolbar>
                    <Typography variant="h6" sx={{ flexGrow: 1 }}>
                        Flashcard SaaS
                    </Typography>
                    <Button color="inherit">
                        <Link href="/login" passHref>
                            Login
                        </Link>
                    </Button>
                </Toolbar>
            </AppBar>
            <Box
                display="flex"
                flexDirection="column"
                justifyContent="center"
                alignItems="center"
                sx={{ textAlign: 'center', my: 4 }}
            >
                <Typography variant="h4" component="h1" gutterBottom>
                    Sign In
                </Typography>
                <ClerkProvider publishableKey={CLERK_KEY}>
                <SignIn />
                </ClerkProvider>
            </Box>
        </Container>
    )
}