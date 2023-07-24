
import { useState, useEffect } from 'react';
import axios from 'axios';

const useAxios = (method, route, doc = {},reload=null) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const accessToken = localStorage.getItem('token');

  const server = 'http://localhost:3000/api'
  // const server = 'https://ph-forum-server.vercel.app/api'

  const config = {
    url: `${server}/${route}`,
    method,
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
    data: doc
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
 
  }, [route, method, JSON.stringify(doc),reload]);

  return { data, loading, error, refetch: () => fetchData(config) };
};


export default useAxios;
