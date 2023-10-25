import { Box, Button, Grid, GridItem, Heading, Image, Text } from "@chakra-ui/react";

export default function About() {
  return (
    <>
      <Box p={4}>
        <Grid templateColumns='repeat(2, 1fr)' gap='20'>
          <GridItem>
            <Image src='/images/about.jpg' mt={20} w='100%' h='auto' objectFit='cover' alt='Hero' />
          </GridItem>
          <GridItem>
            <Heading as='h3' size='md' mt={20} color='gray' textTransform={"uppercase"}>
              About Me
            </Heading>
            <Heading as='h2' size='2xl' mt={10}>
              Hello! I'm Andrew Lister.
            </Heading>
            <Heading as='h4' size='md' color='gray' mt={10}>
              Every great design begin with an even better story
            </Heading>
            <Text mt={8}>
              It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. 
              Many desktop publishing packages.
            </Text>
          </GridItem>
        </Grid>
      </Box>
    </>
  )
}