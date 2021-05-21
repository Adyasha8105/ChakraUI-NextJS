import { Box, Stack, StackDivider, Link, SimpleGrid,Image,ButtonGroup, IconButton, Heading, Text } from '@chakra-ui/react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter, faGithub, faLinkedIn } from '@fortawesome/free-brands-svg-icons'

export default function Footer() {

  return (
  <Box
    as="footer"
    role="contentinfo"
    py="12"
    backgroundColor="#202020"
    pr={[8,19,50,120]}
    pl={[8,19,50,120]}
    px={8}
  >
    <Stack spacing="10" divider={<StackDivider />}>
      <Stack
        direction={{
          base: 'column',
          lg: 'row',
        }}
        spacing={{
          base: '10',
          lg: '28',
        }}
      >
        <Box flex="1" 
        w={[100, 120, 150]}
        objectFit="cover">
        <Image src="./logo1.svg" alt="Logo" />
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
            <Box minW="130px">
              <Heading
                as="h4"
                mb="4"
                color="#fff"
                fontSize="sm"
                fontWeight="semibold"
                textTransform="uppercase"
                letterSpacing="wider"
               >Product </Heading>
              <Stack color="#fff">
                <Link>How it works</Link>
                <Link>Pricing</Link>
                <Link>Use Cases</Link>
              </Stack>
            </Box>
            <Box minW="130px">
            <Heading
                as="h4"
                mb="4"
                color="#fff"
                fontSize="sm"
                fontWeight="semibold"
                textTransform="uppercase"
                letterSpacing="wider"
               >Legal </Heading>
              <Stack color="#fff">
                <Link>Privacy</Link>
                <Link>Terms</Link>
                <Link>License</Link>
              </Stack>
            </Box>
          </SimpleGrid>
        </Stack>
      </Stack>
      <Stack
        direction={{
          base: 'column-reverse',
          md: 'row',
        }}
        justifyContent="space-between"
        alignItems="center"
      >
          <Text fontSize="sm" color="#fff">
            &copy; {new Date().getFullYear()} Envelope, Inc. All rights reserved.
          </Text>
        <ButtonGroup variant="ghost" color="#fff">
          <IconButton as="a" href="#" fontSize="1.5rem" icon={<FontAwesomeIcon icon={faTwitter} />} />
          <IconButton as="a" href="#" fontSize="1.5rem" icon={<FontAwesomeIcon icon={faGithub} />} />
          <IconButton as="a" href="#" fontSize="1.5rem" icon={<FontAwesomeIcon icon={faLinkedIn} />} />
        </ButtonGroup>
      </Stack>
    </Stack>
  </Box>
  )
}