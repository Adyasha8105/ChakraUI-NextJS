import { Box, Flex, Icon, Text, Stack, SimpleGrid, Heading } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenSquare, faHandsHelping, faCertificate } from "@fortawesome/free-solid-svg-icons";

export default function Card() {
	const dataList = [
		{
			id: 1,
			icon: faPenSquare,
			product: "Artists",
			summary:
				"The Certificate of Authenticity (CoA) offers strong long term protection for your intellectual property. You gain control and decide with maximum flexibility on creating physical or digital editions of your artworks (single original edition, limited edition of original prints, digital prints or non fungible tokens NFTs).",
		},
		{
			id: 2,
			icon: faHandsHelping,
			product: "Collectors",
			summary:
				"The Certificate of Expertise (CoE) secure your collection of physical art works with digitally signed documents from world-class experts and art appraisers. Crypto art collectors can issue new cryptographic certificates for older NFT collectibles, backing up digital sources and transaction history from Ethereum ERC721 or ERC1155.",
		},
		{
			id: 3,
			icon: faCertificate,
			product: "Museums",
			summary:
				"The Certificates of Inventory (CoI) support conservation of your physical collections, with long term conservation of digital assets as well as dissemination of your collections metadata in a standard and future-proof format.",
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
			backgroundColor="#F3F1F3"
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
							_hover={{
								border: "1px solid rgba(235,109,109)",
								boxShadow: "0px 0px 25px 0px rgba(95, 95, 95, 0.24)",
								transform: "scale(1.01)",
							}}
						>
							<Stack
								align={{ base: "center", md: "stretch" }}
								textAlign={{ base: "center", md: "left" }}
								mt={{ base: 4, md: 0 }}
								m={{ md: 6 }}
								p={6}
							>
								<Icon
									color="rgba(235,109,109)"
									borderRadius="50%"
									textAlign="center"
									fontSize="5rem"
									mx="auto"
									backgroundColor="rgba(235,109,109, 0.1)"
									p={6}
								>
									<FontAwesomeIcon icon={icon} />
								</Icon>

								<Heading
									fontWeight="bold"
									textTransform="uppercase"
									fontSize="xl"
									letterSpacing="wide"
									color="black"
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
