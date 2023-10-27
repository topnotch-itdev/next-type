import { Box, Container, Flex, Grid, GridItem } from '@chakra-ui/react'
import Footer from "../components/Footer";
import Header from "../components/Header";
import Hero from '../components/Hero';
import About from '../components/About';
import Portfolio from '../components/Portfolio';

export default function Dashboard() {
  return (
    <>
      <Header />
      <Container maxW='6xl' >
        <Hero />
        <About />
        <Portfolio />
      </Container>
      <Footer />
    </>
  )
}