import {
  Box,
  Button,
  Container,
  Heading,
  Text,
  Stack,
  Icon,
  SimpleGrid,
  Flex,
  VStack,
  HStack,
  Badge,
} from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
import {
  FiMessageSquare,
  FiUsers,
  FiLock,
  FiLogIn,
  FiUserPlus,
  FiActivity,
  FiUserCheck,
  FiGlobe,
} from "react-icons/fi";

const Feature = ({ title, text, icon, badges = [] }) => {
  return (
    <Stack
      bg="rgba(12, 22, 46, 0.82)"
      rounded="2xl"
      p={6}
      spacing={4}
      border="1px solid"
      borderColor="whiteAlpha.300"
      _hover={{
        transform: "translateY(-6px)",
        boxShadow: "0 20px 35px rgba(0,0,0,0.35)",
        borderColor: "cyan.300",
      }}
      transition="all 0.3s ease"
    >
      <Flex
        w={16}
        h={16}
        align="center"
        justify="center"
        color="white"
        rounded="full"
        bgGradient="linear(135deg, cyan.400, purple.500)"
      >
        {icon}
      </Flex>
      <Box>
        <HStack spacing={2} mb={2}>
          <Text fontWeight={700} fontSize="lg" color="white">
            {title}
          </Text>
          {badges.map((badge, index) => (
            <Badge
              key={index}
              colorScheme={badge.color}
              variant="solid"
              rounded="full"
              px={2}
            >
              {badge.text}
            </Badge>
          ))}
        </HStack>
        <Text color="whiteAlpha.800">{text}</Text>
      </Box>
    </Stack>
  );
};

const ChatMessage = ({ message, sender, time, isUser }) => {
  return (
    <Flex justify={isUser ? "flex-end" : "flex-start"} w="100%">
      <Box
        bg={
          isUser
            ? "linear-gradient(135deg, #06b6d4, #3b82f6)"
            : "rgba(19, 35, 70, 0.85)"
        }
        color="white"
        borderRadius="lg"
        px={4}
        py={2}
        maxW="80%"
        border="1px solid"
        borderColor={isUser ? "transparent" : "whiteAlpha.300"}
      >
        <Text fontSize="sm" fontWeight="bold" mb={1}>
          {sender}
        </Text>
        <Text>{message}</Text>
        <Text fontSize="xs" color="whiteAlpha.700" mt={1}>
          {time}
        </Text>
      </Box>
    </Flex>
  );
};

