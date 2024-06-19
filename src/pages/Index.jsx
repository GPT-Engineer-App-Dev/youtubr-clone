import { Box, Container, Flex, Image, Input, IconButton, VStack, Text } from "@chakra-ui/react";
import { FaSearch, FaMicrophone, FaVideo, FaBell, FaUserCircle } from "react-icons/fa";

const Index = () => {
  return (
    <Container maxW="container.xl">
      <Flex as="header" align="center" justify="space-between" py={4} borderBottom="1px" borderColor="gray.200">
        <Flex align="center">
          <Image src="/youtube-logo.svg" alt="YouTube Logo" boxSize="40px" />
        </Flex>
        <Flex flex="1" mx={4} maxW="600px">
          <Input placeholder="Search" borderRadius="none" />
          <IconButton aria-label="Search" icon={<FaSearch />} borderRadius="none" />
          <IconButton aria-label="Voice Search" icon={<FaMicrophone />} ml={2} />
        </Flex>
        <Flex align="center">
          <IconButton aria-label="Create" icon={<FaVideo />} variant="ghost" />
          <IconButton aria-label="Notifications" icon={<FaBell />} variant="ghost" />
          <IconButton aria-label="User" icon={<FaUserCircle />} variant="ghost" />
        </Flex>
      </Flex>
      <VStack spacing={4} mt={8}>
        <Text fontSize="2xl">Welcome to YouTube</Text>
        <Text>Explore videos, channels, and more.</Text>
      </VStack>
    </Container>
  );
};

export default Index;