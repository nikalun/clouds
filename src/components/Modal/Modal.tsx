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
      </div>
      <button onClick={onClose} className="modal__close">Закрыть</button>
    </div>
  )
};