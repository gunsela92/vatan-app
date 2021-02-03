import React, { useContext, useState, useEffect } from "react";
import ShopContext from "../Context/shop-context";
import { Card, Avatar } from "antd";

const Cart = (props) => {
  const context = useContext(ShopContext);
  const { Meta } = Card;
  const [visible] = useState(props.visible);

  return (
    <ShopContext.Consumer>
      {(context) => (
        <div>
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
                description={product.price + " ₺"}
              />
            </Card>
          ))}
        </div>
      )}
    </ShopContext.Consumer>
  );
};

export default Cart;
