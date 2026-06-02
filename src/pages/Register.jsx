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
import axios from "axios";
import { useState } from "react";

import { Link, useNavigate } from "react-router-dom";
import apiURL from "../../utils";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [loading, setLoading] = useState(false);
  const toast = useToast();
  //Navigate
  const navigate = useNavigate();
  //main logic for login
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const { data } = await axios.post(`${apiURL}/api/users/register`, {
        email,
        password,
        username,
      });
      console.log(data.user);

      navigate("/login");
    } catch (error) {
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
      bgGradient="linear(145deg, #081a34 0%, #17103f 45%, #2b0042 100%)"
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
          bgImage="url('https://images.unsplash.com/photo-1521737604893-d14cc237f11d')"
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
              Join Our Chat Community
            </Text>
            <Text fontSize="lg" maxW="400px" color="whiteAlpha.900">
              Create your account and start messaging your groups instantly.
            </Text>
          </Box>
        </Box>

        {/* Right Panel - Registration Form */}
        <Box
          w={{ base: "100%", lg: "50%" }}
          bg="rgba(8, 18, 40, 0.88)"
          p={[6, 8, 10]}
          display="flex"
          flexDirection="column"
          justifyContent={{ base: "flex-start", md: "center" }}
        >
          {/* Mobile Header - Shown only on mobile */}
          <Box display={["block", "block", "none"]} textAlign="center" mb={6}>
            <Text fontSize="2xl" fontWeight="bold" color="white">
              Create Account
            </Text>
          </Box>

          <VStack spacing={5} w="100%" maxW="400px" mx="auto">
            <Text fontSize="3xl" fontWeight="extrabold" color="white" alignSelf="start">
              Register
            </Text>
            <FormControl id="username" isRequired>
              <FormLabel color="whiteAlpha.900" fontWeight="medium">
                Username
              </FormLabel>
              <Input
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                type="text"
                size="lg"
                bg="whiteAlpha.200"
                borderColor="whiteAlpha.300"
                color="white"
                _placeholder={{ color: "whiteAlpha.700" }}
                _hover={{ borderColor: "purple.300" }}
                _focus={{ borderColor: "purple.300", boxShadow: "0 0 0 1px #d8b4fe" }}
                placeholder="Choose a username"
              />
            </FormControl>

            <FormControl id="email" isRequired>
              <FormLabel color="whiteAlpha.900" fontWeight="medium">
                Email
              </FormLabel>
              <Input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                size="lg"
                bg="whiteAlpha.200"
                borderColor="whiteAlpha.300"
                color="white"
                _placeholder={{ color: "whiteAlpha.700" }}
                _hover={{ borderColor: "purple.300" }}
                _focus={{ borderColor: "purple.300", boxShadow: "0 0 0 1px #d8b4fe" }}
                placeholder="Enter your email"
              />
            </FormControl>

            <FormControl id="password" isRequired>
              <FormLabel color="whiteAlpha.900" fontWeight="medium">
                Password
              </FormLabel>
              <Input
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                size="lg"
                bg="whiteAlpha.200"
                borderColor="whiteAlpha.300"
                color="white"
                _placeholder={{ color: "whiteAlpha.700" }}
                _hover={{ borderColor: "purple.300" }}
                _focus={{ borderColor: "purple.300", boxShadow: "0 0 0 1px #d8b4fe" }}
                placeholder="Create a password"
              />
            </FormControl>

            <Button
              onClick={handleSubmit}
              isLoading={loading}
              bgGradient="linear(to-r, purple.400, pink.500, blue.500)"
              color="white"
              width="100%"
              _hover={{ filter: "brightness(1.08)", transform: "translateY(-1px)" }}
              transition="transform 0.2s"
              size="lg"
              fontSize="md"
              mt={4}
            >
              Create Account
            </Button>

            <Text color="whiteAlpha.800" pt={4}>
              Already have an account?{" "}
              <Link
                to="/login"
                style={{
                  color: "#c084fc",
                  fontWeight: "500",
                  transition: "color 0.2s",
                }}
                _hover={{ color: "indigo.700" }}
              >
                Sign in
              </Link>
            </Text>
          </VStack>
        </Box>
      </Box>
    </Box>
  );
};

export default Register;
