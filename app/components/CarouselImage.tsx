import Image, { StaticImageData } from "next/image";

type CarouselImageProps = {
  item: StaticImageData;
  activeImage: number;
};
const CarouselImage = ({ item, activeImage }: CarouselImageProps) => {
  return (
 <Image
   className="object-cover rounded-2xl grow-0 shrink-0 transition-transform duration-500 ease-in-out"
   style={{ transform: `translateX(${-100 * activeImage}%)` }}
   src={item}
   alt={`Carousel image ${activeImage + 1}`}
   width={800} 
   height={600} 
   loading={activeImage === 0 ? "eager" : "lazy"} 
   priority={activeImage === 0} 
 />

  );
};


//  import Image from "next/image";


export default CarouselImage;
