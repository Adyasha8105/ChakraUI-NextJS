import { Box, Flex, Icon, Text, Stack, SimpleGrid, Container, Heading } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faUserPlus,
	faImage,
	faFileCode,
	faGem,
	faFileSignature,
} from "@fortawesome/free-solid-svg-icons";

export default function Howitworks() {
	const dataList = [
		{
			id: 1,
			icon: faUserPlus,
			heading: "CREATE ACCOUNT",
			summary:
				"Create your personal account with your artist name. Optionally link your account with your blockchain address.",
		},
		{
			id: 2,
			icon: faImage,
			heading: "UPLOAD ARTWORK",
			summary:
				"Upload your high-definition source image for long-term conservation in the Interplanetary File System (IPFS).",
		},
		{
			id: 3,
			icon: faFileCode,
			heading: "CREATE EDITION",
			summary:
				"Create your art edition : unique physical original, limited edition or crypto-art / NFTs.",
		},
		{
			id: 4,
			icon: faGem,
			heading: "MINT BLOCKCHAIN ASSET",
			summary:
				"We create for you a unique asset (NFT) in the blockchain and you receive the certificate PDF document to your mailbox.",
		},
		{
			id: 5,
			icon: faFileSignature,
			heading: "SECURE CERTIFICATE",
			summary:
				"Physically cut and sign the chirograph to make each certificate unique and send dupplicate copies to our PO Box.",
		},
		{
			id: 6,
			icon: faFileSignature,
			heading: "CREATE ACCOUNT",
			summary:
				"Physically cut and sign the chirograph to make each certificate unique and send dupplicate copies to our PO Box.",
		},
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
				<Text as="abbr">How it</Text>
				<Text as="abbr" color="rgba(235,109,109)">
					{" "}
					WORKS ?
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
									<Icon color="black" textAlign="center" fontSize="7rem" mx="auto" p={6}>
										<FontAwesomeIcon icon={icon} />
									</Icon>

									<Heading
										fontWeight="bold"
										textTransform="uppercase"
										fontSize="2xl"
										letterSpacing="wide"
										color="black"
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
