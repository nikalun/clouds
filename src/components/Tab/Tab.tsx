import React from "react";
import { Link } from "react-router-dom";

import { TabProps } from "./Tab.model";

import './Tab.css';

export const Tab = (props: TabProps) => {
  const { value, url, className, id, onClick } = props;

  const handleClick = (id: TabProps['id']) => () => {
    onClick && onClick(id);
  }

  return (
    <div className="tab" onClick={handleClick(id)}>
      {url
          ? <Link className={className} to={url}>{value}</Link>
          : <span>{value}</span>
      }
    </div>
  )
};
