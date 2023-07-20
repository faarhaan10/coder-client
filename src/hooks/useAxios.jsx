 
import { useState, useEffect } from 'react';
import axios from 'axios';

const useAxios = (method,route,doc={}) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    
    const config ={
        url: `http://localhost:3000/api/${route}`,
        method,
        data:doc
      }

  const fetchData = async (config) => {
    setLoading(true);
    try {
      const response = await axios(config);
      setData(response.data);
      setError(null);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData(config);
  }, [route,method]);

  return { data, loading, error, refetch: () => fetchData(config) };
};


export default useAxios;
