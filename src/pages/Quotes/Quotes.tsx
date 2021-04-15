import React, { useEffect, useRef, useState, useCallback } from "react";
import { Api } from "../../api/Api";

import { Grid } from "../../components/Grid";
import { Modal } from "../../components/Modal";

import { Quote, QuotesType } from './Quotes.model';

const request = () => Api.request<QuotesType>('https://poloniex.com/public?command=returnTicker');

export const Quotes = () => {
  const [quotes, setQuotes] = useState<QuotesType>({});
  const [isFetching, setFetching] = useState(false);
  const [isVisibleModal, setVisibleModal] = useState(false);

  const modalData = useRef<Quote | null>(null);

  useEffect(() => {
    fetchQuotes(true);
  }, [])


  useEffect(() => {
    let interval = setInterval(fetchQuotes, 5000);

    if (isVisibleModal) {
      clearInterval(interval)
    }

    if (!isVisibleModal && !interval) {
      interval = setInterval(fetchQuotes, 5000);
    }

    return () => {
      clearInterval(interval)
    }
  }, [isVisibleModal]);


  const fetchQuotes = (isFetching?: boolean) => {
    isFetching && setFetching(true);
    request()
        .then((response) => {
          setQuotes((prevQuotes) => ({
              ...prevQuotes,
              ...response,
          }));
          isFetching && setFetching(false);
        })
        .catch((error) => {
          console.log(error);
          isFetching && setFetching(false);
        })
  }

  const handleClick = useCallback((data: Quote) => {
    setVisibleModal(true);
    modalData.current = data;
  }, []);

  const handleClose = () => {
    setVisibleModal(false);
    modalData.current = null;
  };

  return (
    <div>
      {isFetching ? 'Preloader' : <Grid data={quotes} onClick={handleClick} />}
      {isVisibleModal && <Modal data={modalData.current} onClose={handleClose} />}
    </div>
  )
}