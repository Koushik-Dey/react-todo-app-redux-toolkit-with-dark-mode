import {
  Button,
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
} from "@nextui-org/react";
import React from "react";
import ThemeBtn from "./ThemeBtn";

const Topbar = () => {
  return (
    <div>
      <Navbar height="7vh" className="dark:bg-gray-700">
        <NavbarBrand>
          <p className="font-bold text-inherit text-2xl">Todo</p>
        </NavbarBrand>
        <NavbarContent justify="end">
          <NavbarItem>
            <ThemeBtn />
          </NavbarItem>
        </NavbarContent>
      </Navbar>
    </div>
  );
};

export default Topbar;
