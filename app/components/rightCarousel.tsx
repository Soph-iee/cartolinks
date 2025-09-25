import Image from "next/image";
import { ImageContainerProps } from "../types/type";
import { FaCircleArrowLeft, FaCircleArrowRight } from "react-icons/fa6";

const RightCarousel = ({
  Images,
  activeImage,
  setActiveImage,
}: ImageContainerProps) => {
  return (
    <div className="active-image grid grid-cols-1 w-full h-full rounded-2xl relative">
      <Image
        className="object-cover rounded-2xl w-auto h-full"
        src={Images[activeImage].Rightimg}
        alt="random-image"
      />

      <div className="flex  justify-end">
        {Images &&
          Images.map((item, i) => {
            return (
              <div key={item.id}>
                {activeImage === i ? (
                  <section className=" p-4 rounded-xl absolute inset-0 bottom-5.5 flex items-center bg-gradient-to-t from-black/70 via-black/20 to-transparent text-white">
                    <span className="uppercase self-start">try this now</span>
                    <h1 className="text-6xl font-semibold text-center capitalize text-gray-100 tracking-tighter">
                      {item.rightHeading}
                    </h1>
                    <div className="description flex items-center justify-between absolute px-2 bottom-8">
                      <div>
                        <h3 className="text-xl capitalize">{item.heading}</h3>
                        <p>{item.description}</p>
                      </div>
                     
                    </div>
                  </section>
                ) : (
                  ""
                )}
              </div>
            );
          })}
        <div
          className="btn-container flex mr-8 gap-1 items-start
        "
        >
          <button>
            <FaCircleArrowLeft
              className="bg-black rounded-full text-white text-xl"
              onClick={() => {
                if (activeImage === 0) {
                  setActiveImage(Images.length - 1);
                } else setActiveImage((prev) => prev - 1);
              }}
            />
          </button>
          <button>
            <FaCircleArrowRight
              onClick={() => {
                if (activeImage === Images.length - 1) {
                  setActiveImage(0);
                } else setActiveImage((prev) => prev + 1);
              }}
              className="bg-black rounded-full text-white text-xl"
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default RightCarousel;
