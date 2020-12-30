import React, { useState, useEffect } from 'react';
import axios from 'axios';

export const Stream = () => {
  const [rate, setRate] = useState({});
  const [loading, setLoading] = useState(false);
  const [hasError, setHasError] = useState(false);

  const KEY = 'eefb1f1c7d243a1a3e87597d84953e75';
  const baseURL = `http://api.currencylayer.com/live?access_key=${KEY}&currencies=EUR`;

  useEffect(() => {
    const fetchDataFromAPI = async () => {
      setLoading(true);
      setHasError(false);
      try {
        const response = await axios.get(baseURL);
        setRate(response.data);
        console.log(response.data);
        setLoading(false);
      } catch (error) {
        setHasError(true);
        setLoading(false);
      }
    };
    fetchDataFromAPI();
  }, [baseURL]);

  return (
    <>
      {loading ? (
        <>
          <span>Loading...</span>
        </>
      ) : hasError ? (
        <span>Error</span>
      ) : (
        <div>
          <span>Last Price</span>
          {<h2>USDEUR : {rate.quotes.USDEUR}</h2>}
          <h4>Time {new Date(rate.timestamp).toUTCString()}</h4>
        </div>
      )}
    </>
  );
};
