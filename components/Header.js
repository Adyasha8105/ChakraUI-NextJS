import { Box, Flex, Button, Image, useDisclosure, Link } from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";

const Header = (props) => {
	const { isOpen, onOpen, onClose } = useDisclosure();
	const handleToggle = () => (isOpen ? onClose() : onOpen());

	return (
		<Flex
			as="nav"
			justify="space-between"
			wrap="wrap"
			padding={4}
			bg="white"
			color="white"
			boxShadow="0 5px 10px rgb(154 160 185 / 5%), 0 15px 40px rgb(166 173 201 / 20%)"
			pr={[8, 19, 50, 100]}
			pl={[8, 19, 50, 100]}
			{...props}
		>
			<Flex align="center" mr={5}>
				<Box w={[100, 130]} objectFit="cover">
					<Link href="/">
						<Image src="./logo.svg" alt="Logo" />
					</Link>
				</Box>
			</Flex>

			<Box display={{ base: "block", sm: "none" }} onClick={handleToggle}>
				<HamburgerIcon w={6} h={6} m={2} color="black" />
			</Box>

			<Box display={{ base: isOpen ? "block" : "none", sm: "block" }} mt={{ base: 6, sm: 0 }}>
				<Button
					bg="black"
					fontSize={{ base: "14px", md: "14px", xl: "16px" }}
					variant="outline"
					me={2}
					_hover={{ opacity: "0.8", borderColor: "white" }}
					_active={{ color: "white" }}
				>
					Sign In
				</Button>
				<Button
					bg="black"
					fontSize={{ base: "14px", md: "14px", xl: "16px" }}
					variant="outline"
					me={2}
					_hover={{ opacity: "0.8", borderColor: "white" }}
					_active={{ color: "white" }}
				>
					Sign Up
				</Button>
			</Box>
		</Flex>
	);
};

export default Header;
