import React, { useState, useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ShopContext from "../Context/shop-context";
import { faExchangeAlt, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination, Controller, Thumbs } from "swiper";
import "swiper/swiper-bundle.css";
import "./bestseller.css";

const BestSeller = () => {
  SwiperCore.use([Navigation, Pagination, Controller, Thumbs]);
  const context = useContext(ShopContext);
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const [controlledSwiper] = useState(null);

  const slides = context.bestSellers;

  return (
    <ShopContext.Consumer>
      {(context) => (
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
            {slides.map((element) => (
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
                      top: "22%",
                      position: "relative",
                      fontSize: "0.7vw",
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
                <div className="bestSellerBut">
                  <FontAwesomeIcon
                    icon={faExchangeAlt}
                    size="lg"
                    style={{ top: "30%", position: "relative" }}
                  />
                </div>
                <button
                  className="cartButton"
                  onClick={context.addProductToCart.bind(this, element)}
                >
                  SEPETE EKLE
                </button>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      )}
    </ShopContext.Consumer>
  );
};

export default BestSeller;
