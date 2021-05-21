import { Box, Button, Flex, Image, Heading, Stack, Text } from "@chakra-ui/react"
export default function Main() {
  return (
    <>
    <Flex
      align="center"
      justify={{ base: "center", md: "space-around"}}
      direction={{ base: "column-reverse", md: "row" }}
      wrap="no-wrap"
      minH="90vh"
      backgroundColor="#2E2C2E"
      px={8}
      mb={16}
      pt={[10,30,50,70]}
      pb={[10,30,50,70]}
    >
      <Stack
        spacing={8}
        w={{ base: "80%", md: "40%" }}
        align={["center", "center", "flex-start", "flex-start"]}
      >
        <Heading
          as="h1"
          fontSize={{ base: "35px", md:"45px", xl: "62px" }}
          fontWeight="bold"
          letterSpacing="2%"
          color="white"
          textAlign={["center", "center", "left", "left"]}
        >
          <Text as="abbr">Certificate and Chirograph </Text>
        </Heading>
        <Heading
          fontSize={{ base: "15px", md:"18px", xl: "22px" }}
          lineHeight={1.5}
          textAlign={["center", "center", "left", "left"]}>
        <Text
          as="abbr"
          color="white"
          opacity="0.7"
          fontWeight="normal"
        >
          Our physical certificates are legal documents approved by an IP lawyer, printed in four copies, secured with a quintuplicate chirograph with QRCode and blockchain identifiers.
        </Text>
        </Heading>
        {/* <Link to="/signup"> */}
        <Button
          bg="black"
          variant="outline"
          backgroundColor="#CACACA"
          p={6}
          _hover={{ opacity: "0.8", borderColor: "white" }}
        >
          READ MORE
        </Button>
        {/* </Link> */}

      </Stack>
      <Box w={{ base: "70%", sm: "50%", md: "40%" }} mb={{ base: 10, md: 0 }}>
        <Image src="./certificate.svg" size="100%" />
      </Box>
    </Flex>
  </>
  )
}