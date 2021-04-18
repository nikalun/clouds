import React from "react";
import { NavLink } from "react-router-dom";

import { NavProps } from "./Nav.model";

import './Nav.css';

export const Nav = (props: NavProps) => {
  const {
    value,
    url,
  } = props;

  return (
      <NavLink
        exact
        className="nav"
        activeClassName="nav--active"
        to={url}
      >
        {value}
      </NavLink>
  )
};
