import React from "react";

import './Preloader.css';

import spinner from '../../assets/Spinner-5.gif';

export const Preloader = () => {
  return (
      <div className="preloader">
        <img src={spinner} alt=""/>
      </div>
  )
}