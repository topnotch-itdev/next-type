import { Container } from '@chakra-ui/react'
import Footer from "../components/Footer";
import Header from "../components/Header";
import Blog from '../components/Blog';
import Breadcrumb from '../components/Breadcrumb';

export default function BlogPage() {
  return (
    <>
      <Header />
      <Container maxW='6xl' >
        <Breadcrumb title='Blog' />
        <Blog />
      </Container>
      <Footer />
    </>
  )
}