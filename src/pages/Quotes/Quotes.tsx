import React, { useEffect, useRef, useState, useCallback } from "react";
import { Api } from "../../api/Api";

import { Grid } from "../../components/Grid";
import { Modal } from "../../components/Modal";
import { Notification } from "../../components/Notification";
import { Preloader } from "../../components/Preloader";

import { Quote, QuotesType, QuotesProps } from './Quotes.model';

import './Quotes.css';

const request = () => Api.request<QuotesType>('https://poloniex.com/public?command=returnTicker');

export const Quotes = (props: QuotesProps) => {
  const { path } = props;
  const [quotes, setQuotes] = useState<QuotesType>({});
  const [isFetching, setFetching] = useState(false);
  const [isVisibleModal, setVisibleModal] = useState(false);
  const [isError, setError] = useState(false);

  const modalData = useRef<Quote | null>(null);

  const fetchQuotes = useCallback((isFirstRequest?: boolean) => {
    isFirstRequest && setFetching(true);
    request()
        .then((response) => {
          setQuotes((prevQuotes) => ({
            ...prevQuotes,
            ...response,
          }));
          isError && setError(false);
          isFetching && setFetching(false);
        })
        .catch((error) => {
          console.log(error);
          setError(true);
          isFetching && setFetching(false);
        })
  }, [isError, isFetching]);

  useEffect(() => {
    fetchQuotes(true);
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
  }, [isVisibleModal, fetchQuotes]);

  const handleClick = useCallback((data: Quote) => {
    setVisibleModal(true);
    modalData.current = data;
  }, []);

  const handleClose = () => {
    setVisibleModal(false);
    modalData.current = null;
  };

  return (
    <div className="quotes">
      {isError && <Notification />}
      {isFetching
          ? <Preloader />
          : (
              <Grid
                path={path}
                data={quotes}
                onClick={handleClick}
              />
          )}
      {isVisibleModal && (
          <Modal
            data={modalData.current}
            onClose={handleClose}
          />
      )}
    </div>
  )
}