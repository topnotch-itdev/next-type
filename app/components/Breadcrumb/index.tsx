import { Box, Button, Grid, GridItem, Heading, Image, Text } from "@chakra-ui/react";

export default function Breadcrumb({ title }: { title: string }) {
  return (
    <>
      <Box p={4}>
        <Heading as='h2' size='2xl' textAlign={'center'} mt={10}>
          { title }
        </Heading>
        <Heading as='h3' size='md' mt={20} mb={40} color='blue' textAlign={'center'} textTransform={"uppercase"}>
          Home / { title }
        </Heading>
      </Box>
    </>
  )
}