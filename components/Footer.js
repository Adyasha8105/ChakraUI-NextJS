import {
	Box,
	Stack,
	StackDivider,
	Link,
	SimpleGrid,
	ButtonGroup,
	IconButton,
	Text,
} from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter, faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faBlog } from "@fortawesome/free-solid-svg-icons";

export default function Footer() {
	return (
		<Box
			as="footer"
			role="contentinfo"
			pt="12"
			pb="6"
			backgroundColor="#151414"
			pr={[8, 20, 50, 120]}
			pl={[8, 20, 50, 120]}
			px={8}
		>
			<Stack spacing="5" divider={<StackDivider borderColor="#878787" />}>
				<Stack
					pb={10}
					direction={{
						base: "column",
						lg: "row",
					}}
					spacing={{
						base: "10",
						lg: "28",
					}}
				>
					<Box
						flex={1}
						minW={240}
						w={[100, 130]}
						fontWeight="bold"
						color="#fff"
						fontSize={{ base: "20x", md: "25px", xl: "35px" }}
					>
						HEY{" "}
						<Text as="abbr" color="#6C63FF">
							YOU
						</Text>
						.
						<Text
							color="#878787"
							py={4}
							fontSize={{ base: "14px", md: "14px", xl: "16px" }}
							letterSpacing="1px"
						>
							Thanks for visiting :D
						</Text>
					</Box>
					<Stack
						direction={{
							base: "column",
							md: "row",
						}}
						spacing={{
							base: "10",
							md: "20",
						}}
					>
						<SimpleGrid
							columns={2}
							spacing={{
								base: "10",
								md: "20",
								lg: "28",
							}}
							flex="1"
						>
							<Box minW={[0, 100, 300]}>
								<Stack color="#878787" fontSize={{ base: "14px", md: "14px", xl: "16px" }}>
									<Link href="/" _hover={{ color: "#6C63FF" }}>
										Home
									</Link>
									<Link href="/" _hover={{ color: "#6C63FF" }}>
										Services
									</Link>
									<Link href="/" _hover={{ color: "#6C63FF" }}>
										About
									</Link>
								</Stack>
							</Box>
							<Box minW={[0, 100, 300]}>
								<Stack color="#878787" fontSize={{ base: "14px", md: "14px", xl: "16px" }}>
									<Link href="/" _hover={{ color: "#6C63FF" }}>
										Blog
									</Link>
									<Link href="/" _hover={{ color: "#6C63FF" }}>
										License
									</Link>
									<Link href="/" _hover={{ color: "#6C63FF" }}>
										Contact Us
									</Link>
								</Stack>
							</Box>
						</SimpleGrid>
					</Stack>
					<Stack
						direction={{
							base: "column",
							md: "row",
						}}
						spacing={{
							base: "20",
							md: "30",
						}}
					>
						<Box flex="1">
							<Text
								color="#fff"
								pb={6}
								fontSize={{ base: "14px", md: "14px", xl: "16px" }}
								letterSpacing="1px"
								fontWeight="semibold"
							>
								Follow{" "}
								<Text as="abbr" color="#6C63FF">
									Us
								</Text>
							</Text>
							<ButtonGroup variant="ghost" color="#878787">
								<IconButton
									as="a"
									href="https://twitter.com/Adyasha8105"
									fontSize="1.8rem"
									mr={5}
									_hover={{ backgroundColor: "#6C63FF", color: "#fff" }}
									icon={<FontAwesomeIcon icon={faTwitter} />}
								/>
								<IconButton
									as="a"
									href="https://github.com/Adyasha8105"
									fontSize="1.8rem"
									mr={5}
									_hover={{ backgroundColor: "#6C63FF", color: "#fff" }}
									icon={<FontAwesomeIcon icon={faGithub} />}
								/>
								<IconButton
									as="a"
									href="https://www.adyablogs.tech/"
									fontSize="1.8rem"
									mr={5}
									_hover={{ backgroundColor: "#6C63FF", color: "#fff" }}
									icon={<FontAwesomeIcon icon={faBlog} />}
								/>
								<IconButton
									as="a"
									href="https://www.linkedin.com/in/adyasha-mohanty-7a6254191/"
									fontSize="1.8rem"
									_hover={{ backgroundColor: "#6C63FF", color: "#fff" }}
									icon={<FontAwesomeIcon icon={faLinkedin} />}
								/>
							</ButtonGroup>
						</Box>
					</Stack>
				</Stack>
				<Stack
					direction={{
						base: "column-reverse",
						md: "row",
					}}
					justifyContent="space-between"
				>
					<Text color="#878787" fontSize={{ base: "14px", md: "14px", xl: "16px" }}>
						Copyright &copy; {new Date().getFullYear()} , All Rights Reserved.{" "}
					</Text>
					<Text color="#878787" fontSize={{ base: "14px", md: "14px", xl: "14px" }}>
						Made with <Text as="abbr" color="#6C63FF">CHAKRA UI </Text>and ♡
					</Text>
				</Stack>
			</Stack>
		</Box>
	);
}
