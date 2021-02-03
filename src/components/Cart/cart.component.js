import React, { useContext, useState, useEffect } from "react";
import ShopContext from "../Context/shop-context";
import { Card, Avatar } from "antd";

const Cart = (props) => {
  const context = useContext(ShopContext);
  const { Meta } = Card;
  const [visible] = useState(props.visible);
  const [cartSum, setcartSum] = useState(0);

  const total = () => {
    let totalVal = 0;
    for (let i = 0; i < context.cart.length; i++) {
      totalVal += context.cart[i].price;
    }
    setcartSum(totalVal);
  };

  useEffect(() => {
    total();
  });

  return (
    <ShopContext.Consumer>
      {(context) => (
        <div className="cartCard">
          {context.cart.map((product) => (
            <Card
              key={product.code}
              style={{
                width: 300,
                marginTop: 16,
                display: visible ? "block" : "none",
              }}
            >
              <Meta
                avatar={<Avatar src={product.img} />}
                title={product.title}
                description={"₺" + product.price}
              />
            </Card>
          ))}
          <div className="completeCard">
            <p
              style={{
                textAlign: "left",
                marginLeft: "10%",
                top: "20%",
                position: "relative",
              }}
            >
              Toplam :
              <span style={{ float: "right", marginRight: "10%" }}>
                {"₺ " + cartSum}
              </span>
            </p>
            <button className="completeBut">ALIŞVERİŞİ TAMAMLA</button>
          </div>
        </div>
      )}
    </ShopContext.Consumer>
  );
};

export default Cart;
