import {
  Box,
  Flex,
  Icon,
  Text,
  Stack,
  SimpleGrid,
  Container,
  Heading
} from "@chakra-ui/react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faUserPlus,
  faImage,
  faFileCode,
  faGem,
  faFileSignature
} from '@fortawesome/free-solid-svg-icons'

export default function Howitworks() {
  const dataList = [
    {
      icon: faUserPlus,
      heading: "CREATE ACCOUNT",
      summary: "Create your personal account with your artist name. Optionally link your account with your blockchain address.",
    },
    {
      icon: faImage,
      heading: "UPLOAD ARTWORK",
      summary: "Upload your high-definition source image for long-term conservation in the Interplanetary File System (IPFS).",
    },
    {
      icon: faFileCode,
      heading: "CREATE EDITION",
      summary: "Create your art edition : unique physical original, limited edition or crypto-art / NFTs.",
    },
    {
      icon: faGem,
      heading: "MINT BLOCKCHAIN ASSET",
      summary: "We create for you a unique asset (NFT) in the blockchain and you receive the certificate PDF document to your mailbox.",
    },
    {
      icon: faFileSignature,
      heading: "SECURE CERTIFICATE",
      summary: "Physically cut and sign the chirograph to make each certificate unique and send dupplicate copies to our PO Box.",
    },
    {
      icon: faFileSignature,
      heading: "CREATE ACCOUNT",
      summary: "Physically cut and sign the chirograph to make each certificate unique and send dupplicate copies to our PO Box.",
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
    pt={[10,30,50,70]}
    pb={[10,30,50,70]}
    pr={[0, 30, 70]}
    pl={[0, 30, 70]}
    >
      <Heading
      as="h1"
       textAlign="center"
       fontWeight="bold"
       letterSpacing="1px"
       lineHeight="normal"
       fontSize={{ base: "35px", md:"45px", xl: "62px" }}
       p={10}
      >
      <Text
        as="abbr"
      > 
        HOW IT</Text>
      <Text         
        as="abbr"
        color="rgba(235,109,109)"
        > WORKS ?
      </Text>
      </Heading>
      <Flex
      align="center"
      justify={{ base: "center", md: "space-around"}}
      direction={{ base: "column-reverse", md: "row" }}
      centerContent>
          <SimpleGrid columns={[1,2,3]}>
          {dataList.map(function (data) {
            const { heading, summary, icon } = data;
            return (
              <Box
              display={{ md: "flex" }}
              px={[7, 12, 20]}
              transition="transform 0.5s"
              borderRadius="8px"          
            >
              <Stack
                align={{ base: "center", md: "stretch" }}
                textAlign={{ base: "center", md: "left" }}
                mt={{ base: 4, md: 0 }}
                m={{ md: 8 }}
              >
                <Icon 
                  color="black"
                  textAlign="center"
                  fontSize="9rem"
                  mx="auto"
                  p={6}
                  >
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
                  fontSize={{ base: "15px", md:"18px", xl: "22px" }}
                  color="primary.700"
                  letterSpacing="1px"
                  lineHeight="normal"
                  fontWeight="normal"
                  align="center"
                  px={[5,10,18]}
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