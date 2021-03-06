import React from "react";
import routes from "../helpers/routes";
import Logo from "./Logo";
import { NavLink } from "./NavLink";
import ThemeSwitch from "./ThemeSwitch";

const Topbar = () => {
  return (
    <nav className="px-4 top-0 fixed w-full z-50 box-border">
      <div
        className="
        container
        mx-auto
        max-w-screen-lg
        flex
        items-center
        py-4
        px-5
        wave-border
        bottom
        solid
      "
      >
        <Logo />
        <div
          className="
          flex-grow
          items-end
          justify-end
          flex
          space-x-6
          header-font
          uppercase
        "
        >
          <NavLink href={routes.stories} passHref activeClassName="active">
            <a className="leading-none wave-border bottom">Stories</a>
          </NavLink>
          <div>
            <ThemeSwitch />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Topbar;
