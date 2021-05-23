import { Box, Flex, Icon, Text, Stack, SimpleGrid, Heading } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenSquare, faHandsHelping, faHandHoldingHeart } from "@fortawesome/free-solid-svg-icons";

export default function Card() {
	const dataList = [
		{
			id: 1,
			icon: faPenSquare,
			product: "Lorem Ipsum",
			summary:
				"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
		},
		{
			id: 2,
			icon: faHandsHelping,
			product: "Lorem Ipsum",
			summary:
				"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
		},
		{
			id: 3,
			icon: faHandHoldingHeart,
			product: "Lorem Ipsum",
			summary:
				"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
		},
	];

	return (
		<Flex
			align="center"
			justify={{ base: "center", md: "space-around" }}
			direction={{ base: "column-reverse", md: "row" }}
			wrap="no-wrap"
			minH="90vh"
			pt={[10, 30, 50, 70]}
			pb={[10, 30, 50, 70]}
			px={[0, 10]}

		>
			<SimpleGrid columns={[1, 2, 3]}>
				{dataList.map(function (data) {
					const { id, product, summary, icon } = data;
					return (
						<Box
							key={id}
							p={7}
							display={{ md: "flex" }}
							maxWidth="35rem"
							borderWidth={1}
							margin={7}
							bgColor="white"
							transition="transform 0.5s"
							borderRadius="8px"
							backgroundColor="#f3f1f357"
							_hover={{
								border: "1px solid #6C63FF",
								boxShadow: "0px 0px 25px 0px rgba(108,99,255, 0.1)",
								transform: "scale(1.01)",
							}}
						>
							<Stack
								align={{ base: "center", md: "stretch" }}
								textAlign={{ base: "center", md: "left" }}
								mt={{ base: 4, md: 0 }}
								m={{ md: 4 }}
							>
								<Icon
									color="#6C63FF"
									borderRadius="50%"
									textAlign="center"
									fontSize="5rem"
									mx="auto"
									backgroundColor="rgba(108,99,255, 0.1);"
									p={6}
								>
									<FontAwesomeIcon icon={icon} />
								</Icon>

								<Heading
									fontWeight="bold"
									textTransform="uppercase"
									fontSize="xl"
									letterSpacing="wide"
									color="#222"
									align="center"
									pt={4}
								>
									{product}
								</Heading>
								<Text
									my={1}
									display="block"
									lineHeight="normal"
									fontSize={{ base: "14px", md: "14px", xl: "16px" }}
									color="primary.700"
									letterSpacing="1px"
									lineHeight="normal"
									fontWeight="normal"
									align="center"
									pt={4}
								>
									{summary}
								</Text>
							</Stack>
						</Box>
					);
				})}
			</SimpleGrid>
		</Flex>
	);
}
