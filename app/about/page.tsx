import { Container } from '@chakra-ui/react'
import Footer from "../components/Footer";
import Header from "../components/Header";
import Blog from '../components/Blog';
import Breadcrumb from '../components/Breadcrumb';

export default function Dashboard() {
  return (
    <>
      <Header />
      <Container maxW='6xl' >
        <Breadcrumb title='About Us' />
        <Blog />
      </Container>
      <Footer />
    </>
  )
}