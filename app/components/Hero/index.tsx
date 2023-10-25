import { Box, Button, Grid, GridItem, HStack, Heading, Icon, IconButton, Image, Stack } from "@chakra-ui/react";

export default function Hero() {
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
            <HStack mt={20}>
              <Box w='40px' h='40px'>
                <IconButton
                  isRound={true}
                  variant='solid'
                  aria-label='Facebook'
                  fontSize='20px'
                  icon={<MdiFacebook />}
                />
              </Box>
              <Box w='40px' h='40px'>
                <IconButton
                  isRound={true}
                  variant='solid'
                  aria-label='Instagram'
                  fontSize='20px'
                  icon={<MdiInstagram />}
                />
              </Box>
              <Box w='40px' h='40px'>
                <IconButton
                  isRound={true}
                  variant='solid'
                  aria-label='Skype'
                  fontSize='20px'
                  icon={<MdiSkypeBusiness />}
                />
              </Box>
              <Box w='40px' h='40px'>
                <IconButton
                  isRound={true}
                  variant='solid'
                  aria-label='Pinterest'
                  fontSize='20px'
                  icon={<MdiPinterest />}
                />
              </Box>
            </HStack>
          </GridItem>
          <GridItem>
            <Image src='/images/devops.jpg' mt={20} w='100%' h='auto' objectFit='cover' alt='Hero' />
          </GridItem>
        </Grid>
      </Box>
    </>
  )
}

function MdiFacebook() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 24 24" ><path fill="blue" d="M12 2.04c-5.5 0-10 4.49-10 10.02c0 5 3.66 9.15 8.44 9.9v-7H7.9v-2.9h2.54V9.85c0-2.51 1.49-3.89 3.78-3.89c1.09 0 2.23.19 2.23.19v2.47h-1.26c-1.24 0-1.63.77-1.63 1.56v1.88h2.78l-.45 2.9h-2.33v7a10 10 0 0 0 8.44-9.9c0-5.53-4.5-10.02-10-10.02Z"></path></svg>
  )
}

function MdiInstagram() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 24 24"><path fill="blue" d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4H7.6m9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8A1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5a5 5 0 0 1-5 5a5 5 0 0 1-5-5a5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3a3 3 0 0 0 3 3a3 3 0 0 0 3-3a3 3 0 0 0-3-3Z"></path></svg>
  )
}

function MdiSkypeBusiness() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 24 24"><path fill="blue" d="M12.03 16.53c-2.66 0-3.85-1.31-3.85-2.29c0-.5.37-.86.88-.86c1.14 0 .85 1.62 2.97 1.62c1.09 0 1.7-.57 1.7-1.18c0-.36-.18-.76-.9-.94l-2.37-.59c-1.91-.48-2.26-1.51-2.26-2.48c0-2.02 1.9-2.78 3.68-2.78c1.62 0 3.58.91 3.58 2.12c0 .52-.46.82-.96.82c-1 0-.8-1.35-2.76-1.35c-.97 0-1.51.44-1.51 1.07c0 .63.77.81 1.43.99l1.76.39c1.92.43 2.41 1.55 2.41 2.6c0 1.64-1.26 2.86-3.8 2.86M18 6c2.07 2.04 2.85 4.89 2.36 7.55c.41.72.64 1.56.64 2.45a5 5 0 0 1-5 5c-.89 0-1.73-.23-2.45-.64c-2.66.49-5.51-.29-7.55-2.36c-2.07-2.04-2.85-4.89-2.36-7.55C3.23 9.73 3 8.89 3 8a5 5 0 0 1 5-5c.89 0 1.73.23 2.45.64c2.66-.49 5.51.29 7.55 2.36M8 5a3 3 0 0 0-3 3c0 .79.3 1.5.8 2.04c-.7 2.24-.17 4.78 1.6 6.56a6.527 6.527 0 0 0 6.56 1.6c.54.5 1.25.8 2.04.8a3 3 0 0 0 3-3c0-.79-.3-1.5-.8-2.04c.7-2.24.17-4.78-1.6-6.56a6.527 6.527 0 0 0-6.56-1.6C9.5 5.3 8.79 5 8 5Z"></path></svg>
  )
}

function MdiPinterest() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 24 24"><path fill="blue" d="M9.04 21.54c.96.29 1.93.46 2.96.46a10 10 0 0 0 10-10A10 10 0 0 0 12 2A10 10 0 0 0 2 12c0 4.25 2.67 7.9 6.44 9.34c-.09-.78-.18-2.07 0-2.96l1.15-4.94s-.29-.58-.29-1.5c0-1.38.86-2.41 1.84-2.41c.86 0 1.26.63 1.26 1.44c0 .86-.57 2.09-.86 3.27c-.17.98.52 1.84 1.52 1.84c1.78 0 3.16-1.9 3.16-4.58c0-2.4-1.72-4.04-4.19-4.04c-2.82 0-4.48 2.1-4.48 4.31c0 .86.28 1.73.74 2.3c.09.06.09.14.06.29l-.29 1.09c0 .17-.11.23-.28.11c-1.28-.56-2.02-2.38-2.02-3.85c0-3.16 2.24-6.03 6.56-6.03c3.44 0 6.12 2.47 6.12 5.75c0 3.44-2.13 6.2-5.18 6.2c-.97 0-1.92-.52-2.26-1.13l-.67 2.37c-.23.86-.86 2.01-1.29 2.7v-.03Z"></path></svg>
  )
}