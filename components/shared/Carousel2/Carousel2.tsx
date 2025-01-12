// custom hook
import modifyComponentClassName from "@/utils/modifyComponentClassName";
import useCarousel2, { IimageData } from "./useCarousel2";

interface IProps extends IExtraClassNames {
  imagesData: IimageData[];
  interval?: number;
}

const Carousel2 = ({ imagesData, interval = 3000, className = "" }: IProps) => {
  const { curSlide } = useCarousel2(imagesData, interval);

  return (
    <div
      className={modifyComponentClassName(
        className,
        "w-full aspect-[16/10] relative"
      )}
    >
      {/* background slides */}
      {imagesData &&
        imagesData.map((imageData) => {
          const { id, image } = imageData;

          return (
            <div
              key={id}
              style={{ background: `url(${image})` }}
              className={`absolute rounded-xl w-full h-full -z-10 top-0 left-0 !bg-cover !bg-center duration-500 ${
                id === curSlide ? "opacity-100" : "opacity-0"
              }`}
            ></div>
          );
        })}
    </div>
  );
};

export default Carousel2;
