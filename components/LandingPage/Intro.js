import { Box, Button, Flex, Image, Heading, Stack, Text } from "@chakra-ui/react";
export default function Into() {
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
				<Box w={{ base: "70%", sm: "50%", md: "40%" }} mb={{ base: 10, md: 0 }}>
					<Image src="./Intro.svg" size="100%" />
				</Box>
				<Stack
					spacing={8}
					w={{ base: "80%", md: "40%" }}
					align={["center", "center", "flex-start", "flex-start"]}
				>
					<Heading
						as="h1"
						fontSize={{ base: "25px", md: "35px", xl: "42px" }}
						fontWeight="bold"
						letterSpacing="1px"
						color="primary.800"
						letterSpacing="1px"
						textAlign={["center", "center", "left", "left"]}
					>
						<Text as="abbr">LOREM </Text>
						<Text as="abbr" color="#6C63FF">
							Ipsum
						</Text>
					</Heading>
					<Heading
						fontSize={{ base: "14px", md: "16px", xl: "18px" }}
						lineHeight={1.5}
						textAlign={["center", "center", "left", "left"]}
						letterSpacing="1px"
					>
						<Text as="abbr" color="primary.700" opacity="0.7" fontWeight="normal">
							A simple dummy text of the printing and typesetting industry.{" "}
						</Text>
						<Text as="abbr" fontWeight="semibold" color="primary.800">
							Just Have a Look on it.
						</Text>
					</Heading>
					{/* <Link to="/signup"> */}
					<Button
						bg="#222"
						variant="outline"
						color="white"
						fontSize={{ base: "14px", md: "14px", xl: "16px" }}
						p={4}
						_hover={{ opacity: "0.8", borderColor: "white" }}
						_active={{ color: "white" }}
					>
						Button
					</Button>
					{/* </Link> */}
				</Stack>
			</Flex>
		</>
	);
}
