import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { BiChevronRight, BiChevronLeft } from "react-icons/bi";

function SampleNextArrow({ onClick }) {
  return (
    <div
      onClick={onClick}
      className="absolute -right-5 top-1/2 -translate-y-1/2 z-10 cursor-pointer w-10 h-10 bg-theme rounded-full flex items-center justify-center shadow-md"
    >
      <BiChevronRight size={24} className="text-gray-700" />
    </div>
  );
}

function SamplePrevArrow({ onClick }) {
  return (
    <div
      onClick={onClick}
      className="absolute -left-5 top-1/2 -translate-y-1/2 z-10 cursor-pointer w-10 h-10 bg-theme rounded-full flex items-center justify-center shadow-md"
    >
      <BiChevronLeft size={24} className="text-gray-700" />
    </div>
  );
}

const Banner = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    appendDots: (dots) => (
      <div>
        <ul className="flex gap-2 items-center absolute bottom-10 left-24">
          {dots}
        </ul>
      </div>
    ),
    customPaging: () => (
      <div className="w-2 h-2 bg-white rounded-full transition-all duration-300"></div>
    ),
  };

  return (
    <section className="relative">
      <div className="container">
        <Slider {...settings}>
          <div>
            <img className="w-full" src="/bannerpic.png" alt="banner" />
          </div>
          <div>
            <img className="w-full" src="/bannerpic.png" alt="banner" />
          </div>
          <div>
            <img className="w-full" src="/bannerpic.png" alt="banner" />
          </div>
          <div>
            <img className="w-full" src="/bannerpic.png" alt="banner" />
          </div>
        </Slider>
      </div>
    </section>
  );
};

export default Banner;
