"use client";

// custom hook
import useCarousel1, { ImageData } from "./useCarousel1";

interface IProps {
  imagesData: ImageData[];
  interval?: number;
}

const Carousel1 = ({ imagesData, interval = 3000 }: IProps) => {
  const { centerSlide, leftSlide, rightSlide } = useCarousel1(
    imagesData,
    interval
  );

  return (
    <div
      className="w-full aspect-[16/10] relative"
      style={{
        perspective: "1100px",
        perspectiveOrigin: "center",
      }}
    >
      {/* forward slides */}
      {imagesData &&
        imagesData.map((imageData) => {
          const { id, image } = imageData;

          return (
            <div
              key={id}
              style={{
                backfaceVisibility: "hidden",
                MozBackfaceVisibility: "hidden",
                WebkitBackfaceVisibility: "hidden",
                backgroundImage: `url(${image})`,
                top: "50%",
                transform: `translateY(-50%) translateX(${
                  id === centerSlide
                    ? "50%"
                    : id === leftSlide
                    ? "0%"
                    : id === rightSlide
                    ? `300%`
                    : "50%"
                }) rotateY(${
                  id === centerSlide
                    ? "0deg"
                    : id === rightSlide
                    ? "-50deg"
                    : id === leftSlide
                    ? "50deg"
                    : "0deg"
                })`,
              }}
              className={`absolute bg-cover bg-center bg-no-repeat shadow-medium rounded-xl overflow-hidden ease-out ${
                id === centerSlide || id === rightSlide || id === leftSlide
                  ? "transition-all duration-1000 opacity-100 visible z-40"
                  : "transition-all duration-500 opacity-0 collapse z-10"
              } ${id === centerSlide ? "w-1/2" : "w-1/4"} aspect-[16/10]`}
            >
              &nbsp;
            </div>
          );
        })}
    </div>
  );
};

export default Carousel1;
