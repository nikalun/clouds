import React, { useEffect, useRef, useCallback } from "react";
import { observer, useLocalObservable } from 'mobx-react'
import { Api } from "../../api/Api";

import { Grid } from "../../components/Grid";
import { Modal } from "../../components/Modal";
import { Notification } from "../../components/Notification";
import { Preloader } from "../../components/Preloader";

import { Quote, QuotesType, QuotesProps } from './Quotes.model';

import './Quotes.css';

const request = () => Api.request<QuotesType>('https://poloniex.com/public?command=returnTicker');

export const Quotes = observer((props: QuotesProps) => {
  const { path } = props;

  const store = useLocalObservable(() => ({
    quotes: {},
    isFetching: false,
    isVisibleModal: false,
    isError: false,
    setFetching(value: boolean) {
      this.isFetching = value;
    },
    setError(value: boolean) {
      this.isError = value;
    },
    setQuotes(quotes: QuotesType) {
      this.quotes = {
        ...this.quotes,
        ...quotes,
      };
    },
    setVisibleModal(value: boolean) {
      this.isVisibleModal = value;
    }
  }))

  const modalData = useRef<Quote | null>(null);

  const fetchQuotes = useCallback((isFirstRequest?: boolean) => {
    isFirstRequest && store.setFetching(true);
    request()
        .then((response) => {
          store.setQuotes(response);
          store.isError && store.setError(false);
          store.isFetching && store.setFetching(false);
        })
        .catch((error) => {
          console.log(error);
          store.setError(true);
          
          store.isFetching && store.setFetching(false); 
        })
  }, [store.isError, store.setError, store.isFetching, store.setFetching, store.setQuotes]);

  useEffect(() => {
    fetchQuotes(true);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])


  useEffect(() => {
    let interval = setInterval(fetchQuotes, 5000);

    if (store.isVisibleModal) {
      clearInterval(interval)
    }

    if (!store.isVisibleModal && !interval) {
      interval = setInterval(fetchQuotes, 5000);
    }

    return () => {
      clearInterval(interval)
    }
  }, [store.isVisibleModal, fetchQuotes]);

  const handleClick = useCallback((data: Quote) => {
    store.setVisibleModal(true);
    modalData.current = data;
  }, []);

  const handleClose = () => {
    store.setVisibleModal(false);
    modalData.current = null;
  };

  return (
    <div className="quotes">
      {store.isError && <Notification />}
      {store.isFetching
          ? <Preloader />
          : (
              <Grid
                path={path}
                data={store.quotes}
                onClick={handleClick}
              />
          )}
      {store.isVisibleModal && (
          <Modal
            data={modalData.current}
            onClose={handleClose}
          />
      )}
    </div>
  )
})