import { Box, Button, Grid, GridItem, Heading, Image, Text } from "@chakra-ui/react";

export default function Portfolio() {
  return (
    <>
      <Box p={4}>
        <Heading as='h3' size='md' mt={20} color='blue' textAlign={'center'} textTransform={"uppercase"}>
          Latest work
        </Heading>
        <Heading as='h2' size='2xl' textAlign={'center'} mt={10}>
          My portfolio
        </Heading>
        <Grid templateColumns={{base: 'repeat(1, 1fr)', lg: 'repeat(3, 1fr)'}} gap='10' py={20}>
          <GridItem>
            <Box boxShadow='lg' p='6' rounded='md' bg='white'>
              <Image src='/images/about.jpg' borderRadius={10} w='100%' h='auto' objectFit='cover' alt='Hero' />
              <Text as='p' size='md' mt={2} color='blue'>
                Data Visualization
              </Text>
              <Heading as='h4' size='md' color='black' mt={4}>
                Tourist booking application
              </Heading>
            </Box>
          </GridItem>
          <GridItem>
            <Box boxShadow='lg' p='6' rounded='md' bg='white'>
              <Image src='/images/about.jpg' borderRadius={10} w='100%' h='auto' objectFit='cover' alt='Hero' />
              <Text as='p' size='md' mt={2} color='blue'>
                Mockup Design
              </Text>
              <Heading as='h4' size='md' color='black' mt={4}>
                Smart Mobile Application
              </Heading>
            </Box>
          </GridItem>
          <GridItem>
            <Box boxShadow='lg' p='6' rounded='md' bg='white'>
              <Image src='/images/about.jpg' borderRadius={10} w='100%' h='auto' objectFit='cover' alt='Hero' />
              <Text as='p' size='md' mt={2} color='blue'>
                UI/UX Art
              </Text>
              <Heading as='h4' size='md' color='black' mt={4}>
                Daily Health Application
              </Heading>
            </Box>
          </GridItem>
          <GridItem>
            <Box boxShadow='lg' p='6' rounded='md' bg='white'>
              <Image src='/images/about.jpg' borderRadius={10} w='100%' h='auto' objectFit='cover' alt='Hero' />
              <Text as='p' size='md' mt={2} color='blue'>
                Mockup Design
              </Text>
              <Heading as='h4' size='md' color='black' mt={4}>
                Mobile Application Build
              </Heading>
            </Box>
          </GridItem>
          <GridItem>
            <Box boxShadow='lg' p='6' rounded='md' bg='white'>
              <Image src='/images/about.jpg' borderRadius={10} w='100%' h='auto' objectFit='cover' alt='Hero' />
              <Text as='p' size='md' mt={2} color='blue'>
                Data Visualization
              </Text>
              <Heading as='h4' size='md' color='black' mt={4}>
                Wearable Mobile Fitness App
              </Heading>
            </Box>
          </GridItem>
          <GridItem>
            <Box boxShadow='lg' p='6' rounded='md' bg='white'>
              <Image src='/images/about.jpg' borderRadius={10} w='100%' h='auto' objectFit='cover' alt='Hero' />
              <Text as='p' size='md' mt={2} color='blue'>
                DevOps Application
              </Text>
              <Heading as='h4' size='md' color='black' mt={4}>
                Tourist booking application
              </Heading>
            </Box>
          </GridItem>
        </Grid>
      </Box>
    </>
  )
}