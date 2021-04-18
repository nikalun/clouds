import React, { memo } from "react";

import { Quote, QuotesType } from "../../pages/Quotes/Quotes.model";

import './Grid.css';


type GridProps = {
  path: string;
  data: QuotesType;
  onClick: (data: Quote) => void;
};

export const Grid = memo<GridProps>((props) => {
  const { path, data, onClick } = props;
  const gridData = Object.entries(data);

  const isFirst = path === 'first';

  const handleClick = (value: Quote) => () => {
    onClick(value);
  };

  return (
      <>
        <table className="grid">
          <thead>
          <tr>
            <th className="grid__head">Currency</th>
            {isFirst ? (
              <>
                <th className="grid__head">Last</th>
                <th className="grid__head">Highest Bid</th>
                <th className="grid__head">Percent Change</th>
              </>
            ) : (
              <>
                <th className="grid__head">Id</th>
                <th className="grid__head">Is Frozen</th>
                <th className="grid__head">Base Volume</th>
                <th className="grid__head">Low 24hr</th>
                <th className="grid__head">Lowest Ask</th>
                <th className="grid__head">Percent Change</th>
                <th className="grid__head">Post Only</th>
                <th className="grid__head">Quote Volume</th>
              </>
            )}
          </tr>
          </thead>
          <tbody>
          {gridData.map(([key, value]) => (
              <tr className="grid__row" key={value.id} onClick={handleClick(value)}>
                <td className="grid__cell">{key}</td>
                {isFirst ? (
                  <>
                    <td className="grid__cell">{value.last}</td>
                    <td className="grid__cell">{value.highestBid}</td>
                    <td className="grid__cell">{value.percentChange}</td>
                  </>
                ) : (
                  <>
                    <td className="grid__cell">{value.id}</td>
                    <td className="grid__cell">{value.isFrozen}</td>
                    <td className="grid__cell">{value.baseVolume}</td>
                    <td className="grid__cell">{value.low24hr}</td>
                    <td className="grid__cell">{value.lowestAsk}</td>
                    <td className="grid__cell">{value.percentChange}</td>
                    <td className="grid__cell">{value.postOnly}</td>
                    <td className="grid__cell">{value.quoteVolume}</td>
                  </>
                )}
              </tr>
          ))}
          </tbody>
        </table>
      </>
  )
});
