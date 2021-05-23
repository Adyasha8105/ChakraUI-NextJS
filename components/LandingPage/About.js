import { Box, Flex, Image, Heading, Stack, Text } from "@chakra-ui/react";
export default function About() {
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
			>
				<Box w={{ base: "60%", sm: "40%", md: "30%" }} mb={{ base: 10, md: 0 }}>
					<Image src="./about.svg" size="100%" />
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
						letterSpacing="2%"
						textAlign={["center", "center", "left", "left"]}
					>
						<Text as="abbr">Lorem </Text>
						<Text as="abbr" color="#6C63FF">
							Ipsum
						</Text>
					</Heading>
					<Heading
						fontSize={{ base: "14px", md: "14px", xl: "16px" }}
						lineHeight={1.5}
						textAlign={["center", "center", "left", "left"]}
					>
						<Text as="abbr" opacity="0.7" fontWeight="normal">
							Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an
							unknown printer took a galley of type and scrambled it to make a type specimen book.
							It has survived not only five centuries, but also the leap into electronic
							typesetting, remaining essentially unchanged.
						</Text>
					</Heading>
				</Stack>
			</Flex>
		</>
	);
}
