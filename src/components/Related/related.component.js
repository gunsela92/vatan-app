import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExchangeAlt, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import "./related.css";
import relatedProducts from "../data/relatedProducts.json";

const Related = () => {
  return (
    <div className="relatedProducts">
      <span>Öne çıkan ürünler</span>
      <span className="allRelated">
        TÜM ÖNE ÇIKANLAR <FontAwesomeIcon icon={faArrowRight} size="m" />
      </span>
      <ul className="productUl">
        {relatedProducts.map((a) => (
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
                  fontSize: "10px",
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
                  fontSize: "12px",
                }}
              >
                {a.title}{" "}
              </div></a>
              {a.samedayshipping && (
                <div className="shipping">
                  <label>BUGÜN KARGODA</label>
                </div>
              )}
              <label
                style={{
                  top: "75%",
                  position: "absolute",
                  color: "#1564C0",
                  fontSize: "1.5em",
                  left: "0",
                  width: "100%",
                  fontWeight: "700",
                }}
              >
                ₺ {a.price}
              </label>

              <a href={a.dest_url}>
                <div className="buttonSvg">
                  <FontAwesomeIcon
                    icon={faExchangeAlt}
                    size="lg"
                    style={{ top: "30%", position: "relative" }}
                  />
                </div>
                <button className="cartButton">SEPETE EKLE</button>
              </a>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Related;
