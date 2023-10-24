import { Box, Container, Flex, Grid, GridItem } from '@chakra-ui/react'
import Footer from "../components/Footer";
import Header from "../components/Header";
import { Hero } from '../components/Hero';

export default function Dashboard() {
  return (
    <>
      <Header />
      <Container maxW='6xl' >
        <Hero />
      </Container>
      <Footer />
    </>
  )
}