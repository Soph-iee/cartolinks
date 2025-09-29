import Image, { StaticImageData } from "next/image";

type CarouselImageProps = {
  item: StaticImageData;
  activeImage: number;
};
const CarouselImage = ({ item, activeImage }: CarouselImageProps) => {
  return (
    <Image
      className="object-fit rounded-2xl grow-0 shrink-0 transition-all duration-500 ease-in-out"
      style={{ translate: `${-100 * activeImage}%` }}
      src={item}
      alt="carousel-image"
    />
  );
};

export default CarouselImage;
