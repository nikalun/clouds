import React, { memo, useCallback } from "react";

import { Tabs } from "../Tabs";

import {Quote, QuotesType} from "../../pages/Quotes/Quotes.model";

import './Grid.css';


type GridProps = {
  data: QuotesType;
  onClick: (data: Quote) => void;
};

const tabs = [
  {
    id: 1,
    value: 'Котировки А',
  },
  {
    id: 2,
    value: 'Котировки Б',
  }
];

export const Grid = memo<GridProps>((props) => {
  const { data, onClick } = props;
  const gridData = Object.entries(data);

  const handleClick = useCallback((value: Quote) => () => {
    onClick(value);
  },[]);

  const handleTabsClick = useCallback((value) => {
    console.log(value);
  }, []);

  return (
      <>
        <Tabs data={tabs} onClick={handleTabsClick} />
        <table className="grid">
          <thead>
          <tr>
            <th className="grid__head">Currency</th>
            <th className="grid__head">Last</th>
            <th className="grid__head">Highest Bid</th>
            <th className="grid__head">Percent Change</th>
          </tr>
          </thead>
          <tbody>
          {gridData.map(([key, value]) => (
              <tr className="grid__row" key={value.id} onClick={handleClick(value)}>
                <td className="grid__cell">{key}</td>
                <td className="grid__cell">{value.last}</td>
                <td className="grid__cell">{value.highestBid}</td>
                <td className="grid__cell">{value.percentChange}</td>
              </tr>
          ))}
          </tbody>
        </table>
      </>
  )
});
