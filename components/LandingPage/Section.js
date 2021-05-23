import { Box, Flex, Icon, Text, Stack, SimpleGrid, Container, Heading } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faUserPlus,
	faImage,
	faFileCode,
} from "@fortawesome/free-solid-svg-icons";

export default function Section() {
	const dataList = [
		{
			id: 1,
			icon: faUserPlus,
			heading: "Lorem Ipsum",
			summary:
				"Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.",
		},
		{
			id: 2,
			icon: faImage,
			heading: "Lorem Ipsum",
			summary:
				"Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.",
		},
		{
			id: 3,
			icon: faFileCode,
			heading: "Lorem Ipsum",
			summary:
				"Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.",
		}
	];

	return (
		<Container
			maxWidth="-moz-fit-content"
			bgColor="white"
			wrap="no-wrap"
			minH="90vh"
			px={8}
			mb={16}
			pt={[10, 30, 50, 70]}
			pb={[10, 30, 50, 70]}
			pr={[0, 30, 70]}
			pl={[0, 30, 70]}
			backgroundColor="#f3f1f357"
		>
			<Heading
				as="h1"
				textAlign="center"
				fontWeight="bold"
				letterSpacing="1px"
				lineHeight="normal"
				fontSize={{ base: "25px", md: "35px", xl: "42px" }}
				p={10}
			>
				<Text as="abbr">Lorem </Text>
				<Text as="abbr" color="#6C63FF">
					{" "}
					IPSUM
				</Text>
			</Heading>
			<Flex
				align="center"
				justify={{ base: "center", md: "space-around" }}
				direction={{ base: "column-reverse", md: "row" }}
			>
				<SimpleGrid columns={[1, 2, 3]}>
					{dataList.map(function (data) {
						const { id, heading, summary, icon } = data;
						return (
							<Box
								key={id}
								display={{ md: "flex" }}
								px={[7, 12, 15]}
								transition="transform 0.5s"
								borderRadius="8px"
							>
								<Stack
									align={{ base: "center", md: "stretch" }}
									textAlign={{ base: "center", md: "left" }}
									mt={{ base: 4, md: 0 }}
									m={{ md: 8 }}
								>
									<Icon color="#222" textAlign="center" fontSize="7rem" mx="auto" p={6}>
										<FontAwesomeIcon icon={icon} />
									</Icon>

									<Heading
										fontWeight="bold"
										fontSize="2xl"
										letterSpacing="wide"
										color="#222"
										align="center"
										pt={4}
									>
										{heading}
									</Heading>
									<Text
										my={1}
										display="block"
										fontSize={{ base: "14px", md: "14px", xl: "16px" }}
										color="primary.700"
										letterSpacing="1px"
										lineHeight="normal"
										fontWeight="normal"
										align="center"
										px={[5, 10, 18]}
									>
										{summary}
									</Text>
								</Stack>
							</Box>
						);
					})}
				</SimpleGrid>
			</Flex>
		</Container>
	);
}
