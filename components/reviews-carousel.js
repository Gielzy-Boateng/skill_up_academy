"use client";
import { useRef } from "react";
import WidthConstraint from "./width-constraint";
import { Carousel, CarouselSlide } from "@mantine/carousel";
import Autoplay from "embla-carousel-autoplay";
import { reviewCard } from "@/constants";

export default function ReviewsCarousel() {
  const autoPlay = useRef(Autoplay({ delay: 2000, stopOnInteraction: false }));

  return (
    <WidthConstraint className="mt-10">
      <Carousel
        slideSize={{ base: "95%", sm: "50%", md: "25%" }}
        withIndicators
        loop={true}
        height={20}
        slidesToScroll={1}
        align="start"
        slideGap={{ base: "2%", sm: "3%", md: "2%" }}
        plugins={[autoPlay.current]}
        onMouseEnter={autoPlay.current.stop}
        onMouseLeave={autoPlay.current.reset}
        onTouchEnd={autoPlay.current.reset}
      >
        {[...reviewCard, ...reviewCard].map((review, i) => (
          <CarouselSlide key={i}>
            <div className=" bg-[#B8E6C1] rounded-2xl py-5 px-3 lg:px-10">
              <div className="flex flex-col items-start">
                <div className="flex items-center gap-x-3">
                  <p className="py-4 px-6 bg-orange-500 text-white rounded-full">
                    {review.letterImage}
                  </p>
                  <p className=" text-wrap lg:text-nowrap text-lg font-bold text-emerald-900">
                    {review.name}
                  </p>
                </div>
                <div className="flex flex-col gap-y-1 mt-2">
                  <p className="text-nowrap font-semibold text-gray-600 ">
                    Course Taken:{" "}
                    <span className="font-bold text-stone-800">
                      {review.courseTaken}
                    </span>
                  </p>
                  <p className="text-nowrap font-semibold text-gray-600">
                    Date completed:{" "}
                    <span className="font-bold text-stone-800">
                      {review.dateCompleted}
                    </span>
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-x-3">
                <p>{review.rating}</p>
                <p className="font-bold">{review.dateCompleted}</p>
              </div>
              <div className="mt-5">
                <p>{review.review}</p>
                <p className="font-bold flex items-end justify-end">
                  {review.love}
                </p>
              </div>
            </div>
          </CarouselSlide>
        ))}
      </Carousel>
    </WidthConstraint>
  );
}
