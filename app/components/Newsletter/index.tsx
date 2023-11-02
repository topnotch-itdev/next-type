import { Box, Button, Grid, GridItem, Heading, Image, Input, Stack, Text } from "@chakra-ui/react";

export default function Newsletter() {
  return (
    <>
      <Box p={4}>
        <Heading as='h3' size='md' mt={20} color='blue' textAlign={'center'} textTransform={"uppercase"}>
          NewsLetter
        </Heading>
        <Heading as='h2' size='2xl' textAlign={'center'} mt={10}>
          Porting is every day here for you. Contact us and stay in touch
        </Heading>
        <Box my={20}>
          <Stack direction='row' spacing={4} align='center' justifyContent={'center'}>
            <Input placeholder='Enter your email address' width={300} size='lg' />
            <Button
              className="bg-blue-600"
              size='md'
              colorScheme='messenger'
              textTransform={"uppercase"}>
                subscribe
            </Button>
          </Stack>
        </Box>
        <Box height={200}>

        </Box>
      </Box >
    </>
  )
}