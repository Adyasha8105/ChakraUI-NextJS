import { Box, Stack, StackDivider, Link, SimpleGrid,Image,ButtonGroup, IconButton, Heading, Text } from '@chakra-ui/react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter, faGithub, faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons'

export default function Footer() {
  return (
  <Box
    as="footer"
    role="contentinfo"
    py="12"
    backgroundColor="#151414"
    pr={[8,20,50,120]}
    pl={[8,20,50,120]}
    px={8}
  >
    <Stack spacing="10" divider={<StackDivider />}>
      <Stack
        pb={10}
        direction={{
          base: 'column',
          lg: 'row',
        }}
        spacing={{
          base: '10',
          lg: '28',
        }}
      >
        <Box flex={1}
        minW="200px">
          <Image src="./logo.png" alt="Logo" />
        <Text color="#878787" pt={6} fontSize={{ base: "15px", md:"18px", xl: "22px" }} letterSpacing="1px">
        Making original truly unique
        </Text>
        </Box>
        <Stack
          direction={{
            base: 'column',
            md: 'row',
          }}
          spacing={{
            base: '10',
            md: '20',
          }}
        >
          <SimpleGrid 
          columns={2}
          spacing={{
            base: '10',
            md: '20',
            lg: '28',
          }}
          flex="1">
            <Box minW="380px" >
              <Stack color="#878787" 
              fontSize={{ base: "15px", md:"18px", xl: "22px" }}
              >
                <Link>Home</Link>
                <Link>Services</Link>
                <Link>Our Collective</Link>
              </Stack>
            </Box>
            <Box minW="380px"
            fontSize={{ base: "15px", md:"18px", xl: "22px" }}
            >
              <Stack color="#878787">
                <Link>Blog</Link>
                <Link>Why Uncopied?</Link>
                <Link>Contact Us</Link>
              </Stack>
            </Box>
            </SimpleGrid>
            <Stack
              direction={{
                base: 'column',
                md: 'row',
              }}
              spacing={{
                base: '20',
                md: '30',
              }}
            >
            <Box flex="1">
            <Text color="#fff" pb={6} fontSize={{ base: "15px", md:"18px", xl: "22px" }} letterSpacing="1px" fontWeight="semibold">
              Follow <Text as="abbr" color="rgba(235,109,109)">Us</Text>
            </Text>
            <ButtonGroup variant="ghost" color="#878787">
              <IconButton as="a" href="#" fontSize="1.8rem" mr={5} _hover={{backgroundColor: "rgba(235,109,109)", color: "#fff"}} icon={<FontAwesomeIcon icon={faTwitter} />} />
              <IconButton as="a" href="#" fontSize="1.8rem" mr={5} _hover={{backgroundColor: "rgba(235,109,109)", color: "#fff"}} icon={<FontAwesomeIcon icon={faGithub} />} />
              <IconButton as="a" href="#" fontSize="1.8rem" mr={5} _hover={{backgroundColor: "rgba(235,109,109)", color: "#fff"}} icon={<FontAwesomeIcon icon={faFacebook} />} />
              <IconButton as="a" href="#" fontSize="1.8rem" _hover={{backgroundColor: "rgba(235,109,109)", color: "#fff"}} icon={<FontAwesomeIcon icon={faInstagram} />} />
            </ButtonGroup>
            </Box>
            </Stack>
        </Stack>
      </Stack>
      <Stack
        direction={{
          base: 'column-reverse',
          md: 'row',
        }}
        justifyContent="space-between"
        alignSelf="center"
      >
          <Text color="#878787" textAlign="center" fontSize={{ base: "15px", md:"18px", xl: "22px" }} >
            Copyright &copy; {new Date().getFullYear()} , All Rights Reserved <Text as="abbr" color="rgba(235,109,109)">Uncopied</Text>
          </Text>
      </Stack>
    </Stack>
  </Box>
  )
}