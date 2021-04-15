import React from "react";
import { Link } from "react-router-dom";

import { TabProps } from "./Tab.model";

import './Tab.css';

export const Tab = (props: TabProps) => {
  const { value, url, className, id, isActive, onClick } = props;

  const handleClick = (id: TabProps['id']) => () => {
    onClick && onClick(id);
  }

  const container = isActive ? "tab tab--active" : "tab";

  return (
    <div className={container} onClick={handleClick(id)}>
      {url
          ? <Link className={className} to={url}>{value}</Link>
          : <span>{value}</span>
      }
    </div>
  )
};
