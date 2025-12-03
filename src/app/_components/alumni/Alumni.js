"use client";

import React from "react";
import AlumniCard from "./AlumniCard";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

const alumniData = [
  {
    companyLogo: "/deutsche-bank.jpg",
    review:
      "The job offer from Deutsche Bank is the best one I got with a hike close to 60 percent.",
    userImage: "/abhishek-das.jpg",
    userName: "John",
    userRole: "Tech",
  },
  {
    companyLogo: "/deutsche-bank.jpg",
    review:
      "The job offer from Deutsche Bank is the best one I got with a hike close to 60 percent.",
    userImage: "/abhishek-das.jpg",
    userName: "John",
    userRole: "Tech",
  },
  {
    companyLogo: "/deutsche-bank.jpg",
    review:
      "The job offer from Deutsche Bank is the best one I got with a hike close to 60 percent.",
    userImage: "/abhishek-das.jpg",
    userName: "John",
    userRole: "Tech",
  },
  {
    companyLogo: "/deutsche-bank.jpg",
    review:
      "The job offer from Deutsche Bank is the best one I got with a hike close to 60 percent.",
    userImage: "/abhishek-das.jpg",
    userName: "John",
    userRole: "Tech",
  },
];

function Alumni() {
  return (
    <section>
      <div className="py-10 bg-background-2">
        <div className="flex max-w-7xl m-auto px-4 ">
          <div className="max-w-3xl w-full text-center md:text-left">

            {/* Header + Buttons */}
            <div className="flex justify-center md:justify-between   items-center">
              <div className="max-w-[480px]">
                <h2 className="text-3xl sm:text-4xl md:text-5xl leading-tight md:leading-16 mb-6 font-poppins font-semibold">
                  Our alumni experience of the program
                </h2>
              </div>

              {/* Buttons only on desktop */}
              <div className="hidden md:flex gap-3">
                <button className="swiper-button-prev-custom shadow bg-white rounded-full w-[72px] h-[72px] flex justify-center items-center">
             <svg width="16" height="16" viewBox="0 0 16 16">
                    <path
                      d="M15 9H3.83L8.71 13.88C9.1 14.27 9.1 14.91 8.71 15.3C8.32 15.69 7.69 15.69 7.3 15.3L0.709999 8.71C0.319999 8.32 0.319999 7.69 0.709999 7.3L7.29 0.700001C7.68 0.310001 8.31 0.310001 8.7 0.700001C9.09 1.09 9.09 1.72 8.7 2.11L3.83 7H15C15.55 7 16 7.45 16 8C16 8.55 15.55 9 15 9Z"
                      fill="#323232"
                    ></path>
                  </svg>
                </button>

                <button className="swiper-button-next-custom shadow bg-white rounded-full w-[72px] h-[72px] flex justify-center items-center">
                        <svg width="16" height="16" viewBox="0 0 16 16">
                    <path
                      d="M1.4175 9H12.5875L7.7075 13.88C7.3175 14.27 7.3175 14.91 7.7075 15.3C8.0975 15.69 8.72749 15.69 9.11749 15.3L15.7075 8.71C16.0975 8.32 16.0975 7.69 15.7075 7.3L9.12749 0.700001C8.73749 0.310001 8.1075 0.310001 7.7175 0.700001C7.3275 1.09 7.3275 1.72 7.7175 2.11L12.5875 7H1.4175C0.867496 7 0.417496 7.45 0.417496 8C0.417496 8.55 0.867496 9 1.4175 9Z"
                      fill="#323232"
                    ></path>
                  </svg>
                </button>
              </div>
            </div>

            {/* Slider */}
<Swiper
  modules={[Navigation]}
  slidesPerView={"auto"}
  spaceBetween={24}
  centeredSlides={false}

  onSwiper={(swiper) => {
    setTimeout(() => {
      swiper.params.navigation.prevEl = ".swiper-button-prev-custom";
      swiper.params.navigation.nextEl = ".swiper-button-next-custom";
      swiper.navigation.destroy();
      swiper.navigation.init();
      swiper.navigation.update();
    });
  }}

  navigation={{
    prevEl: ".swiper-button-prev-custom",
    nextEl: ".swiper-button-next-custom",
  }}

  className="mt-6"
>
  {alumniData.map((item, index) => (
    <SwiperSlide
      key={index}
      className="!w-[420px] !flex-shrink-0"
      style={{ width: "420px" }}   // FIXED width (like your 520px example)
    >
      <AlumniCard
        companyLogo={item.companyLogo}
        review={item.review}
        userImage={item.userImage}
        userName={item.userName}
        userRole={item.userRole}
      />
    </SwiperSlide>
  ))}
</Swiper>



          </div>
        </div>
      </div>
    </section>
  );
}

export default Alumni;
