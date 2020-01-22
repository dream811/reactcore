import { useState, useEffect } from 'react';

export const useHttp = (url, dependencies=[], data=null, method='GET') => {
  const [isLoading, setIsLoading] = useState(false);
  const [fetchedData, setFetchedData] = useState(null);

  useEffect(() => {
    setIsLoading(true);
    const token = localStorage.getItem('token');
    if (token) {
        options.headers.set('Authorization', `Bearer ${token}`);
    }
    const options = {
        method: method, // *GET, POST, PUT, DELETE, etc.
        mode: 'cors', // no-cors, cors, *same-origin
        cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
        credentials: 'same-origin', // include, *same-origin, omit
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json' 
        },
        redirect: 'follow', // manual, *follow, error
        referrer: 'no-referrer', // no-referrer, *client
    }
    if (data) {
        options.body = JSON.stringify(data);
    }
    const authToken = localStorage.getItem('access_token');
    if (authToken) {
        options.headers.Authorization = `Bearer ${authToken}`;
    }
    fetch(url, options)
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to fetch.');
        }
        return response.json();
      })
      .then(data => {
        setIsLoading(false);
        setFetchedData(data);
      })
      .catch(err => {
        setIsLoading(false);
      });
  }, dependencies);

  return [isLoading, fetchedData];
};