import { Box, Button, Grid, GridItem, Heading, Icon, IconButton, Image, Stack } from "@chakra-ui/react";

function MdiFacebook() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" ><path fill="currentColor" d="M12 2.04c-5.5 0-10 4.49-10 10.02c0 5 3.66 9.15 8.44 9.9v-7H7.9v-2.9h2.54V9.85c0-2.51 1.49-3.89 3.78-3.89c1.09 0 2.23.19 2.23.19v2.47h-1.26c-1.24 0-1.63.77-1.63 1.56v1.88h2.78l-.45 2.9h-2.33v7a10 10 0 0 0 8.44-9.9c0-5.53-4.5-10.02-10-10.02Z"></path></svg>
  )
}

export function Hero() {
  return (
    <>
      <Box p={4}>
        <Grid templateColumns='repeat(2, 1fr)' gap='4'>
          <GridItem>
            <Heading as='h3' size='md' mt={20} textTransform={"uppercase"}>
              Welcome my world
            </Heading>
            <Heading as='h1' size='4xl' noOfLines={1} mt={10}>
              Creative
            </Heading>
            <Heading as='h1' size='3xl' mt={10}>
              Experienced Developer
            </Heading>
            <Button
              className="bg-blue-600"
              size='md'
              colorScheme='messenger'
              textTransform={"uppercase"}
              mt={20}>
              My Services
            </Button>
            <Stack pt={4}>
              <IconButton
                variant='outline'
                colorScheme='teal'
                aria-label='Facebook'
                icon={<MdiFacebook />}
              />
            </Stack>
          </GridItem>
          <GridItem>
            <Image src='/images/devops.jpg' mt={20} w='100%' h='auto' objectFit='cover' alt='Hero' />
          </GridItem>
        </Grid>
      </Box>
    </>
  )
}