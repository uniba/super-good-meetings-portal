import Head from "next/head";
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.scss'

export default function Default () {
  return (
    <>
      <Head>
        <link rel="stylesheet" href="https://unpkg.com/swiper/swiper.min.css" />
      </Head>
      <Swiper>
        <SwiperSlide>Slide #1</SwiperSlide>
        <SwiperSlide>Slide #1</SwiperSlide>
        <SwiperSlide>Slide #1</SwiperSlide>
        <SwiperSlide>Slide #1</SwiperSlide>
        <SwiperSlide>Slide #1</SwiperSlide>
      </Swiper>
    </>
  );
};