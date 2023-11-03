"use client";
import { Box, Button, Grid, GridItem, Heading, Image, Input, Stack, Text } from "@chakra-ui/react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Pagination } from 'swiper/modules';

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
        <Box height={'auto'} my={20}>
          <Swiper
            pagination={{
              dynamicBullets: true,
            }}
            modules={[Pagination]}
            className="mySwiper"
            width={400}
          >
            <SwiperSlide>
              <Image src='/images/blog1.jpg' h='auto' objectFit='cover' alt='Blog' />
            </SwiperSlide>
            <SwiperSlide>
              <Image src='/images/blog2.jpg' h='auto' objectFit='cover' alt='Blog' />
            </SwiperSlide>
            <SwiperSlide>
              <Image src='/images/blog3.jpg' h='auto' objectFit='cover' alt='Blog' />
            </SwiperSlide>
          </Swiper>
        </Box>
      </Box >
    </>
  )
}