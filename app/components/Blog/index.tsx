import { Box, Button, Grid, GridItem, Heading, Image, Text } from "@chakra-ui/react";

export default function Blog() {
  return (
    <>
      <Box p={4}>
        <Heading as='h3' size='md' mt={20} color='blue' textAlign={'center'} textTransform={"uppercase"}>
          News Desk
        </Heading>
        <Heading as='h2' size='2xl' textAlign={'center'} mt={10}>
          Latest Blog
        </Heading>
        <Grid templateColumns={{ base: 'repeat(1, 1fr)', lg: 'repeat(3, 1fr)' }} gap='10' py={20}>
          <GridItem>
            <Box rounded='md'>
              <Image src='/images/blog1.jpg' borderRadius={10} w='100%' h='auto' objectFit='cover' alt='Hero' />
              <Text as='p' size='md' mt={8} color='blue'>
                17.9.2023
              </Text>
              <Heading as='h4' size='md' color='black' mt={4}>
                Frequently Asked Questions About Design
              </Heading>
              <Text mt={6} >
                There are many variations of passages of Lorem Ips but the majority have suffered alteration in somehoi by injected humour, or randomised words.
              </Text>
              <Text mt={6} textTransform={'uppercase'} fontWeight={'bold'}>Read More</Text>
            </Box>
          </GridItem>
          <GridItem>
            <Box rounded='md'>
              <Image src='/images/blog2.jpg' borderRadius={10} w='100%' h='auto' objectFit='cover' alt='Hero' />
              <Text as='p' size='md' mt={8} color='blue'>
                17.10.2023
              </Text>
              <Heading as='h4' size='md' color='black' mt={4}>
                We've Ever Heard About Design
              </Heading>
              <Text mt={6} >
                There are many variations of passages of Lorem Ips but the majority have suffered alteration in somehoi by injected humour, or randomised words.
              </Text>
              <Text mt={6} textTransform={'uppercase'} fontWeight={'bold'}>Read More</Text>
            </Box>
          </GridItem>
          <GridItem>
            <Box rounded='md'>
              <Image src='/images/blog3.jpg' borderRadius={10} w='100%' h='auto' objectFit='cover' alt='Hero' />
              <Text as='p' size='md' mt={8} color='blue'>
                17.9.2023
              </Text>
              <Heading as='h4' size='md' color='black' mt={4}>
                Communities About Design You Should Join
              </Heading>
              <Text mt={6} >
                There are many variations of passages of Lorem Ips but the majority have suffered alteration in somehoi by injected humour, or randomised words.
              </Text>
              <Text mt={6} textTransform={'uppercase'} fontWeight={'bold'}>Read More</Text>
            </Box>
          </GridItem>
        </Grid>
      </Box>
    </>
  )
}