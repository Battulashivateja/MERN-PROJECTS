import {
  Box,
  VStack,
  Text,
  Badge,
  Flex,
  Icon,
  Tooltip,
  Avatar,
} from "@chakra-ui/react";
import { FiUsers, FiCircle } from "react-icons/fi";

const UsersList = ({ users }) => {
  return (
    <Box
      h="100%"
      w="100%"
      borderLeft="1px solid"
      borderColor="whiteAlpha.200"
      bg="rgba(7, 15, 34, 0.9)"
      position="relative"
      overflow="hidden"
    >
      {/* Header */}
      <Flex
        p={5}
        borderBottom="1px solid"
        borderColor="whiteAlpha.200"
        bg="rgba(8, 16, 36, 0.95)"
        align="center"
        position="sticky"
        top={0}
        zIndex={1}
        boxShadow="sm"
      >
        <Icon as={FiUsers} fontSize="20px" color="cyan.300" mr={2} />
        <Text fontSize="lg" fontWeight="bold" color="white">
          Members
        </Text>
        <Badge
          ml={2}
          colorScheme="cyan"
          borderRadius="full"
          px={2}
          py={0.5}
          fontSize="xs"
        >
          {users.length}
        </Badge>
      </Flex>

      {/* Users List */}
      <Box flex="1" overflowY="auto" p={4}>
        <VStack align="stretch" spacing={3}>
          {users.map((user) => (
            <Box key={user._id}>
              <Tooltip label={`${user.username} is online`} placement="left">
                <Flex
                  p={3}
                  bg="whiteAlpha.100"
                  borderRadius="lg"
                  shadow="sm"
                  align="center"
                  borderWidth="1px"
                  borderColor="whiteAlpha.200"
                >
                  <Avatar
                    size="sm"
                    name={user.username}
                    bg="purple.500"
                    color="white"
                    mr={3}
                  />
                  <Box flex="1">
                    <Text
                      fontSize="sm"
                      fontWeight="medium"
                      color="whiteAlpha.900"
                      noOfLines={1}
                    >
                      {user.username}
                    </Text>
                  </Box>
                  <Flex
                    align="center"
                    bg="green.900"
                    px={2}
                    py={1}
                    borderRadius="full"
                  >
                    <Icon
                      as={FiCircle}
                      color="green.300"
                      fontSize="8px"
                      mr={1}
                    />
                    <Text fontSize="xs" color="green.200" fontWeight="medium">
                      online
                    </Text>
                  </Flex>
                </Flex>
              </Tooltip>
            </Box>
          ))}
        </VStack>
      </Box>
    </Box>
  );
};

export default UsersList;
