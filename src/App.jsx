import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Chat from "./pages/Chat";
import PrivateRoute from "./components/PrivateRoute";
import LandingPage from "./pages/LandingPage";
import { Box } from "@chakra-ui/react";

const theme = extendTheme({
  styles: {
    global: {
      "html, body": {
        bg: "#14001f",
        color: "#ffe9f9",
      },
      body: {
        backgroundImage:
          "radial-gradient(circle at 15% 20%, rgba(255, 0, 170, 0.28), transparent 35%), radial-gradient(circle at 85% 10%, rgba(0, 224, 255, 0.22), transparent 30%), linear-gradient(135deg, #14001f 0%, #25003a 45%,rgb(9, 0, 47) 100%)",
        backgroundAttachment: "fixed",
      },
      a: {
        color: "#7ce7ff",
      },
    },
  },
});

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Box minH="100vh">
        <Router>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route
              path="/chat"
              element={
                <PrivateRoute>
                  <Chat />
                </PrivateRoute>
              }
            />
          </Routes>
        </Router>
      </Box>
    </ChakraProvider>
  );
}

export default App;
