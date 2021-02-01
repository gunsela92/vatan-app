import React from "react";
import "./related.css";
import relatedProducts from "../data/relatedProducts.json";

const Related = () => {
  return (
    <div>
      <span>Öne çıkan ürünler</span>
      <ul className="productUl">
        {relatedProducts.map((a) => (
          <li key={a.code} className="productGrid">
            <div className="designProducts">
              <a href={a.dest_url}>
                <img style={{ position: "relative", top: "15%" }} src={a.img} />
              </a>
              <label style={{ top: "25%", position: "relative" }}>
                {a.title}{" "}<br/>
              </label>
              <label style={{ top: "75%", position: "absolute", color:"#1564C0",fontSize:"1.5em",left:"0",width:"100%" }}>
                ₺ {a.price}
              </label>

              <a href={a.dest_url}>
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
