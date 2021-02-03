import React, { useContext, useEffect } from "react";
import ShopContext from "../Context/shop-context";
import { Menu, Dropdown, Button, Badge } from "antd";
import {
  MenuOutlined,
  UserOutlined,
  ShoppingCartOutlined,
} from "@ant-design/icons";
import menuItems from "./menuItems.json";

const Header = () => {
  const context = useContext(ShopContext);
  const cartCount = context.cart.length;

  useEffect(() => {
    setTimeout(() => {
      console.log(context.cart.length);
    }, 1500);
  });

  const menu = (
    <Menu>
      {menuItems.map((m) => (
        <Menu.Item key={m.key}>{m.title}</Menu.Item>
      ))}
    </Menu>
  );

  return (
    <ShopContext.Consumer>
      {(context) => (
        <div className="header">
          <div className="logo"></div>
          <Dropdown overlay={menu} trigger={["click"]}>
            <Button className="categoryBut">
              <MenuOutlined />
              Kategoriler
            </Button>
          </Dropdown>
          <div>
            <Button className="account">
              <UserOutlined />
              Üyelik
            </Button>
            <Button className="account">
              <Badge showZero count={cartCount} className="cartBadge">
                <ShoppingCartOutlined />
              </Badge>
              Sepetim
            </Button>
          </div>
        </div>
      )}
    </ShopContext.Consumer>
  );
};

export default Header;
