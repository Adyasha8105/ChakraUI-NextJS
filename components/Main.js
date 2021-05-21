import { Box, Button, Flex, Image, Heading, Stack, Text } from "@chakra-ui/react"
import Card from "./Card"
import Howitworks from "./Howitworks"
export default function Main() {
  return (
    <>
    <Flex
      align="center"
      justify={{ base: "center", md: "space-around"}}
      direction={{ base: "column-reverse", md: "row" }}
      wrap="no-wrap"
      minH="80vh"
      px={8}
      mb={16}
      pt={[10,30,50, 70]}
      pb={[10,30, 50, 70]}
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
          color="primary.800"
          textAlign={["center", "center", "left", "left"]}
        >
          Making original truly <Text color="rgba(235,109,109)">unique</Text>
        </Heading>
        <Heading
          as="h2"
          fontSize={{ base: "15px", md:"18px", xl: "22px" }}
          color="primary.700"
          opacity="0.7"
          fontWeight="normal"
          lineHeight={1.5}
          textAlign={["center", "center", "left", "left"]}
        >
          Elegant and digitally immutable certificates of authenticity for the original artwork. 
        <Text
          size="md"
          fontWeight="semibold"
          color="primary.800"
        >
          Soft launch April 2021!
        </Text>
        </Heading>
        {/* <Link to="/signup"> */}
        <Button
          bg="black"
          variant="outline"
          color="white"
          p={6}
          _hover={{ opacity: "0.8", borderColor: "teal.700" }}
        >
          DISCOVER
        </Button>
        {/* </Link> */}

      </Stack>
      <Box w={{ base: "70%", sm: "50%", md: "40%" }} mb={{ base: 10, md: 0 }}>
        <Image src="./intro.svg" size="100%" />
      </Box>
    </Flex>

  <Card />
  <Howitworks />
  </>
  )
}