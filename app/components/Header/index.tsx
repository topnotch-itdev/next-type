import { Flex, Box, Spacer, Container, Image } from '@chakra-ui/react'
import NextLink from 'next/link'
import { Link } from '@chakra-ui/react'

export default function Header() {
  return (
    <header>
      <Flex px={{ base: 4, lg: 8 }} py='4'>
        <Box>
          <Image src='/images/logo.png' width={{ base: 50, md: 20, lg: 20 }} h='auto' objectFit='cover' alt='Logo' />
        </Box>
        <Spacer />
        <Box>
          <Flex justify='space-between' p={{ base: 2, lg: 4 }}>
            <Box w={'100%'} display={{ base: 'none', md: 'block', lg: 'block' }}>
              <Link as={NextLink} href='/dashboard' px={10}>
                Home
              </Link>
              <Link as={NextLink} href='/about' px={10}>
                About
              </Link>
              <Link as={NextLink} href='/service' px={10}>
                Service
              </Link>
              <Link as={NextLink} href='/blog' px={10}>
                Blog
              </Link>
              <Link as={NextLink} href='/contact' px={10}>
                Contact
              </Link>
            </Box>
            <Box cursor='pointer' _hover={{ color: 'black' }} _selected={{ color: 'blue' }} >
              <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 20 20">
                <path fill="currentColor" d="M10 3a1.5 1.5 0 1 1 0 3a1.5 1.5 0 0 1 0-3Zm0 5.5a1.5 1.5 0 1 1 0 3a1.5 1.5 0 0 1 0-3Zm1.5 7a1.5 1.5 0 1 0-3 0a1.5 1.5 0 0 0 3 0Z"></path></svg>
            </Box>
          </Flex>
        </Box>
      </Flex>
    </header>
  )
}