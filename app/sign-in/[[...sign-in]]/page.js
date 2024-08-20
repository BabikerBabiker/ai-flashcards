"use client";
import { SignIn } from "@clerk/nextjs";
import {
  AppBar,
  Box,
  Button,
  Container,
  Link,
  Toolbar,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { styled } from "@mui/material/styles";

const StyledAppBar = styled(AppBar)(({ theme }) => ({
  backgroundColor: "#000000",
  color: "#ffffff",
  position: "fixed",
  width: "100%",
  zIndex: 1201, 
  [theme.breakpoints.down("sm")]: {
    padding: "0 10px",
  },
}));

const StyledContainer = styled(Container)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  height: "100vh", 
  width: "100vw", 
  backgroundColor: "#081414",
  textAlign: "center",
  padding: "0 20px",
  [theme.breakpoints.down("sm")]: {
    padding: "0 10px",
  },
}));

const Footer = styled(Box)({
  backgroundColor: "#000000",
  color: "#ffffff",
  padding: "20px 0",
  textAlign: "center",
  marginTop: "auto",
});

const StyledTypography = styled(Typography)(({ theme }) => ({
  fontWeight: "bold",
  marginBottom: "20px",
  color: "#ffffff",
  [theme.breakpoints.down("sm")]: {
    fontSize: "1.5rem",
    marginBottom: "15px",
  },
}));

const StyledLink = styled(Link)({
  color: "#ffffff",
  textDecoration: "none",
  "&:hover": {
    textDecoration: "underline",
  },
});

export default function SignInPage() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Box sx={{ backgroundColor: "#081414" }}>
      <StyledAppBar position="static">
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            CardCrush
          </Typography>
          <Button color="inherit">
            <StyledLink href="/sign-in" passHref>
              Login
            </StyledLink>
          </Button>
          <Button color="inherit">
            <StyledLink href="/sign-up" passHref>
              Sign Up
            </StyledLink>
          </Button>
        </Toolbar>
      </StyledAppBar>

      <StyledContainer maxWidth="lg">
        <Box sx={{ mt: 7 }}>
          <SignIn />
        </Box>
      </StyledContainer>
      
      <Footer sx={{pb:5, pt: 5, pr: 2, pl: 2}}r>
        <Typography variant="body2">
          © CardCrush 2024. All rights reserved.
        </Typography>
        <Typography variant="caption">
          Disclaimer: While we strive for accuracy, flashcards generated by AI may contain errors. Please review the content for accuracy before use.
        </Typography>
      </Footer>
    </Box>
  );
}