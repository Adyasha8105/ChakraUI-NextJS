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
				<Box w={{ base: "70%", sm: "50%", md: "40%" }} mb={{ base: 10, md: 0 }}>
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
						<Text as="abbr">About </Text>
						<Text as="abbr" color="rgba(235,109,109)">
							Us
						</Text>
					</Heading>
					<Heading
						fontSize={{ base: "14px", md: "14px", xl: "16px" }}
						lineHeight={1.5}
						textAlign={["center", "center", "left", "left"]}
					>
						<Text as="abbr" opacity="0.7" fontWeight="normal">
							UNCOPIED is a spin-off project of NAMSOR SAS, a French Limited Company based in
							Versailles, France. Open source code and IPFS infrastructure are maintained by the
							UNCOPIED Collective.
						</Text>
					</Heading>
				</Stack>
			</Flex>
		</>
	);
}
