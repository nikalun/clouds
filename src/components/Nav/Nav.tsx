import React from "react";
import { Link } from "react-router-dom";

import { Tabs } from "../Tabs";

import './Nav.css';

const links = [
  {
    id: 1,
    url: '/about',
    value: 'О приложении',
    className: 'nav__link',
  },
  {
    id: 2,
    url: '/quotes',
    value: 'Котировки',
    className: 'nav__link'
  }
];

export const Nav = () => {
  return (
    <div className="nav">
      <Tabs data={links} />
    </div>
  )
};