export default function LandingPage() {
  return (
    <Box
      minH="100vh"
      bgGradient="linear(140deg, #080d24 0%, #23003a 45%, #00344f 100%)"
      color="white"
    >
      {/* Hero Section */}
      <Container maxW="7xl" pt={10}>
        <Stack
          align="center"
          spacing={{ base: 8, md: 10 }}
          py={{ base: 20, md: 28 }}
          direction={{ base: "column", md: "row" }}
        >
          <Stack flex={1} spacing={{ base: 5, md: 10 }}>
            <Heading
              lineHeight={1.1}
              fontWeight={800}
              fontSize={{ base: "3xl", sm: "4xl", lg: "6xl" }}
            >
              <Text as="span">
                MasynTech
              </Text>
              <br />
              <Text
                as="span"
                bgGradient="linear(to-r, cyan.300, blue.400, purple.400)"
                bgClip="text"
              >
                Chat App
              </Text>
            </Heading>
            <Text color="whiteAlpha.800" fontSize="xl">
              Experience seamless group communication with our modern chat
              platform. Connect with teams, friends, and communities in
              real-time with advanced features like typing indicators and online
              status.
            </Text>
            <Stack
              spacing={{ base: 4, sm: 6 }}
              direction={{ base: "column", sm: "row" }}
            >
              <Button
                as={RouterLink}
                to="/register"
                rounded="full"
                size="lg"
                fontWeight="bold"
                px={8}
                bgGradient="linear(to-r, cyan.400, blue.500, purple.500)"
                color="white"
                _hover={{ filter: "brightness(1.08)", transform: "translateY(-1px)" }}
                leftIcon={<FiUserPlus />}
              >
                Get Started
              </Button>
              <Button
                as={RouterLink}
                to="/login"
                rounded="full"
                size="lg"
                fontWeight="bold"
                px={8}
                variant="outline"
                borderColor="whiteAlpha.400"
                color="white"
                _hover={{ bg: "whiteAlpha.200" }}
                leftIcon={<FiLogIn />}
              >
                Sign In
              </Button>
            </Stack>
          </Stack>

          {/* Chat Preview */}
          <Flex
            flex={1}
            justify="center"
            align="center"
            position="relative"
            w="full"
          >
            <Box
              position="relative"
              height="500px"
              rounded="2xl"
              boxShadow="0 24px 50px rgba(0,0,0,0.35)"
              width="full"
              overflow="hidden"
              bg="rgba(8, 16, 36, 0.88)"
              border="1px"
              borderColor="whiteAlpha.300"
            >
              {/* Chat Header */}
              <Box
                position="absolute"
                top={0}
                left={0}
                right={0}
                bg="rgba(11, 24, 54, 0.95)"
                p={4}
                color="white"
                borderBottom="1px"
                borderColor="whiteAlpha.300"
              >
                <HStack justify="space-between">
                  <HStack>
                    <Icon as={FiUsers} />
                    <Text fontWeight="bold">Team MasynTech</Text>
                  </HStack>
                  <HStack spacing={4}>
                    <Badge colorScheme="green" variant="solid">
                      3 online
                    </Badge>
                    <Badge colorScheme="purple">Live</Badge>
                  </HStack>
                </HStack>
              </Box>

              {/* Chat Messages */}
              <VStack
                spacing={4}
                p={4}
                pt="60px"
                h="calc(100% - 120px)"
                overflowY="auto"
              >
                <ChatMessage
                  sender="Sarah Chen"
                  message="Hey team! Just pushed the new updates to staging."
                  time="10:30 AM"
                  isUser={false}
                />
                <ChatMessage
                  sender="Alex Thompson"
                  message="Great work! The new features look amazing 🚀"
                  time="10:31 AM"
                  isUser={false}
                />
                <ChatMessage
                  sender="You"
                  message="Thanks! Let's review it in our next standup."
                  time="10:32 AM"
                  isUser={true}
                />
                <Box w="100%" textAlign="center">
                  <Badge colorScheme="purple" fontSize="xs">
                    Sarah is typing...
                  </Badge>
                </Box>
              </VStack>
            </Box>
          </Flex>
        </Stack>

        {/* Features Grid */}
        <Box py={20}>
          <VStack spacing={2} textAlign="center" mb={12}>
            <Heading fontSize="4xl">Powerful Features</Heading>
            <Text fontSize="lg" color="whiteAlpha.800">
              Everything you need for seamless team collaboration
            </Text>
          </VStack>
          <SimpleGrid
            columns={{ base: 1, md: 2, lg: 3 }}
            spacing={10}
            px={{ base: 4, md: 8 }}
          >
            <Feature
              icon={<Icon as={FiLock} w={10} h={10} />}
              title="Secure Authentication"
              badges={[{ text: "Secure", color: "green" }]}
              text="Register and login securely with email verification and encrypted passwords."
            />
            <Feature
              icon={<Icon as={FiUsers} w={10} h={10} />}
              title="Group Management"
              badges={[{ text: "Real-time", color: "blue" }]}
              text="Create, join, or leave groups easily. Manage multiple conversations in one place."
            />
            <Feature
              icon={<Icon as={FiUserCheck} w={10} h={10} />}
              title="Online Presence"
              badges={[{ text: "Live", color: "green" }]}
              text="See who's currently online and active in your groups in real-time."
            />
            <Feature
              icon={<Icon as={FiActivity} w={10} h={10} />}
              title="Typing Indicators"
              badges={[{ text: "Interactive", color: "purple" }]}
              text="Know when others are typing with real-time typing indicators."
            />
            <Feature
              icon={<Icon as={FiMessageSquare} w={10} h={10} />}
              title="Instant Messaging"
              badges={[{ text: "Fast", color: "orange" }]}
              text="Send and receive messages instantly with real-time delivery and notifications."
            />
            <Feature
              icon={<Icon as={FiGlobe} w={10} h={10} />}
              title="Global Access"
              badges={[{ text: "24/7", color: "blue" }]}
              text="Access your chats from anywhere, anytime with persistent connections."
            />
          </SimpleGrid>
        </Box>

        {/* Call to Action */}
        <Box py={20}>
          <Stack
            direction={{ base: "column", md: "row" }}
            spacing={10}
            align="center"
            justify="center"
            bg="rgba(10, 22, 48, 0.85)"
            border="1px solid"
            borderColor="whiteAlpha.300"
            p={10}
            rounded="xl"
          >
            <VStack align="flex-start" spacing={4}>
              <Heading size="lg">Ready to get started?</Heading>
              <Text color="whiteAlpha.800" fontSize="lg">
                Join thousands of users already using our platform
              </Text>
            </VStack>
            <Button
              as={RouterLink}
              to="/register"
              size="lg"
              bgGradient="linear(to-r, cyan.400, blue.500)"
              color="white"
              _hover={{ filter: "brightness(1.08)" }}
              rightIcon={<FiUserPlus />}
            >
              Create Free Account
            </Button>
          </Stack>
        </Box>
      </Container>
    </Box>
  );
}
