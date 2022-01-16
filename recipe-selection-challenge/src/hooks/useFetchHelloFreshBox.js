import { useState, useEffect } from 'react';
import hellofreshBox from '../data/hellofreshBox';

const useFetchHelloFreshBox = () => {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setData(hellofreshBox);
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, [data]);

  return { data, loading };
};

export default useFetchHelloFreshBox;
