import React, { useState } from "react";
import { Menu, Dropdown, Button } from "antd";
import { MenuOutlined } from "@ant-design/icons";
import menuItems from "./menuItems.json";

const Header = () => {

  const menu = (
    <Menu>{
      menuItems.map(m => 
      <Menu.Item key={m.key}>{m.title}</Menu.Item>
      )}
    </Menu>
  );

  return (
    <div className="header">
      <div className="logo"></div>
      <Dropdown overlay={menu} trigger={["click"]}>
        <Button className="categoryBut">
          <MenuOutlined />
          Kategoriler
        </Button>
      </Dropdown>
    </div>
  );
};

export default Header;
