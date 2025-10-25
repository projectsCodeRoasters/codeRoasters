import { Box } from "@chakra-ui/react";
import Header from "./components/Header";
import Main from "./components/Main";
import PWABadge from "./PWABadge";
import Footer from "./components/Footer";
import LiquidEther from "./components/Background";

function App() {
  return (
    <>
      <Box minHeight={"100vh"} p={4} position="relative" bg="bg.foam">
        <Box
          position="absolute"
          top={0}
          left={0}
          right={0}
          bottom={0}
          zIndex={0}
        >
          <LiquidEther
            colors={["#29ff42", "#470000", "#4d0f0f"]}
            mouseForce={20}
            cursorSize={100}
            isViscous={false}
            viscous={30}
            iterationsViscous={32}
            iterationsPoisson={32}
            resolution={0.5}
            isBounce={false}
            autoDemo={true}
            autoSpeed={0.5}
            autoIntensity={2.2}
            takeoverDuration={0.25}
            autoResumeDelay={3000}
            autoRampDuration={0.6}
          />
        </Box>
        <Box position="relative" zIndex={1}>
          <Header />
          <Main />
          <Footer />
        </Box>
      </Box>
      <PWABadge />
    </>
  );
}

export default App;
