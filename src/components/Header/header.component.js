import React, { useContext, useState } from "react";
import ShopContext from "../Context/shop-context";
import Cart from "../Cart/cart.component";
import { Menu, Dropdown, Button, Badge, AutoComplete } from "antd";
import {
  MenuOutlined,
  UserOutlined,
  ShoppingCartOutlined,
  SearchOutlined,
} from "@ant-design/icons";
import menuItems from "./menuItems.json";

const Header = () => {
  const [visible, setVisible] = useState(false);
  const context = useContext(ShopContext);
  const cartCount = context.cart.length;

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
          <AutoComplete
            className="searchInput"
            size="large"
            placeholder={<p><SearchOutlined /> Ürün ara</p>}
          />
          <div>
            <Button className="account">
              <UserOutlined />
              Üyelik
            </Button>
            <Dropdown overlay={<Cart visible={visible} />} trigger={["click"]}>
              <Button
                className="account"
                placement="bottomLeft"
                onClick={() => setVisible(true)}
              >
                <Badge showZero count={cartCount} className="cartBadge">
                  <ShoppingCartOutlined />
                </Badge>
                Sepetim
              </Button>
            </Dropdown>
          </div>
        </div>
      )}
    </ShopContext.Consumer>
  );
};

export default Header;
