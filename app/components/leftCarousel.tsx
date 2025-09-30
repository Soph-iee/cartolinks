import { ImageContainerProps } from "../types/type";
import CarouselImage from "./CarouselImage";

const LeftContainer = ({
  Images,
  activeImage,
  setActiveImage,
}: ImageContainerProps) => {
  return (
    <div
      className="active-image grid grid-cols-1 w-full rounded-2xl relative"
      role="region"
      aria-label="Image Carousel"
    >
      {/* carousel images */}
      <div className="flex overflow-hidden">
        {Images?.map((item, i) => (
          <CarouselImage
            key={i}
            item={item.Leftimg}
            activeImage={activeImage}
          />
        ))}
      </div>

      <div className="flex  gap-2 justify-end" role="tablist">
        {Images?.map((item, i) => {
          const isActive = activeImage === i;
          return (
            <div key={item.id}>
              {isActive && (
                <section className=" p-4 rounded-xl absolute inset-0 bottom-6 flex items-center bg-gradient-to-t from-black/70 via-black/20 to-transparent text-white">
                  <span className="uppercase self-start">try this now</span>
                  <h2 className="lg:text-6xl text-4xl font-bold text-center uppercase">
                    {item.main}
                  </h2>
                  <div className="description flex items-center justify-between absolute px-2 lg:bottom-8 bottom-4 lg:text-base text-xs ">
                    <div>
                      <h3 className="lg:text-xl capitalize">{item.heading}</h3>
                      <p>{item.description}</p>
                    </div>
                    <button
                      className=" lg:py-1.5 lg:px-3 px-1.5 py-1 bg-white text-black rounded-3xl text-nowrap font-medium"
                      aria-label={`try ${item.main}`}
                    >
                      Try {item.main}
                    </button>
                  </div>
                </section>
              )}

              <button
                onClick={() => {
                  setActiveImage(i);
                }}
                className={`w-2 h-2 rounded-full cursor-pointer hover:scale-110 transition-transform duration-300 ${
                  isActive
                    ? "  dark:bg-gray-50 bg-gray-500"
                    : " dark:bg-gray-500 bg-black"
                }`}
                aria-label={`Go to slide ${i + 1}`}
                aria-selected={isActive}
                role="tab"
              ></button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default LeftContainer;
