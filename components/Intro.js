import { Box, Button, Flex, Image, Heading, Stack, Text } from "@chakra-ui/react";
export default function Main() {
	return (
		<>
			<Flex
				align="center"
				justify={{ base: "center", md: "space-around" }}
				direction={{ base: "column-reverse", md: "row" }}
				wrap="no-wrap"
				minH="90vh"
				px={8}
				mb={16}
				pt={[10, 30, 50, 70]}
				pb={[10, 30, 50, 70]}
			>
				<Stack
					spacing={8}
					w={{ base: "80%", md: "40%" }}
					align={["center", "center", "flex-start", "flex-start"]}
				>
					<Heading
						as="h1"
						fontSize={{ base: "35px", md: "45px", xl: "62px" }}
						fontWeight="bold"
						letterSpacing="2%"
						color="primary.800"
						textAlign={["center", "center", "left", "left"]}
					>
						<Text as="abbr">Making Original Truely </Text>
						<Text as="abbr" color="rgba(235,109,109)">
							UNIQUE
						</Text>
					</Heading>
					<Heading
						fontSize={{ base: "15px", md: "18px", xl: "22px" }}
						lineHeight={1.5}
						textAlign={["center", "center", "left", "left"]}
					>
						<Text as="abbr" color="primary.700" opacity="0.7" fontWeight="normal">
							Elegant and digitally immutable certificates of authenticity for the original artwork.{" "}
						</Text>
						<Text as="abbr" fontWeight="semibold" color="primary.800">
							Soft launch June 2021!
						</Text>
					</Heading>
					{/* <Link to="/signup"> */}
					<Button
						bg="black"
						variant="outline"
						color="white"
						p={6}
						_hover={{ opacity: "0.8", borderColor: "white" }}
						_active={{ color: "white" }}
					>
						DISCOVER
					</Button>
					{/* </Link> */}
				</Stack>
				<Box w={{ base: "70%", sm: "50%", md: "40%" }} mb={{ base: 10, md: 0 }}>
					<Image src="./Intro.svg" size="100%" />
				</Box>
			</Flex>
		</>
	);
}
