import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  VStack,
  Text,
  useToast,
} from "@chakra-ui/react";
import { Link, useNavigate } from "react-router-dom";
import { FiLogIn } from "react-icons/fi";
import { useState } from "react";
import axios from "axios";
import apiURL from "../../utils";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const toast = useToast();
  //Navigate
  const navigate = useNavigate();
  //main logic for login
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const { data } = await axios.post(`${apiURL}/api/users/login`, {
        email,
        password,
      });
      console.log(data.user);

      //save the token into localstorage
      localStorage.setItem("userInfo", JSON.stringify(data.user));
      navigate("/chat");
    } catch (error) {
      console.log(error);

      toast({
        title: "Error",
        description: error.response.data.message || "An error occurred",
        status: "error",
        duration: 5000,
        isClosable: true,
      });
    }
    setLoading(false);
  };
  return (
    <Box
      w="100%"
      minH="100dvh"
      display="flex"
      alignItems="center"
      justifyContent="center"
      px={4}
      py={{ base: 6, md: 10 }}
      overflowY="auto"
      bgGradient="linear(140deg, #12001f 0%, #25003b 45%, #08253d 100%)"
    >
      <Box
        display="flex"
        flexDirection={{ base: "column", lg: "row" }}
        w={["95%", "90%", "80%", "75%"]}
        maxW="1100px"
        minH={{ md: "640px" }}
        borderRadius="28px"
        overflow="visible"
        boxShadow="0 30px 70px rgba(0,0,0,0.45)"
        border="1px solid"
        borderColor="whiteAlpha.300"
        bg="blackAlpha.200"
        backdropFilter="blur(10px)"
      >
        {/* Left Panel - Hidden on mobile */}
        <Box
          display={{ base: "none", lg: "flex" }}
          w={{ lg: "50%" }}
          bgImage="url('https://images.unsplash.com/photo-1517248135467-4c7edcad34c4')"
          bgSize="cover"
          bgPosition="center"
          position="relative"
        >
          <Box
            position="absolute"
            top="0"
            left="0"
            right="0"
            bottom="0"
            bg="blackAlpha.700"
            display="flex"
            flexDirection="column"
            justifyContent="center"
            p={10}
            color="white"
          >
            <Text fontSize="4xl" fontWeight="extrabold" mb={4}>
              Welcome Back
            </Text>
            <Text fontSize="lg" maxW="400px" color="whiteAlpha.900">
              Jump back into your rooms and continue real-time conversations.
            </Text>
          </Box>
        </Box>

        {/* Right Panel - Login Form */}
        <Box
          w={{ base: "100%", lg: "50%" }}
          bg="rgba(10, 19, 38, 0.88)"
          p={[6, 8, 10]}
          display="flex"
          flexDirection="column"
          justifyContent={{ base: "flex-start", md: "center" }}
        >
          <Box display={["block", "block", "none"]} textAlign="center" mb={6}>
            <Box
              as={FiLogIn}
              mx="auto"
              fontSize="3rem"
              color="cyan.300"
              mb={2}
            />
            <Text fontSize="2xl" fontWeight="bold" color="white">
              Welcome Back
            </Text>
          </Box>

          <VStack spacing={6} w="100%" maxW="400px" mx="auto">
            <Text fontSize="3xl" fontWeight="extrabold" color="white" alignSelf="start">
              Sign In
            </Text>
            <FormControl id="email" isRequired>
              <FormLabel color="whiteAlpha.900" fontWeight="medium">
                Email
              </FormLabel>
              <Input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                size="lg"
                bg="whiteAlpha.200"
                borderColor="whiteAlpha.300"
                color="white"
                _placeholder={{ color: "whiteAlpha.700" }}
                _hover={{ borderColor: "cyan.300" }}
                _focus={{ borderColor: "cyan.300", boxShadow: "0 0 0 1px #67e8f9" }}
              />
            </FormControl>

            <FormControl id="password" isRequired>
              <FormLabel color="whiteAlpha.900" fontWeight="medium">
                Password
              </FormLabel>
              <Input
                type="password"
                placeholder="Enter your password"
                size="lg"
                bg="whiteAlpha.200"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                borderColor="whiteAlpha.300"
                color="white"
                _placeholder={{ color: "whiteAlpha.700" }}
                _hover={{ borderColor: "cyan.300" }}
                _focus={{ borderColor: "cyan.300", boxShadow: "0 0 0 1px #67e8f9" }}
              />
            </FormControl>

            <Button
              onClick={handleSubmit}
              isLoading={loading}
              bgGradient="linear(to-r, cyan.400, blue.500, purple.500)"
              color="white"
              _hover={{ filter: "brightness(1.08)", transform: "translateY(-1px)" }}
              width="100%"
              size="lg"
              fontSize="md"
              leftIcon={!loading && <FiLogIn />}
            >
              Sign In
            </Button>

            <Text color="whiteAlpha.800">
              Don't have an account?{" "}
              <Link
                to="/register"
                style={{
                  color: "#67e8f9",
                  fontWeight: "500",
                }}
              >
                Register now
              </Link>
            </Text>
          </VStack>
        </Box>
      </Box>
    </Box>
  );
};

export default Login;
