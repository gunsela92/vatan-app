import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExchangeAlt, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination, Controller, Thumbs } from "swiper";
import "swiper/swiper-bundle.css";
import "./bestseller.css";
import bestSeller from "../data/bestSeller.json";

const BestSeller = () => {
  SwiperCore.use([Navigation, Pagination, Controller, Thumbs]);
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const [controlledSwiper] = useState(null);

  const slides = [];

  bestSeller.forEach((element) => {
    slides.push(
      <SwiperSlide
        key={`slide-${element.title}`}
        tag="li"
        className="bestSellerGrid"
      >
        <a href={element.dest_url}>
          <img
            src={element.img}
            style={{
              position: "relative",
              top: "15%",
              listStyle: "none",
              left: "30%",
            }}
            alt={`Slide ${element.title}`}
          />
          <div
            style={{
              padding: "20px",
              top: "25%",
              position: "relative",
              fontSize: "12px",
              textAlign: "center",
            }}
          >
            {element.title}{" "}
          </div>

          <label className="bestPrice">₺ {element.price}</label>
        </a>
        {element.samedayshipping && (
          <div className="shipping">
            <label>BUGÜN KARGODA</label>
          </div>
        )}
        <a href={element.dest_url}>
          <div className="bestSellerBut">
            <FontAwesomeIcon
              icon={faExchangeAlt}
              size="lg"
              style={{ top: "30%", position: "relative" }}
            />
          </div>
          <button className="cartButton">SEPETE EKLE</button>
        </a>
      </SwiperSlide>
    );
  });

  return (
    <div className="bestProducts">
      <span>Çok Satanlar</span>
      <span className="allBest">
        TÜM ÇOK SATANLAR <FontAwesomeIcon icon={faArrowRight} size="sm" />
      </span>
      <Swiper
        className="bestSwiper"
        id="main"
        thumbs={{ swiper: thumbsSwiper }}
        controller={{ control: controlledSwiper }}
        onSwiper={setThumbsSwiper}
        watchSlidesVisibility
        wrapperTag="ul"
        navigation
        pagination
        spaceBetween={0}
        slidesPerView={5}
      >
        {slides}
      </Swiper>
    </div>
  );
};

export default BestSeller;
