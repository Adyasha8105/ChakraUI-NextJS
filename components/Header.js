import { Box, Flex, Button, Text, useDisclosure } from "@chakra-ui/react";
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
				<Box
					w={[100, 130]}
					fontWeight="bold"
					color="#222"
					fontSize={{ base: "15x", md: "20px", xl: "25px" }}
				>
					HEY{" "}
					<Text as="abbr" color="#6C63FF">
						YOU
					</Text>
					.
				</Box>
			</Flex>

			<Box display={{ base: "block", sm: "none" }} onClick={handleToggle}>
				<HamburgerIcon w={6} h={6} m={2} color="#222" />
			</Box>

			<Box display={{ base: isOpen ? "block" : "none", sm: "block" }} mt={{ base: 6, sm: 0 }}>
				<Button
					bg="#222"
					fontSize={{ base: "14px", md: "14px", xl: "16px" }}
					variant="outline"
					me={2}
					_hover={{ opacity: "0.8", borderColor: "white" }}
					_active={{ color: "white" }}
				>
					Button
				</Button>
				<Button
					bg="#222"
					fontSize={{ base: "14px", md: "14px", xl: "16px" }}
					variant="outline"
					me={2}
					_hover={{ opacity: "0.8", borderColor: "white" }}
					_active={{ color: "white" }}
				>
					Button
				</Button>
			</Box>
		</Flex>
	);
};

export default Header;
