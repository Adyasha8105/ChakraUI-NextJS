
import {
  Box,
  Flex,
  Button,
  Image,
  useDisclosure
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";

const Header = (props) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const handleToggle = () => (isOpen ? onClose() : onOpen());

  return (
    <Flex
      as="nav"
      justify="space-between"
      wrap="wrap"
      padding={6}
      bg="white"
      color="white"
      boxShadow="0 5px 10px rgb(154 160 185 / 5%), 0 15px 40px rgb(166 173 201 / 20%)"
      pr={[8,19,50,120]}
      pl={[8,19,50,120]}
      px={8}
      {...props}
    >
      <Flex align="center" mr={5}>
        <Box 
        w={[100, 120, 150]}
        objectFit="cover">
          <Image src="./logo.svg" alt="Logo" />
        </Box>
      </Flex>

      <Box display={{ base: "block", sm: "none" }} onClick={handleToggle}>
        <HamburgerIcon w={6} h={6} m={2} color="black" />
      </Box>

      <Box
        display={{ base: isOpen ? "block" : "none", sm: "block" }}
        mt={{ base: 6, sm: 0 }}
      >
        <Button
          bg="black"
          variant="outline"
          me={2}
          _hover={{ opacity: "0.8", borderColor: "teal.700" }}
        >
          SIGN IN
        </Button>
        <Button
          bg="black"
          variant="outline"
          me={2}
          _hover={{ opacity: "0.8", borderColor: "teal.700" }}
        >
          SIGN UP
        </Button>
      </Box>
    </Flex>
  );
};

export default Header;