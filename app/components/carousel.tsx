"use client";

import Images from "../data/carouselData";

import { useState } from "react";
import LeftContainer from "./leftCarousel";
import RightCarousel from "./rightCarousel";

const Carousel = () => {
  const [activeImage, setActiveImage] = useState(0);

  return (
    <div className="grid lg:grid-cols-2 gap-10 h-auto mt-20">
      <LeftContainer
        Images={Images}
        setActiveImage={setActiveImage}
        activeImage={activeImage}
      />
      <RightCarousel
        Images={Images}
        setActiveImage={setActiveImage}
        activeImage={activeImage}
      />
    </div>
  );
};

export default Carousel;
