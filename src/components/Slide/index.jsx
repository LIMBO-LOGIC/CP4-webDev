import PropTypes from "prop-types";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import useContexts from "../../hooks/useContext";
import styles from "./Slide.module.css"; // Importando o CSS Module

Slide.propTypes = {
  images: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default function Slide({ images }) {
  const { isMobileSmall } = useContexts();

  return (
    <div className={styles.slideContainer}>
      {" "}
      {/* Adicionando uma div para encapsular */}
      <Swiper
        spaceBetween={0}
        slidesPerView={isMobileSmall ? 1 : 2}
        pagination={{ clickable: true }}
        navigation
        loop={true}
        autoplay={{ delay: 2000, disableOnInteraction: false }}
        modules={[Autoplay]}
        className={"slides"}
      >
        {images.map((src, index) => (
          <SwiperSlide key={index}>
            <img
              className={styles.imageSlide} // Usando o estilo do CSS Module
              src={src}
              alt={`Slide ${index + 1}`}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
