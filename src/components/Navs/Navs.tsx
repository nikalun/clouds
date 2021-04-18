import React, {useState} from "react";

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

export const Navs = () => {
  const [active, setActive] = useState(0);

  const handleClick = (index: number) => () => {
    setActive(index);
  }

  return (
    <div className="navs">
      {links.map((nav, index) => {
        return (
            <Nav
                {...nav}
                isActive={active === index}
                onClick={handleClick(index)}
                key={nav.id}
            />
        );
      })}
    </div>
  )
};
