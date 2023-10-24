import { Flex, Box, Spacer, Container, Icon } from '@chakra-ui/react'
import NextLink from 'next/link'
import { Link } from '@chakra-ui/react'

export default function Header() {
  return (
    <header>
      <Flex px='8' py='4'>
        <Box p='4' bg='red.400'>
          Logo
        </Box>
        <Spacer />
        <Container>
          <Flex justify='space-between' p={4}>
            <Link as={NextLink} href='/dashboard' >
              Home
            </Link>
            <Link as={NextLink} href='/about'>
              About
            </Link>
            <Link as={NextLink} href='/service'>
              Service
            </Link>
            <Link as={NextLink} href='/blog'>
              Blog
            </Link>
            <Link as={NextLink} href='/contact'>
              Contact
            </Link>
            <Box cursor='pointer' _hover={{ color: 'black' }} _selected={{ color: 'blue' }} >
              <svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 20 20"><path fill="currentColor" d="M10 3a1.5 1.5 0 1 1 0 3a1.5 1.5 0 0 1 0-3Zm0 5.5a1.5 1.5 0 1 1 0 3a1.5 1.5 0 0 1 0-3Zm1.5 7a1.5 1.5 0 1 0-3 0a1.5 1.5 0 0 0 3 0Z"></path></svg>
            </Box>
          </Flex>
        </Container>
      </Flex>
    </header>
  )
}