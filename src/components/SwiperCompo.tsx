import { Swiper, SwiperSlide } from "swiper/react";
// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { useStore } from "../contexts/store";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

type Props = {};

export default function SwiperCompo({}: Props) {
  const { swipState }: any = useStore();
  return (
    <div className="w-full h-full rounded-xl shadow-xl bg-gradient-to-br from-primary to-secondary">
      <Swiper
        className="h-full w-full"
        spaceBetween={20}
        centeredSlides={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
      >
        {swipState.map((item: string, index: number) => {
          return (
            <SwiperSlide
              key={index}
              className="flex items-center justify-center text-5xl font-medium"
            >
              {item}
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}
