import React from "react";

import './Modal.css';
import {Quote} from "../../pages/Quotes/Quotes.model";

type ModalProps = {
  data: Quote | null;
  onClose: () => void;
}

export const Modal = (props: ModalProps) => {
  const { data, onClose } = props;
  console.log(data);
  return (
    <div className="modal">
      <div className="modal__header">Данные по котировке</div>
      <div className="modal__body">
        <ul>
          <li>Last - {data?.last}</li>
          <li>Highest Bid - {data?.highestBid}</li>
          <li>Percent Change - {data?.percentChange}</li>
          <li>Id - {data?.id}</li>
          <li>Base Volume - {data?.baseVolume}</li>
          <li>Is Frozen - {data?.isFrozen}</li>
          <li>Low 24hr - {data?.low24hr}</li>
          <li>Lowest Ask - {data?.lowestAsk}</li>
          <li>Percen Change - {data?.percentChange}</li>
          <li>Post Only - {data?.postOnly}</li>
          <li>Quote Volume - {data?.quoteVolume}</li>
        </ul>
      </div>
      <button onClick={onClose} className="modal__close">Закрыть</button>
    </div>
  )
};