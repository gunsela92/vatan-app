import React, { useState } from "react";
import ShopContext from "../Context/shop-context";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExchangeAlt, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import "./related.css";

const Related = () => {
  const cartButton = useState("SEPETE EKLE");

  return (
    <ShopContext.Consumer>
      {(context) => (
        <div className="relatedProducts">
          <span>Öne çıkan ürünler</span>
          <span className="allRelated">
            TÜM ÖNE ÇIKANLAR <FontAwesomeIcon icon={faArrowRight} size="sm" />
          </span>
          <ul className="productUl">
            {context.products.map((a) => (
              <li key={a.code} className="productGrid">
                <div className="designProducts">
                  <a href={a.dest_url}>
                    <img
                      style={{ position: "relative", top: "15%" }}
                      src={a.img}
                      alt={a.title}
                    />

                    <label
                      style={{
                        top: "25%",
                        position: "relative",
                        fontSize: "0.6vw",
                        display: "block",
                        color: "gray",
                      }}
                    >
                      {a.code}
                    </label>
                    <div
                      style={{
                        padding: "20px",
                        top: "25%",
                        position: "relative",
                        fontSize: "0.7vw",
                      }}
                    >
                      {a.title}{" "}
                    </div>
                  </a>
                  {a.samedayshipping && (
                    <div className="shipping">
                      <label>BUGÜN KARGODA</label>
                    </div>
                  )}
                  <label className="relatedPrices">₺ {a.price}</label>
                  <div className="buttonSvg">
                    <FontAwesomeIcon
                      icon={faExchangeAlt}
                      size="lg"
                      style={{ top: "30%", position: "relative" }}
                    />
                  </div>
                  <button
                    key={a.code}
                    className="cartButton"
                    onClick={context.addProductToCart.bind(this, a)}
                  >
                    {cartButton}
                  </button>
                </div>
              </li>
            ))}
          </ul>
        </div>
      )}
    </ShopContext.Consumer>
  );
};

export default Related;
