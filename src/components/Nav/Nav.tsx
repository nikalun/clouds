import React from "react";
import { Link } from "react-router-dom";
import classnames from 'classnames';

import { NavProps } from "./Nav.model";

import './Nav.css';

export const Nav = (props: NavProps) => {
  const {
    value,
    url,
    isActive,
    onClick,
  } = props;

  const container = classnames('nav', {
    'nav--active': isActive,
  });

  return (
      <Link
        className={container}
        onClick={onClick}
        to={url}
      >
        {value}
      </Link>
  )
};
