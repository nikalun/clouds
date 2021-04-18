import React from "react";

import { Nav } from "../Nav";

import './Nav.css';

const links = [
  {
    id: 1,
    url: '/',
    value: 'О приложении',
  },
  {
    id: 2,
    url: '/quotes/first',
    value: 'Котировки A',
  },
  {
    id: 3,
    url: '/quotes/second',
    value: 'Котировки Б',
  },
];

export const Navs = () => (
  <div className="navs">
    {links.map((nav) => (
      <Nav
        {...nav}
        key={nav.id}
      />
    ))}
  </div>
);
